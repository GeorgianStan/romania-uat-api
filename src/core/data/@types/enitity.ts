/**
 * * Dependencies
 */
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

/**
 * * Types
 */
import { UATType } from './enum';

export class UAT {
  @ApiProperty({ description: 'Name of the UAT' })
  label: string;
  @ApiProperty({ description: 'SIRUTA CODE' })
  siruta: number;
  @ApiProperty({
    enum: Object.keys(UATType).filter((_) => !isNaN(Number(_))),
    description: `The type of the UAT: ${Object.keys(UATType).filter((_) =>
      isNaN(Number(_)),
    )}`,
  })
  type: UATType;
  @ApiProperty({
    description:
      'Identification code for the unit hierarchically superior administrative',
  })
  sirutaUp: number;
  @ApiProperty({
    description: 'Abreviation code for UAT of type JUDET',
  })
  @ApiPropertyOptional()
  mnemonic?: string; // ? only for Judete
}

/**
 * * Teritoriul Romaniei este structurat in urmatoarele tipuri de unitati administrativ - teritoriale:
 * ? NIVEL 1: Judete, Municipiul Bucuresti
 * ? NIVEL 2: Municipii, Orase, Comune
 * ? NIVEL 3: Localitati componente, Sate, Sectoare ale capitalei
 */
