/**
 * * Dependencies
 */
import { Injectable } from '@nestjs/common';

/**
 * * Services
 */
import { DataService } from 'src/core/data/data.service';

/**
 * * Types
 */
import { UAT, UATType } from 'src/core/data/@types';
import { GetUATByQueryDto } from './@types/dto';

@Injectable()
export class ApiV1Service {
  /**
   * * Private functions
   */

  #getUATBySirutaUp = (sirutaUp: number): UAT[] => {
    return this.dataService.data.filter(
      (uat: UAT) => uat.sirutaUp === sirutaUp,
    );
  };

  #getUATByType = (type: UATType): UAT[] => {
    return this.dataService.data.filter((uat: UAT) => uat.type === type);
  };

  constructor(private readonly dataService: DataService) {}

  /**
   * * Public functions
   */
  getUATBySirutaCode(siruta: number) {
    return this.dataService.data.filter((uat: UAT) => uat.siruta === siruta)[0];
  }

  getUATByQuery(payload: GetUATByQueryDto): UAT[] {
    if (payload.siruta) {
      return [this.getUATBySirutaCode(payload.siruta)];
    }

    if (payload.sirutaUp) {
      return this.#getUATBySirutaUp(payload.sirutaUp);
    }

    if (payload.type) {
      return this.#getUATByType(payload.type);
    }
  }

  /**
   * * Getters
   */
  get judete(): UAT[] {
    return this.dataService.data.filter(
      (uat: UAT) =>
        uat.type === UATType.JUDET || uat.type === UATType.MUNICIPIUL_BUCURESTI,
    );
  }

  get zone(): UAT[] {
    return this.dataService.data.filter(
      (uat: UAT) => uat.type === UATType.ZONA,
    );
  }
}
