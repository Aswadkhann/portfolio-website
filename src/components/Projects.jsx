import React from 'react';
import Card from '../reusable/Card';
import yy from '../assets/yy.png';

const Projects = () => {
  const projects = [
    {
      name: 'Youtube Clone',
      description: '"Seamless website clone featuring live data and API integration."',
      image: yy,
      website: 'https://golden-puffpuff-a57b45.netlify.app',
    },
  ];

  return (
    <div name='projects' className="w-full bg-gradient-to-b to-gray-800 from-black text-white">
    
      <div className="max-w-screen-lg p-4 pb-10 mx-auto">
      <div>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
            </div>
        <div className="container mt-20 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
