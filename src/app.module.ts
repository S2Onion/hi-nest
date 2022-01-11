import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';

// @Module : Nest가 애플리케이션 구조를 구성하는데 사용하는 메타데이터를 제공
@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [],
})
export class AppModule {}
