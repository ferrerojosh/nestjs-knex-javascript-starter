import { Module } from '@nestjs/common';
import { ContactModule } from './contact/contact.module';
import { KnexModule } from './knex/knex.module';

@Module({
  imports: [
    KnexModule.register({
      debug: false,
      client: 'sqlite3',
      connection: {
        filename: './dev.sqlite3',
      },
    }),
    ContactModule,
  ],
})
export class AppModule {}
