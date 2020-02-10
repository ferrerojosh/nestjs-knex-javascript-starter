import knex from 'knex';

export const KNEX_OPTIONS = 'KNEX_OPTIONS';
export const KNEX_CONNECTION = 'KNEX_CONNECTION';

export const knexProvider = options => {
  return {
    provide: KNEX_OPTIONS,
    useValue: options,
  };
};

export const knexConnectionFactory = {
  provide: KNEX_CONNECTION,
  useFactory: async options => {
    return knex(options);
  },
  inject: [KNEX_OPTIONS],
};
