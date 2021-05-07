/**
 * * Dependencies
 */
import { Injectable, Logger } from '@nestjs/common';

import fs from 'fs';
import path from 'path';

/**
 * * Types
 */
import { UAT } from './@types/enitity';

@Injectable()
export class DataService {
  #logger = new Logger(DataService.name);
  #data: UAT[];

  constructor() {
    this.#logger.log('Loading UAT data...');

    const pathToData = path.join(process.cwd(), 'data', 'uat.json');
    this.#data = JSON.parse(fs.readFileSync(pathToData, 'utf-8'));

    this.#logger.log('UAT data loaded');
  }

  get data(): UAT[] {
    return this.#data;
  }
}
