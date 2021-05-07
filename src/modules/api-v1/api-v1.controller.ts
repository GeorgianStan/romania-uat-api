/**
 * * Dependencies
 */
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

/**
 * * Services
 */
import { ApiV1Service } from './api-v1.service';

@ApiTags('api-v1')
@Controller('api/v1')
export class ApiV1Controller {
  constructor(private readonly apiV1Service: ApiV1Service) {}

  @Get('judete')
  getJudete() {
    return true;
  }
}
