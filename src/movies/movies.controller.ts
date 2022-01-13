import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
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
    search(@Query('year') searchingYear: string) {
        return `We are seraching for a movie made after: ${searchingYear}`;
    }

    @Get('/:id')
    getOne(@Param('id') movieId: string): Movie {
        return this.movieSearvice.getOne(movieId);
    }

    @Post()
    create(@Body() movieData) {
        console.log(movieData);
        return this.movieSearvice.create(movieData);
    }

    @Delete('/:id')
    remove(@Param('id') movieId: string) {
        return this.movieSearvice.deleteOne(movieId);
    }

    @Patch('/:id')
    patch(@Param('id') movieId: string, @Body() updateData) {
        this.movieSearvice.update(movieId, updateData);
    }

}
