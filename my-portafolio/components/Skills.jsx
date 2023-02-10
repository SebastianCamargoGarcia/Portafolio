import React from 'react'
import Image from 'next/image'

const skills = [
{
    name: 'JavaScript',
    Image: '/../public/skills_js.png' 
},
{
    name: 'Java',
    Image: '/../public/skills_java.png' 
},
{
    name: 'React',
    Image: '/../public/skills_react.png' 
},
{
    name: 'Next.js',
    Image: '/../public/skills_next-js.png' 
},
{
    name: 'PHP',
    Image: '/../public/skills_php.png' 
},
{
    name: 'CSS',
    Image: '/../public/skills_CSS.png' 
},
{
    name: 'HTML',
    Image: '/../public/skills_html.png' 
},
{
    name: 'MySQL',
    Image: '/../public/skills_MySQL.png' 
},
{
    name: 'Tailwind CSS',
    Image: '/../public/skills_Tailwind_CSS.png' 
},
{
    name: 'Bootstrap',
    Image: '/../public/skills_bootstrap.png' 
}

];


const Skills = () => {
    return (
      <div className='w-full lg:h-screen p-2'>
        <div className='max-w-1240px mx-auto flex flex-col justify-center h-full'>
          <p className='text-xl tracking-widest uppercase text-[#3eaef8]'>Skills</p>
          <h2 className='py-4'>Puedo hacer esto</h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {skills.map(skills => (
              <div key={skills.name} className='p-6 shadow-xl rounded-xl shadow-blue-300 hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image src={skills.Image} width='64' height='64' alt={skills.name} />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>{skills.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Skills;

