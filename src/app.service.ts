import { Injectable } from '@nestjs/common';
import { PostgresService } from './postgres/postgres.service';

@Injectable()
export class AppService {

  constructor(private postgresService: PostgresService) {
  }

  async getHello(): Promise<string> {
    return await this.postgresService.test();
  }
}
