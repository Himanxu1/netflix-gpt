import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lang from '../utils/LanguageConfig'
import openai from '../utils/openai'
import { API_OPTION } from '../utils/constants'
import { addGptMovies } from '../utils/gptSlice'


const GPTSearchBar = () => {
    const language = useSelector(store => store?.config.language)
    const searchText = useRef(null)
    const dispatch = useDispatch()

    const fetchMovie = async (movie) =>{
      const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,API_OPTION)
      const response = await data.json()
       return response.results
    }

    const handleSearchClick = async () =>{
      const query = 'Act as a movie recommedation system and suggest movies on the basis of query' + searchText.current.value + "give me only 5 movies in the form of comma separated  like gadar,don,khata meetha,dhol,sholay"
    
     const gptSearchResult = await openai.chat.completions.create({
      messages: [{ role: 'user', content: query }],
      model: 'gpt-3.5-turbo',
    });

    const moviesArray = gptSearchResult.choices[0]?.message?.content.split(",")
  
    
     const newMovies =  moviesArray.map((item)=>fetchMovie(item))
     const tmdbMovie = await Promise.all(newMovies)
     dispatch(addGptMovies({moviesName:moviesArray,moviesResult:tmdbMovie}))
    }



  return (
    <div className='absolute top-1/3 xl:left-1/3 left-4'>
    <input type='text' placeholder= {lang[language].placeholder} className='py-2 px-4 w-80 rounded' ref={searchText} /> 
    <button className='px-10 py-2 bg-red-600 text-white rounded cursor-pointer xl:ml-2 mt-2 xl:mt-0 ml-20 ' onClick={handleSearchClick} >{lang[language].search}</button>
    </div>
  )
}

export default GPTSearchBar