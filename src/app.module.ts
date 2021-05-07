/**
 * * Dependencies
 */

import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';

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

/**
 * * Filters
 */
import { GlobalErrorFilter } from './common/expection-filters/global-exception.filter';

@Module({
  imports: [ConfigModule, UtilsModule, DataModule, ApiV1Module],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: GlobalErrorFilter,
    },
  ],
})
export class AppModule {}
