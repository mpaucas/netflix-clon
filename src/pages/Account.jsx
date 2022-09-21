import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <>
      <div className='bg-home-image bg-no-repeat bg-center bg-cover h-[350px] w-screen absolute opacity-80'>
        <div className='bg-gradient-to-b from-black via-transparent to-black h-screen w-screen'></div>
      </div>
      <div className='absolute top-[20%] p-4 md:p-8 text-white'>
        <h1 className='text-3xl md:text-5xl font-bold'>Mis Programas</h1>
      </div>
      <SavedShows />
    </>
  )
}

export default Account