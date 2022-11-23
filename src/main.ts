import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { PORT_HTTP } from '@/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT_HTTP, () => {
    Logger.log(`Server listen on port ${PORT_HTTP}`)
  });
}
bootstrap();
