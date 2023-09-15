import React from 'react'
import { LOGO } from '../utils/constants'
import GPTSearchBar from './GPTSearchBar'
import GPTSuggestion from './GPTSuggestion'

const GPTComponent = () => {
  return (
    <div >
         <div className="relative">
          <img
            src={LOGO}
            alt="backgroud"
            className="w-full object-cover h-[100vh]"
          />
        </div>
       <GPTSearchBar/>
       <GPTSuggestion/>
    </div>
  )
}

export default GPTComponent