import React from 'react'

const About = () => {
  return (
    <div name = 'about' className=' w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white pb-10'>
        <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className=' mt-20 text-lg text-justify'>
            Hello! I'm Aswad Mustafa, a passionate and motivated junior front-end React developer. With a strong foundation in web development and a keen interest in creating engaging user experiences, I'm excited to contribute to innovative projects and further expand my skills in the field.
            </p><br />
            <p className='text-lg mt-5 text-justify'>
            During my journey as a front-end developer, I have developed a solid understanding of HTML, CSS, and JavaScript, with a focus on the React framework. I enjoy leveraging React's component-based architecture to build interactive and responsive user interfaces. I'm also familiar with popular libraries and tools, such as Redux, Axios, and styled-components, which enhance my ability to develop scalable and efficient applications.
            </p><br/>
            <p className='text-lg text-justify mt-5'>Thank you for taking the time to learn about me. I look forward to connecting with you and being a valuable member of your team!"</p>
        </div>
    </div>
  )
}

export default About