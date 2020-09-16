import React from 'react';

function Card({
  backdropPath,
  id,
  title,
  popularity,
  posterPath,
  releaseDate,
  overview,
}) {
  return (
    <div
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/w500${posterPath}')`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        height: '50vh',
        width: '500px',
      }}
    >
      <span>{title}</span>
      <span>{popularity}</span>
      <span>{releaseDate}</span>
      <p>{overview}</p>
    </div>
  );
}

export default Card;
