import React from 'react'

const About = () => {
  return (
    <div name = 'about' className=' w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white pb-10'>
        <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className=' mt-20 text-xl text-justify'>
                Hi, My name is Aswad Mustafa. I have done my Bachelors in Information Technology from Arid Agricultural Unveristy Rawalpindi. I have excelled my skills in JavaScript. I have fluent knowledge of ReactJS , NodeJS etc.
            </p><br />
            <p className='text-xl mt-5 text-justify'>
                I have strong grip in Web Development. i have strong communication skills. i have good problem solving tactics. i can deliever quality work in short period of time. I would be happy to help in any work related to web development.
            </p>
        </div>
    </div>
  )
}

export default About