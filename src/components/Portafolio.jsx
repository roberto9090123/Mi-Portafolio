import React from 'react'
import Web1 from '../assets/img1.jpeg'


const Portafolio = () => {
    const portafolios = [
        {
            id:1,
            src: Web1
        },
        {
            id:2,
            src: Web1
        },
        {
            id:3,
            src: Web1
        },
        {
            id:4,
            src: Web1
        },
        {
            id:5,
            src: Web1
        },
        {
            id:6,
            src: Web1
        },
    ]

  return (
    <div name='portafolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div  className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portafolio</p>
                <p className='py-6'>Algunos de mis Trabajos </p>
            </div>
            <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-8'>
            {portafolios.map(({id,src}) =>
            
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt=""  className='rouded-md duration-200 hover:scale-105'/>
                <div className='flex items-center justify-center'>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                </div>
            </div>
        
            
            )}

            </div>
        </div>
    </div>
  )
}

export default Portafolio