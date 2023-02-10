import Link from 'next/link';
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>VA AQUI</p>
                <h1 className='py-4 text-gray-700'>Hola, soy el <span className='text-blue-500'> Duketo</span> </h1>
                <h1 className='py-2 text-gray-700'>Soy un Desarrollador y juego lolcito</h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto' >  AQUI VA LA PARLA</p>
                 <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>

                    <Link href='https://www.linkedin.com/in/sebastian-camargo-2998b7177/'>
                    <div className='rounded-full shadow-lg shadow-blue-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaLinkedinIn/>
                    </div>
                    </Link>

                    <Link href='https://github.com/SebastianCamargoGarcia'>
                    <div className='rounded-full shadow-lg shadow-blue-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub/>
                    </div> 
                    </Link>   

                    <Link href=''>
                    <div className='rounded-full shadow-lg shadow-blue-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail/>
                    </div>    
                    </Link>

                    <Link href=''>
                    <div className='rounded-full shadow-lg shadow-blue-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonLinesFill/>
                    </div> 
                    </Link>       
                </div>
             </div>
        </div>
    </div>
  )
}

export default Main;
