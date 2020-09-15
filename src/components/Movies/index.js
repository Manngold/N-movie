import React from 'react';
import Card from '../Card';

function Movies({ movies }) {
  return (
    <div>
      {movies.map((movie) => {
        const {
          backdrop_path: backdropPath,
          id,
          title,
          popularity,
          poster_path: posterPath,
          release_date: releaseDate,
          overview,
        } = movie;
        return (
          <Card
            key={id}
            backdropPath={backdropPath}
            id={id}
            title={title}
            popularity={popularity}
            posterPath={posterPath}
            releaseDate={releaseDate}
            overview={overview}
          />
        );
      })}
    </div>
  );
}

export default Movies;
