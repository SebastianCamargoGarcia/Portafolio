import React from 'react'


const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5] '>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>SOY UN DESARROLLADOR </p>
                <p className='py-2 text-gray-600'>AQUI VA OTRA PARLA Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi blanditiis adipisci similique itaque neque ea amet cumque? Iure neque ex, labore, et provident laboriosam adipisci ipsa sequi culpa repellendus odit! Molestias aliquam debitis delectus nulla ratione. Placeat, vitae expedita, iste ipsa accusantium aliquam harum 
                  suscipit est sunt, aliquid officiis repudiandae?</p>
                <p>AQUI VA OTRA CULE PARLA</p>
                <p className='py-2 text-gray-600 underline cursor-pointer'>Mira mis proyectos</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-blue-400 rounded-xl flex items.center justify-center p-4 hover:scale-105 ease-in duration-300'>
              <img className='rounded-xl' src="https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fFByb2dyYW1hZG9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="/" />
            </div>
        </div>
    </div>
  )
}

export default About
