import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <div className='px-2 w-[200px] h-[300px]'>
        <img src={'https://image.tmdb.org/t/p/w780'+movie.poster_path}  alt='poster'  className='cursor-pointer  hover:scale-110 transform transition duration-y' />
    </div>
  )
}

export default MovieCard