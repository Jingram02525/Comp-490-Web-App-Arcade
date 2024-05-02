import React from 'react'

const GamesHome = () => {
  return (
    <div className='grid grid-cols-2'>
      <div className='bg-red-600 h-full hidden md:block'>Genre</div>
      <div className='col-span-3 bg-blue-400'>Game List</div>
    </div>
  )
}

export default GamesHome