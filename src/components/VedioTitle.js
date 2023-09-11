import React from 'react'

const VedioTitle = ({title,description}) => {
  return (
    <div className='pt-72 p-20 absolute'>
        <div>
            <p className='text-5xl font-bold font-mono text-white'>{title}</p>
             <p className='w-1/3 py-4 font-medium text-white'>{description}</p>
        </div>
        <div className='flex'>
           
            <button className='px-12 py-3 bg-gray-500 text-white font-bold w-40 rounded' >Play</button>
            <button className='border-2 border-gray-500  px-8 py-3 font-bold w-40 ml-2 rounded text-white'>More Info</button>
        </div>
    </div>
  )
}

export default VedioTitle