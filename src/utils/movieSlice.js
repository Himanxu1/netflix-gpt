import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name:"movie",
    initialState:{
      nowPlayingMovies:null,
      trailerMovie:null,
      popularMovie:null,
      topratedMovie:null,
      upcomingMovie:null
    },
    reducers:{
        addNowPlayingMovie :(state,action)=>{
            state.nowPlayingMovies = action.payload
        },
        addTrailerMovie : (state,action)=>{
            state.trailerMovie = action.payload;
        }, 
        addPopularMovie :(state,action)=>{
            state.popularMovie = action.payload
        },
        addTopRatedMovie :(state,action)=>{
            state.topratedMovie = action.payload
        },
        addUpcomingMovies :(state,action)=>{
            state.upcomingMovie = action.payload
        },
    }
})

export const {addNowPlayingMovie,addTrailerMovie,addPopularMovie,addTopRatedMovie,addUpcomingMovies}= movieSlice.actions
export default movieSlice.reducer