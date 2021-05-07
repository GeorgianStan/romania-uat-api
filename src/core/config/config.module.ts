/**
 * * Dependencies
 */
import { Module } from '@nestjs/common';

/**
 * * Services
 */
import { ConfigService } from './config.service';

@Module({
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
