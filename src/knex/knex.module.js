import { Module } from '@nestjs/common';
import { knexConnectionFactory, knexProvider } from './knex.providers';

@Module({
  providers: [knexConnectionFactory],
  exports: [knexConnectionFactory],
})
export class KnexModule {
  static register(options) {
    const providers = [knexProvider(options)];

    return {
      global: true,
      module: KnexModule,
      providers: providers,
      export: providers,
    };
  }
}
