import React from 'react'
import GenreList from '../components/GenreList'

const GamesHome = () => {
  return (
    <div className='grid grid-cols-4 px-8'>
      <div className='h-full hidden md:block'>
      <GenreList/>
      </div>
      <div className='col-span-3 bg-blue-400'>Game List</div>
    </div>
  )
}
export default GamesHome