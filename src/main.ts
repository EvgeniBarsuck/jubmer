import { NestFactory } from '@nestjs/core';
import { envConfig } from './config/env';
import { AppModule } from './modules/app.module';

async function bootstrap() {
  console.log(envConfig)
  const app = await NestFactory.create(AppModule);
  
  await app.listen(envConfig.PORT);
}
bootstrap();
