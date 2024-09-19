import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false
    },
    reducers:{
        toggleShowGptSearch :(state,action)=>{
            state.showGptSearch=!state.showGptSearch
        }
    }
})

export const {toggleShowGptSearch} = gptSearchSlice.actions
export default gptSearchSlice.reducer;