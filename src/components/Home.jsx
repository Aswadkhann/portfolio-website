import React from 'react'
import {MdKeyboardArrowRight} from 'react-icons/md'
import myhero from "../assets/myhero.jpeg"
const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className=' max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4  md:flex-row '>
            <div className=' flex flex-col justify-center h-full ml-10'>
                <h2 className=' text-white text-4xl sm:text-6xl font-bold'>I'm a Full Stack Developer</h2>
                <p className='text-gray-500 py-4 max-w-lg'>
                    I have experience building and designing web applications.
                    Currently, i am working on web applications with technologies like 
                    ReactJs, Tailwind and NextJs
                </p>
                <div>
                    <button className=' group cursor-pointertext-white w-fit px-6 py-3 my-2 flex item-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>
                        PortFolio 
                        <span className=' group-hover:rotate-90 duration-300  px-2'><MdKeyboardArrowRight size={25}/></span>
                    </button>
                </div>
            </div>
            <div>
                <img src={myhero} alt="my profile" className=' rounded-2xl mx-auto w-2/3 md:w-4/6' />
            </div>
        </div>
    </div>
  )
}

export default Home