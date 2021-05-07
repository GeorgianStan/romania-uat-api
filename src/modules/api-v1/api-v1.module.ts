/**
 * * Dependencies
 */
import { Module } from '@nestjs/common';

/**
 * * Services
 */
import { ApiV1Service } from './api-v1.service';

/**
 * * Controller
 */
import { ApiV1Controller } from './api-v1.controller';

/**
 * * Modules
 */
import { DataModule } from 'src/core/data/data.module';

@Module({
  imports: [DataModule],
  providers: [ApiV1Service],
  controllers: [ApiV1Controller],
})
export class ApiV1Module {}
