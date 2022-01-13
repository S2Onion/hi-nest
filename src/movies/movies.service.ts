import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
    private movies: Movie[] = [];

    getAll(): Movie[] {
        return this.movies;
    }

    getOne(id: number): Movie{
        const movie = this.movies.find(movie => movie.id === id);
        if(!movie){
            throw new NotFoundException(`Movie not found ID=${id}`);
        }
        return this.movies.find(movie => movie.id === id);
    }

    deleteOne(id: number): boolean {
        this.getOne(id);
        this.movies = this.movies.filter(movie => movie.id !== id);
        return true;
    }

    create(movieData: CreateMovieDto) {
        this.movies.push({
            id: this.movies.length + 1,
            title: movieData.title,
            year: movieData.year,
            generes: movieData.genres
        });
    }

    update(id:number, updateData) {
        const movie = this.getOne(id);
        this.deleteOne(id);
        this.create(updateData);
    }
}
