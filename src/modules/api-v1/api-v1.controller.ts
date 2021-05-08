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
import {
  ApiBody,
  ApiCreatedResponse,
  ApiQuery,
  ApiTags,
  getSchemaPath,
} from '@nestjs/swagger';

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
  @ApiCreatedResponse({
    description: 'Get a list with all the UAT of type ZONE',
    schema: {
      allOf: [{ $ref: getSchemaPath(UAT), type: 'array' }],
    },
  })
  getZone(): UAT[] {
    return this.apiV1Service.zone;
  }

  @Get('judete')
  @ApiCreatedResponse({
    description: 'Get a list with all the UAT of type JUDETE',
    schema: {
      allOf: [{ $ref: getSchemaPath(UAT), type: 'array' }],
    },
  })
  getJudete(): UAT[] {
    return this.apiV1Service.judete;
  }

  @UsePipes(new ValidationPipe({ transform: true }))
  @Get('siruta')
  @ApiCreatedResponse({
    description: 'Return one UAT that the SIRUTA code provided',
    schema: {
      oneOf: [{ $ref: getSchemaPath(UAT) }, {}],
    },
  })
  getUATBySirutaCode(@Query() payload: GetUATBySirutaCodeDto): UAT | {} {
    return this.apiV1Service.getUATBySirutaCode(payload.siruta) || {};
  }

  @UsePipes(new ValidationPipe({ transform: true }))
  @Get('uat')
  @ApiCreatedResponse({
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
