import React from 'react'
import Header from '../components/Header'
import useNowplayingmovies from '../hooks/useNowplayingmovies'
import MainContainer from '../components/MainContainer'
import SecondaryContainer from '../components/SecondaryContainer'
import usePopularMovie from '../hooks/usePopularMovie'
import useTopRatedMovie from '../hooks/useTopRatedMovie'
import useUpcomingMovie from '../hooks/useUpcomingMovie'
import { useSelector } from 'react-redux'
import GPTComponent from '../components/GPTComponent'


const Home = () => {
  const toggleSearch = useSelector(store=>store?.gpt.showGptSearch)

  useNowplayingmovies()
  usePopularMovie()
  useTopRatedMovie()
  useUpcomingMovie()
  return (
    <div className='w-full h-[100vh]'>

      <Header/>
      {
        toggleSearch ? 
         <GPTComponent/>
         :(
                     <>
                       <MainContainer/>
                      <SecondaryContainer/>
                      </>
        )
      }
    </div>
  )
}

export default Home