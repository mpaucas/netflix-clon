import React from 'react'
import { AiOutlineRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <>
        <div className='bg-home-image bg-no-repeat bg-center bg-cover h-screen w-screen absolute opacity-80'>
            <div className='bg-gradient-to-b from-black via-transparent to-black h-screen w-screen'></div>
        </div>
        <div className='h-screen w-screen absolute z-0 flex justify-center items-center'>
           <div className='xl:w-1/2 lg:w-2/3 w-11/12 text-center'>
              <h1 className='text-white sm:text-7xl text-5xl lg:px-20 font-extrabold'>Películas y series ilimitadas y mucho más.</h1>
              <p className='text-white sm:text-2xl font-bold mt-5'>Disfruta donde quieras. Cancela cuando quieras.</p>
              <div className='mt-5'>
              <label className='text-white sm:text-xl sm:block font-normal'>¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresia de Netflix.</label>
                <div className="relative w-full mt-3 shadow-sm flex items-center justify-center">
                  <input type="text" name="email" id="email" className="block border-none w-1/2 pl-3 pr-12 py-6 focus:border-indigo-500 focus:ring-indigo-500 text-sm" placeholder="Email"/>
                  <div className="flex items-center justify-center">
                    <Link to='/Home'>
                      <button className="bg-red-600 text-white text-3xl font-bold sm:px-7 px-3 sm:py-4 py-5 flex justify-between items-center">
                        <p className='sm:block hidden'>Comenzar</p>
                        <AiOutlineRight />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
           </div>
        </div>
    </>
  )
}

export default Home
