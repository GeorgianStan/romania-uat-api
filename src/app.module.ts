/**
 * * Dependencies
 */

import { Module } from '@nestjs/common';

/**
 * * Modules
 */
import { ConfigModule } from './core/config/config.module';
import { UtilsModule } from './core/utils/utils.module';
import { DataModule } from './core/data/data.module';
import { ApiV1Module } from './modules/api-v1/api-v1.module';

/**
 * * Services
 */
import { AppService } from './app.service';

/**
 * * Controllers
 */
import { AppController } from './app.controller';

@Module({
  imports: [ConfigModule, UtilsModule, DataModule, ApiV1Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
