import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    
  return (
    <div className=''>
    <p className='px-8 text-3xl font-mono text-white py-2'>{title}</p>
    <div className='flex overflow-x-scroll '>
        <div className='flex px-6'>
        {
            movies?.map((movie)=>{
                return (
                    <MovieCard movie={movie} />
                )
            })
        }
        </div>
    </div>
    </div>
  )
}

export default MovieList