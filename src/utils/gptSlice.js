import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        gptMovies:null,
        gptMovieName:null
    },
    reducers:{
      toggleGptSearchView: (state)=>{
        state.showGptSearch=!state.showGptSearch
      },
      addGptMovies: (state,action)=>{
        const {moviesName,moviesResult}= action.payload;
        
        state.gptMovies=moviesResult
        state.gptMovieName= moviesName

      }
    }
})

export const {toggleGptSearchView,addGptMovies} = gptSlice.actions
export default gptSlice.reducer