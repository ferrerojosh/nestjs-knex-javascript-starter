import { NestFactory } from '@nestjs/core';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { AppModule } from './app.module.js';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule, new FastifyAdapter());

  app.setGlobalPrefix('api');

  await app.listen(3000, '0.0.0.0');
};

bootstrap();
