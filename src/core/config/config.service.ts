/**
 * * Dependencies
 */
import { Injectable } from '@nestjs/common';
import { resolve } from 'path';
import { parse } from 'dotenv';
import { readFileSync, existsSync } from 'fs';

@Injectable()
export class ConfigService {
  #envPath: any;

  #nodeEnv: string = process.env.NODE_ENV
    ? process.env.NODE_ENV.trim()
    : undefined;

  #envConfig: { [key: string]: string };

  /**
   * * The .env file may be optional, but the ENV variables are required
   * ? This function will check if all the variables from .sample.env are present
   */
  #validateConfigVariables = () => {
    const pathToSampleFile = resolve(process.cwd(), '.sample.env');
    const requiredEnvVars: any = Object.keys(
      parse(readFileSync(pathToSampleFile)),
    );

    requiredEnvVars.forEach((envKey: string) => {
      if (this.get(envKey) === undefined) {
        throw new Error(`Missing ENV variable ${envKey}`);
      }
    });
  };

  constructor() {
    switch (this.#nodeEnv) {
      case 'test':
        this.#envPath = resolve(process.cwd(), '.test.env');
        break;
      case 'production':
        this.#envPath = resolve(process.cwd(), '.production.env');
        break;
      case 'development':
        this.#envPath = resolve(process.cwd(), '.development.env');
        break;
      default:
        throw new Error('Specify the NODE_ENV variable');
    }

    this.#envConfig =
      (existsSync(this.#envPath) && parse(readFileSync(this.#envPath))) || {};

    this.#validateConfigVariables();
  }

  get(key: string): string {
    return this.#envConfig[key] || process.env[key];
  }
}
