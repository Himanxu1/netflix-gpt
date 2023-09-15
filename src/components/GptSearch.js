import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleGptSearchView } from '../utils/gptSlice'

const GptSearch = () => {
    const dispatch = useDispatch()
    const showgtsearch = useSelector(store=>store?.gpt.showGptSearch)

    const handleToggle= () =>{
        dispatch(toggleGptSearchView())
    }
  return (
    <div>
        <button className='px-4 py-2 bg-purple-700 text-white rounded' onClick={handleToggle}>{showgtsearch ? "Home" :"GPT Search"}</button>
    </div>
  )
}

export default GptSearch