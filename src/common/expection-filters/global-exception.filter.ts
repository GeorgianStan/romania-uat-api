/**
 * * Dependencies
 */

import { Catch, ArgumentsHost, Logger } from '@nestjs/common';
import { Request, Response } from 'express';
import { BaseExceptionFilter } from '@nestjs/core';

/**
 * * Services
 */

/**
 * * Types
 */

@Catch()
export class GlobalErrorFilter extends BaseExceptionFilter {
  #logger = new Logger(GlobalErrorFilter.name);
  constructor() {
    super();
  }

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.status;

    switch (status) {
      case 404: {
        response.status(404).send();
        break;
      }
      // * Internal server error
      default: {
        this.#logger.error('Unexpected 500 error');
        this.#logger.error(exception);
        response.status(500).send();
      }
    }
  }
}
