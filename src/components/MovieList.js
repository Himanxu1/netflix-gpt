import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    
  return (
    <div className='xl:mt-[79px] mt-[0px] xl:mt-0'>
    <p className='px-8 xl:text-3xl text-xl font-mono text-white py-2'>{title}</p>
    <div className='flex overflow-x-scroll '>
        <div className='flex px-6'>
        {
            movies?.map((movie)=>{
                return (
                    <MovieCard key={movie.id} movie={movie} />
                )
            })
        }
        </div>
    </div>
    </div>
  )
}

export default MovieList