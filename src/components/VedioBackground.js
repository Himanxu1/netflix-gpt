import React, { useEffect } from "react";
import { API_OPTION } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerMovie } from "../utils/movieSlice";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VedioBackground = ({ movieid }) => {
  const trailerMovie = useSelector( store=> store?.movie.trailerMovie);
   useMovieTrailer(movieid)
   
  return (
    <div className="w-full">
       
      <iframe
      className="w-full aspect-video"
       
        src={"https://www.youtube.com/embed/"+trailerMovie?.key + "?autoplay=1&loop=1&mute=1&showinfo=0&controls=0"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        
      ></iframe>
    </div>
  );
};

export default VedioBackground;
