import React from "react";
import { Header } from "./Header";
import { MovieCard } from "./MovieCard";

interface Genre {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface Movie {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface contentProps {
  selectedGenre: Genre
  movies: Movie[]
}

export function Content(props: contentProps) {
  const selectedGenre = props.selectedGenre;
  const movies = props.movies;
  return (
    <div className="container">
      <Header title={selectedGenre.title} />

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}