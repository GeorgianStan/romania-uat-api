/**
 * * Dependencies
 */
import { Injectable } from '@nestjs/common';
import { resolve } from 'path';
import { parse } from 'dotenv';
import { readFileSync } from 'fs';

@Injectable()
export class ConfigService {
  private envPath: any;
  private readonly nodeEnv: string = process.env.NODE_ENV
    ? process.env.NODE_ENV.trim()
    : undefined;

  private readonly envConfig: { [key: string]: string };
  constructor() {
    switch (this.nodeEnv) {
      case 'test':
        this.envPath = resolve(process.cwd(), '.test.env');
        break;
      case 'production':
        this.envPath = resolve(process.cwd(), '.production.env');
        break;
      case 'development':
        this.envPath = resolve(process.cwd(), '.development.env');
        break;
      default:
        throw new Error('Specify the NODE_ENV variable');
    }
    this.envConfig = parse(readFileSync(this.envPath));
  }

  get(key: string): string {
    return process.env[key] || this.envConfig[key];
  }
}
