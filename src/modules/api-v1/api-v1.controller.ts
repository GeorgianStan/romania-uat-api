/**
 * * Dependencies
 */
import {
  Controller,
  Get,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiResponse, ApiTags, getSchemaPath } from '@nestjs/swagger';

/**
 * * Services
 */
import { ApiV1Service } from './api-v1.service';

/**
 * * Types
 */
import { UAT } from 'src/core/data/@types';
import { GetUATByQueryDto, GetUATBySirutaCodeDto } from './@types/dto';

@ApiTags('api-v1')
@Controller('api/v1')
export class ApiV1Controller {
  constructor(private readonly apiV1Service: ApiV1Service) {}

  @Get('zone')
  @ApiResponse({
    status: 200,
    description: 'Get a list with all the UAT of type ZONE',
    schema: {
      allOf: [{ $ref: getSchemaPath(UAT), type: 'array' }],
    },
  })
  getZone(): UAT[] {
    return this.apiV1Service.zone;
  }

  @Get('judete')
  @ApiResponse({
    description: 'Get a list with all the UAT of type JUDETE',
    status: 200,
    schema: {
      allOf: [{ $ref: getSchemaPath(UAT), type: 'array' }],
    },
  })
  getJudete(): UAT[] {
    return this.apiV1Service.judete;
  }

  @UsePipes(new ValidationPipe({ transform: true }))
  @Get('siruta')
  @ApiResponse({
    description: 'Return one UAT that the SIRUTA code provided',
    status: 200,
    schema: {
      oneOf: [{ $ref: getSchemaPath(UAT) }, {}],
    },
  })
  getUATBySirutaCode(
    @Query() payload: GetUATBySirutaCodeDto,
  ): UAT | Record<any, never> {
    return this.apiV1Service.getUATBySirutaCode(payload.siruta) || {};
  }

  @UsePipes(new ValidationPipe({ transform: true }))
  @Get('uat')
  @ApiResponse({
    status: 200,
    description:
      'Return one or more UAT objects that match the provided query. This method can be used to get most of the data required.',
    schema: {
      allOf: [{ $ref: getSchemaPath(UAT), type: 'array' }],
    },
  })
  getUATByQuery(@Query() payload: GetUATByQueryDto): UAT[] {
    return this.apiV1Service.getUATByQuery(payload);
  }
}
