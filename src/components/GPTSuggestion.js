import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GPTSuggestion = () => {
 const {gptMovies,gptMovieName} = useSelector(store => store?.gpt)
 if(!gptMovieName) return;

  return (
    <div className='absolute top-1/2 bg-black w-full' >
      {
        gptMovieName.map((item,index) =>  <MovieList key={index} title={item} movies={gptMovies[index]} /> )
      }
   
    </div>
  )
}

export default GPTSuggestion