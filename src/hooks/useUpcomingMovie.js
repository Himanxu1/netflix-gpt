import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { useEffect } from "react";
import {  addUpcomingMovies } from "../utils/movieSlice";

 const useUpcomingMovie = () =>{
  const upcomingmovies = useSelector(store => store?.movie?.upcomingMovie)
  
    const dispatch = useDispatch();
   const getUpcomingMovies= async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTION)
     const response = await data.json();
     dispatch(addUpcomingMovies(response.results))

  }
  useEffect(()=>{
  !upcomingmovies &&  getUpcomingMovies()
  },[])
}
export default useUpcomingMovie