import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { useEffect } from "react";
import {  addTopRatedMovie } from "../utils/movieSlice";

 const useTopRatedMovie = () =>{
  
    const dispatch = useDispatch();
   const getTopRatedMovies= async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTION)
     const response = await data.json();
     dispatch(addTopRatedMovie(response.results))

  }
  useEffect(()=>{
    getTopRatedMovies()
  },[])
}
export default useTopRatedMovie