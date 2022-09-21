import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {

  const { user, logOut } = UserAuth()
  const navigate = useNavigate()
  // console.log(user)

  const handleLogout = async () => {
    try {
      await logOut()
      navigate('/')
    } catch (error) {
      console.log(error)      
    }
  }

  return (
    <>
        {user?.email ? (
          <div className='flex items-center justify-between sm:p-8 p-4 z-[100] w-full absolute'>
            <Link to='/Home'>
              <h1 className='text-red-600 sm:text-4xl text-3xl font-bold cursor-pointer'>
                NETFLIX
              </h1>
            </Link>
            <div>
              <Link to='/Account'>
                <button className='text-white pr-4'>Cuenta</button>
              </Link>
              <button onClick={handleLogout} className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Cerrar Sesión</button>
            </div>
          </div>
        ) : (
          <div className='flex items-center justify-between sm:p-8 p-4 z-[100] w-full absolute'>
            <Link to='/'>
              <h1 className='text-red-600 sm:text-4xl text-3xl font-bold cursor-pointer'>
                NETFLIX
              </h1>
            </Link>
            <div>
              <Link to='/Login'>
                <button className='text-white pr-4'>Iniciar Sesión</button>
              </Link>
              <Link to='/Signup'>
                <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Registrarse</button>
              </Link>
            </div>
          </div>
        )}
    </>
  )
}   

export default Navbar