import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import movieReducer from "./movieSlice";
import configReducer from "./ConfigSlice";
import gptReducer from './gptSlice';

const appStore = configureStore({
    reducer:{
        user:userReducer,
        movie:movieReducer,
        config:configReducer,
        gpt:gptReducer
    }
})

export default appStore