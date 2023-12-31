import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovie } from "../utils/movieSlice";
import { API_OPTION } from "../utils/constants";
import { useEffect } from "react";

 const useNowplayingmovies = () =>{
  
    const dispatch = useDispatch();
    const nowplayingmovies = useSelector(store => store?.movie?.nowPlayingMovies)

   const getNowPlayingMovies= async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTION)
     const response = await data.json();
     dispatch(addNowPlayingMovie(response.results))

  }
  useEffect(()=>{
  !nowplayingmovies &&  getNowPlayingMovies()
  },[])
}
export default useNowplayingmovies