import React from 'react';
import express from '/express.png';
import mongdb from '/mongdb.jpg';
import javscrpt from '/javscrpt.png';
import pathan from '/pathan.webp'
import jarral from '/rocket.png'
import java from '/java.png'

function PortFolio() {
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
      <div name='PortFolio' className='max-w-screen-2xl container mx-auto px-4 md:px-20  my-20'>


        <h1 className='text-3xl font-bold mb-5'>PortFolio</h1>
        <span className='underline '>Featured Projects</span>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 mt-2'>
            {
                cardItem.map(({id,logo,name})=>(
                    <div key={id} className='border-[2px] p-5 rounded-lg shadow-lg m-2 cursor-pointer space-y-2 hover:scale-110 '>
                        <img src={logo} alt="" className='w-[120px] h-[120px] border-[2px] rounded-full'/>

                        <div>
                            <div className='font-extrabold'>{name}</div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>

                        <div className='space-x-2'>
                            <button className='bg-green-500 font-bold py-1 px-2 rounded text-white hover:bg-green-600'>Video</button>
                            <button className='bg-blue-500 font-bold py-1 px-2 rounded text-white hover:bg-blue-600'>Source Code</button>
                        </div>

                    </div>
                )
            )}
        </div>


      </div>
    </>
  )
}

export default PortFolio
