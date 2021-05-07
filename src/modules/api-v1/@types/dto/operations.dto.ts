/**
 * * Dependencies
 */
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';
import { UATType } from 'src/core/data/@types';

export class GetUATBySirutaCodeDto {
  @ApiProperty({ description: 'SIRUTA code of the UAT' })
  @IsInt()
  @Transform(({ value }) => Number(value))
  readonly siruta: number;
}

export class GetUATByQueryDto {
  @ApiProperty({ description: 'SIRUTA code of the UAT' })
  @ApiPropertyOptional()
  @IsInt()
  @Transform(({ value }) => Number(value))
  @IsOptional()
  readonly siruta?: number;

  @ApiProperty({
    description:
      'Identification code for the unit hierarchically superior administrative',
  })
  @ApiPropertyOptional()
  @IsInt()
  @Transform(({ value }) => Number(value))
  @IsOptional()
  readonly sirutaUp?: number;

  @ApiProperty({
    enum: Object.keys(UATType).filter((_) => !isNaN(Number(_))),
    description: 'The type of the UAT',
  })
  @ApiPropertyOptional()
  @IsInt()
  @Transform(({ value }) => Number(value))
  @IsOptional()
  readonly type?: UATType;
}
