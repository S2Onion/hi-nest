import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // true로 설정되면 유효성 검사기는 유효성 검사 데코레이터를 사용하지 않는 속성의 유효성 검사(반환 된) 객체를 제거
    forbidNonWhitelisted: true, // true로 설정하면 알 수 없는 개체의 유효성을 검사하려는 시도가 즉시 실패
    transform: true, // DTO 클래스에 따라 타입이 지정된 객체로 자동 변환
  }));
  await app.listen(3000);
}
bootstrap();
