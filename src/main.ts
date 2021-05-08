/**
 * * Dependencies
 */
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import rateLimit from 'express-rate-limit';
import morgan from 'morgan';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';

/**
 * * Modules
 */
import { AppModule } from './app.module';

/**
 * * Serivces
 */
import { ConfigService } from './core/config/config.service';
import { UtilsService } from './core/utils/utils.service';

/**
 * * App info
 */
import { version, name as AppName } from '../package.json';
import { UAT } from './core/data/@types/enitity';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const configService: ConfigService = app.get(ConfigService);
  const utilsService: UtilsService = app.get(UtilsService);

  // ? hide 'x-powered-by' header
  app.use(helmet.hidePoweredBy());

  // ? cors
  app.enableCors();

  // ? get the real IP in case this app will run behind a reverse proxy
  app.set('trust proxy', 1);

  // ? rate limit protection
  app.use(
    rateLimit({
      windowMs: utilsService.stringToMs(
        configService.get('WINDOWMS_RATE_LIMIT'),
      ),
      max: parseInt(configService.get('RATE_LIMIT_MAX_REQ')), // ? limit each IP to x requests per windowMs
    }),
  );

  // ? logger
  app.use(
    morgan(
      ':method :url Req-Header :req[header] Status :status Content-Length :res[content-length] Res-Time :response-time ms IP :remote-addr',
    ),
  );

  // ? swagger
  const config = new DocumentBuilder()
    .setTitle(AppName)
    .setDescription('API documentation')

    .setVersion(version)
    .build();

  const document = SwaggerModule.createDocument(app, config, {
    extraModels: [UAT],
  });
  SwaggerModule.setup(`documentation`, app, document);

  // ? start the server
  await app.listen(configService.get('NODE_PORT'), () => {
    console.log(
      `app up in ${process.env.NODE_ENV} at ${configService.get('NODE_PORT')}`,
    );
  });
}
bootstrap();
