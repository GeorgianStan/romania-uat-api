import { UATType } from './enum';

export interface UAT {
  label: string;
  siruta: number;
  type: UATType;
  sirutaUp: number;
  mnemonic?: string; // ? only for Judete
}

/**
 * * Teritoriul Romaniei este structurat in urmatoarele tipuri de unitati administrativ - teritoriale:
 * ? NIVEL 1: Judete, Municipiul Bucuresti
 * ? NIVEL 2: Municipii, Orase, Comune
 * ? NIVEL 3: Localitati componente, Sate, Sectoare ale capitalei
 */
