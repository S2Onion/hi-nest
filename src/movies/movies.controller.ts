import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    @Get()
    getAll(){
        return 'this will return all movies';
    }

    @Get('/:id')
    getOne(@Param('id') movieId: string) {
        return `this will return one movie the movieId: ${movieId}`;
    }

    @Post()
    create() {
        return 'This will create a movie';
    }

    @Delete('/:id')
    remove(@Param('id') movieId: string) {
        return `This will delete a movie with the id: ${movieId}`;
    }

    @Patch('/:id')
    patch(@Param('id') movieId: string) {
        return `This will patch a movie with the id: ${movieId}`;
    }
}
