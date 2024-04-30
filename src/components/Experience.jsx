import React from 'react';
import express from '/express.png';
import mongdb from '/mongdb.jpg';
import javscrpt from '/javscrpt.png';
import pathan from '/pathan.webp'
import jarral from '/rocket.png'
import java from '/java.png'

function Experience() {
    const cardItem = [
        {
            id:1,
            logo:mongdb,
            name:'mongoDB',
        },
        {
            id:2,
            logo:jarral,
            name:'React.js',
        },
        {
            id:3,
            logo:mongdb,
            name:'mongoDB',
        },
        {
            id:4,
            logo:jarral,
            name:'React.js',
        },
        {
            id:5,
            logo:mongdb,
            name:'mongoDB',
        },
        {
            id:6,
            logo:jarral,
            name:'React.js',
        },
        {
            id:7,
            logo:mongdb,
            name:'mongoDB',
        },
       
    ];
  return (
   
    <>
      <div name='Experience' className='max-w-screen-2xl container mx-auto px-4 md:px-20  my-20'>


        <h1 className='text-3xl font-bold mb-5'>Experience</h1>
        <span className=' '>I've more than 2 years of experiance in below technologies.</span>

        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 space-y-8 mt-8 2xl:grid-cols-5 gap-2 '>
            {
                cardItem.map(({id,logo,name})=>(
                    <div key={id} className='flex flex-col justify-center  mx-auto rounded-full p-10 items-center md:w-[200px] shadow border-[2px] h-[120px] w-[120px] md:h-[200px]'>
                       <div> <img src={logo} alt="" className=''/></div>
                            <div className=' md:font-bold text-xl'>{name}</div>
                    </div>
                )
            )}
        </div>


      </div>
    </>
  )
}

export default Experience

