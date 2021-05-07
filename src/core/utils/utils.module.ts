/**
 * * Dependencies
 */
import { Module } from '@nestjs/common';

/**
 * * Services
 */
import { UtilsService } from './utils.service';

@Module({
  imports: [],
  providers: [UtilsService],
  exports: [UtilsService],
})
export class UtilsModule {}
