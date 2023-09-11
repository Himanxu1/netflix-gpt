import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(store =>  store?.movie.nowPlayingMovies)
  const popularMovie = useSelector(store =>  store?.movie.popularMovie)
  const topratedMovie = useSelector(store =>  store?.movie.topratedMovie)
  const upcomingMovie = useSelector(store =>  store?.movie.upcomingMovie)
  return (
    <div className='bg-black -mt-20 '>
      <MovieList title={"Now Playing" } movies={nowPlayingMovies} />
      <MovieList title={"Popular" } movies={popularMovie} />
      <MovieList title={"Top Rated" } movies={topratedMovie} />
      <MovieList title={"Upcoming" } movies={upcomingMovie} />
    </div>
  )
}

export default SecondaryContainer