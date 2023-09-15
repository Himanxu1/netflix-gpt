import { useDispatch, useSelector } from "react-redux";

import { API_OPTION } from "../utils/constants";
import { useEffect } from "react";
import { addPopularMovie } from "../utils/movieSlice";

 const usePopularMovie = () =>{
  
    const dispatch = useDispatch();
    const popularmovies = useSelector(store => store?.movie?.popularMovie)

   const getPopularMovies= async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTION)
     const response = await data.json();
     dispatch(addPopularMovie(response.results))

  }
  useEffect(()=>{
   !popularmovies && getPopularMovies()
  },[])
}
export default usePopularMovie