import { Dependencies, Injectable } from '@nestjs/common';
import { KNEX_CONNECTION } from '../knex/knex.providers';

@Injectable()
@Dependencies(KNEX_CONNECTION)
export class ContactService {
  constructor(knex) {
    this.knex = knex;
  }

  async findAll() {
    return await this.knex('contact');
  }
}
