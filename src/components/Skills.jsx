import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Node from '../assets/node.png'
import GibHub from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'


const Skills = () => {
    const skills = [
        {
            id:1,
            src: HTML,
            name: 'HTML'
        },
        {
            id:2,
            src: CSS,
            name:'CSS'
        },
        {
            id:3,
            src: JavaScript,
            name:'JavaScript'
        },
        {
            id:4,
            src: ReactImg,
            name:'ReactImg'
        },
        {
            id:5,
            src: Node,
            name:'Node'
        },
        {
            id:6,
            src: GibHub,
            name:'GibHub'
        },
        {
            id:7,
            src: Tailwind,
            name:'Tailwind'
        },
    ]

  return (
    <div name='skills' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    Mis Skills
                </p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8' >

                {skills.map(({id,src,name})=>
                <div key={id} className='shadow-md shadow-gray-600 hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={src} alt="" />
                <p className='my-4'>{name}</p>
            </div>
                
                )}

                
            </div>
        </div>
    </div>
  )
}

export default Skills