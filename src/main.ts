import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cors = require('cors');

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  app.useGlobalPipes(
    new ValidationPipe(),
    // {forbidUnknownValues: false}
  );
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
