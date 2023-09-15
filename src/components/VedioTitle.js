import React from 'react'

const VedioTitle = ({title,description}) => {
  return (
    <div className='xl:pt-72 pt-40 xl:p-20 p-2  absolute'>
        <div>
            <p className='xl:text-5xl sm:text-2xl font-bold font-mono text-white'>{title}</p>
             <p className='w-1/3 py-4 font-medium text-white hidden xl:block'>{description}</p>
        </div>
        <div className='xl:flex hidden'>
            <button className='px-12 py-3 bg-gray-500 text-white font-bold w-40 rounded' >Play</button>
            <button className='border-2 border-gray-500  px-8 py-3 font-bold w-40 ml-2 rounded text-white'>More Info</button>
        </div>
    </div>
  )
}

export default VedioTitle