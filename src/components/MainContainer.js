import React from 'react'
import { useSelector } from 'react-redux'
import VedioTitle from './VedioTitle'
import VedioBackground from './VedioBackground'

const MainContainer = () => {
    const movies = useSelector(store => store.movie?.nowPlayingMovies)
    if(!movies) return

    const mainMovie = movies[0]
    const {original_title,overview,id} = mainMovie;


  return (
    <div>
        <VedioTitle title={original_title} description={overview} />
        <VedioBackground movieid={id} />
    </div>
  )
}

export default MainContainer