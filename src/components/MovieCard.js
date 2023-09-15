import React from 'react'

const MovieCard = ({movie}) => {
  if(!movie.poster_path) return ;
  return (
    <div className='px-2 xl:w-[200px] xl:h-[300px] w-[145px] h-[200px]'>
        <img src={'https://image.tmdb.org/t/p/w780'+movie.poster_path}  alt='poster'  className='cursor-pointer  hover:scale-110 transform transition duration-y' />
    </div>
  )
}

export default MovieCard