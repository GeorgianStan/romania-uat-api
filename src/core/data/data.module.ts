/**
 * * Dependencies
 */
import { Module } from '@nestjs/common';

/**
 * * Services
 */
import { DataService } from './data.service';

@Module({
  imports: [],
  providers: [DataService],
  exports: [DataService],
})
export class DataModule {}
