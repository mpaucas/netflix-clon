import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Signup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {user, signUp} = UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await signUp(email, password)
      navigate('/Home')
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <>
      <div className='bg-home-image bg-no-repeat bg-center bg-cover h-screen w-screen absolute opacity-80'>
        <div className='bg-gradient-to-b from-black via-transparent to-black h-screen w-screen'></div>
      </div>
      <div className='fixed w-full px-4 py-24 z-50'>
        <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
          <div className='max-w-[320px] mx-auto py-16'>
            <h1 className='text-3xl font-bold'>Registrate</h1>
            <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
              <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type='email' placeholder='Email' autoComplete='email'/>
              <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type='password' placeholder='Password' autoComplete='current-password'/>
              <button className='bg-red-600 py-3 my-6 rounded font-bold'>Registrarse</button>
              <div className='flex justify-between items-center text-sm text-gray-600'>
                <p><input className='mr-2 rounded' type='checkbox'/>Recordarmelo</p>
                <p>¿Necesitas Ayuda?</p>
              </div>
              <p className='py-8'>
                <span className='text-gray-600'>
                  ¿Ya estas suscrito a Netflix?
                </span>{' '}
                <Link to='/Login'>
                  Iniciar sesión
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup