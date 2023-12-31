import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { addTrailerMovie } from "../utils/movieSlice";
import { useEffect } from "react";


const useMovieTrailer = (movieid) =>{
    const dispatch = useDispatch();
    const trailerMovies = useSelector(store => store?.movie?.trailerMovie)

    const getMovieTrailer = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieid}/videos?language=en-US`,
        API_OPTION
      );
      const response = await data.json();
      const trailer = response.results.filter(
        (vedio) => vedio.type === "Trailer"
      );
      
      dispatch(addTrailerMovie(trailer[0]));
    };
  
    useEffect(() => {
      !trailerMovies &&  getMovieTrailer();
    }, []);
}
export default useMovieTrailer