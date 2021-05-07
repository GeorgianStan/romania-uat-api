/**
 * * Dependencies
 */
import { Injectable } from '@nestjs/common';

import ms from 'ms';

/**
 * * Types
 */

@Injectable()
export class UtilsService {
  // * get a date from string describing a time span [zeit/ms](https://github.com/zeit/ms.js)
  stringToMs(str: string): number {
    return ms(str);
  }
}
