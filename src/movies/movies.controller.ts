import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

    constructor(private readonly movieSearvice: MoviesService){}

    @Get()
    getAll(): Movie[] {
        return this.movieSearvice.getAll();
    }

    @Get("/search")
    search(@Query('year') searchingYear: number) {
        return `We are seraching for a movie made after: ${searchingYear}`;
    }

    @Get('/:id')
    getOne(@Param('id') movieId: number): Movie {
        return this.movieSearvice.getOne(movieId);
    }

    @Post()
    create(@Body() movieData: CreateMovieDto) {
        console.log(movieData);
        return this.movieSearvice.create(movieData);
    }

    @Delete('/:id')
    remove(@Param('id') movieId: number) {
        return this.movieSearvice.deleteOne(movieId);
    }

    @Patch('/:id')
    patch(@Param('id') movieId: number, @Body() updateData) {
        this.movieSearvice.update(movieId, updateData);
    }

}
