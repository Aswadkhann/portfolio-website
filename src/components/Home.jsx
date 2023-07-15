import React from 'react';
import { Link } from 'react-scroll';
import { MdKeyboardArrowRight } from 'react-icons/md';
import myhero from '../assets/myhero.jpeg';

const Home = () => {
  const navbarHeight = 100; // Update this value with the actual height of your fixed navbar

  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col md:flex-row h-full px-4' style={{ paddingTop: `${navbarHeight}px` }}>
        <div className='flex justify-between flex-col md:flex-row w-full'>
          <div className='flex flex-col justify-center w-full md:w-1/2'>
            <h2 className='text-white text-4xl sm:text-6xl font-bold'>I'm a Full Stack Developer</h2>
            <p className='text-gray-500 py-4 max-w-lg text-justify'>
              I have experience building and designing web applications.
              Currently, I am working on web applications with technologies like ReactJS, Tailwind, and Next.js.
            </p>
            <div>
              <Link to='projects' smooth duration={500}>
                <button className='group cursor-pointer text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>
                  Projects
                  <span className='group-hover:rotate-90 duration-300 px-2'>
                    <MdKeyboardArrowRight size={25} />
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className='flex-grow w-full md:w-1/2'>
            <img src={myhero} alt="my profile" className='rounded-2xl mx-auto w-[90%]' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
