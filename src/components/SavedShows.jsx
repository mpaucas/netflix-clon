import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
import React, { useState, useEffect } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai'
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';

const SavedShows = () => {

    const [ movies, setMovies ] = useState([]);
    const { user } = UserAuth()

    const slideLeft = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    useEffect(() => {
        onSnapshot(
            doc(db, 'users', `${user?.email}`), (doc) => {
                setMovies(doc.data()?.savedShows)
            }
        )
    }, [user?.email])

    const movieRef = doc(db, 'users', `${user?.email}`)
    const deleteShow = async (passedID) => {
        try {

            const result = movies.filter((item) => item.id !== passedID)

            await updateDoc(movieRef, {
                savedShows: result
            })
        } catch (error) {
            console.log(error)
        }
    }

    // console.log(movies.length)

  return (
    <div className='absolute top-[50%] w-full'>
        <h2 className='text-white font-bold p-2'>Mis Programas</h2>
        {movies.length !== 0 ? (
            <div className='relative flex items-center group'>
            <MdChevronLeft onClick={slideLeft} className='bg-white rounded-full absolute opacity-50 left-0 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
            <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                {movies.map((item, id) => (
                    <div key={id} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2' >
                        <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500${item?.img}`} alt={item?.title} />
                        <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                            <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
                                {item?.title}
                            </p>
                            {/* <p onClick={saveShow}>
                                {like ? <FaHeart className='absolute top-4 left-4 text-gray-300' /> : <FaRegHeart className='absolute top-4 left-4 text-gray-300' />}
                            </p> */}
                            <p onClick={() => deleteShow(item?.id)} className='absolute top-4 right-4 text-gray-300'><AiOutlineClose/></p>
                        </div>
                    </div>
                ))}
            </div>
            <MdChevronRight onClick={slideRight} className='bg-white rounded-full absolute opacity-50 right-0 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
        </div>
        ) : (
            <div className='relative flex items-center group text-white p-2 text-sm'>No tienes peliculas favoritas seleccionadas</div>
        )}
    </div>
  )
}

export default SavedShows