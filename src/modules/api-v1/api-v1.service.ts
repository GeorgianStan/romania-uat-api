/**
 * * Dependencies
 */
import { Injectable } from '@nestjs/common';

/**
 * * Services
 */
import { DataService } from 'src/core/data/data.service';

@Injectable()
export class ApiV1Service {
  constructor(private readonly dataService: DataService) {}
}
