import axios from 'axios'
import React, { Suspense, useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const Movie = React.lazy(() => import('./Movie'))

const Row = ({title, fetchURL, rowID}) => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results)
        })
    }, [fetchURL])

    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        var slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft + 500;
    }

  return (
    <>
        <h2 className='text-white font-bold p-2'>{title}</h2>
        <div className='relative flex items-center group'>
            <MdChevronLeft onClick={slideLeft} className='bg-white rounded-full absolute opacity-50 left-0 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
            <div id={'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                <Suspense fallback={<div>Loading...</div>}>
                    {movies.map((item, id) => (
                        <Movie key={id} item={item}/>
                    ))}
                </Suspense>
            </div>
            <MdChevronRight onClick={slideRight} className='bg-white rounded-full absolute opacity-50 right-0 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
        </div>
    </>
  )
}

export default Row
