import React from 'react'
import hero from '../../assets/hero.png'
import Homes from './Programs/Homes'
import {logos} from '../../Data'
import{motion} from 'framer-motion'
import { Link } from 'react-router-dom'

const Home = () => {
 const container = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.4,
    },
  },
};

const item = {
  hidden: { y: 2, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

  return (
    <div className='section' id='home'>
    <div className='md:flex items-center justify-center'>
      <div>
<div className='font-bold text-xs text-Teal mb-4'>
  {""}
  Your Best Cambridge Carriculum
</div>
<div className='sm:text-[2.5 rem] text-[1.9rem] font-bold'>
  This is where <br/> talents get natured <br/> by well experienced experts
</div>
<p className='text-sm leading-7 text-gray max-w-sm'>
  We nature talents in various languages, arabic
</p>
<p className='text-sm leading-7 text-green max-w-sm'>
  We nature talents in various languages, commer server
</p>
<p className='text-sm leading-7 text-pink max-w-sm'>
  We nature talents in various languages, swahili
</p>
<div className='mt-6'>
  <button className="px-6 py-3 font-bold text-white bg-Teal rounded-lg mr-4 text-sm">
    Join Us Today
  </button>
  <button className="px-6 py-3 font-bold border border-solid border-gray rounded-lg text-sm">
    Discover More
  </button>
</div>
      </div>
      <div className='md:w-[60%] '>
      <div className='border-[3px] border-solid border-Teal rounded-lg'>
        <img src={hero} alt="" />
      </div>
            </div>

    </div>
    <div className='text-center'>

    <div className='text-xl font-bold mt-32'>
      Some of the experties that our learners gain at school
      </div>
  <div className='mt-12 overflow-x-hidden w-full relative'>
      <div className='flex gap-8 md:w-full sm:w-[170%] xs:w-[340%] w-[480%] animate-slide'>
{logos.map(logo =>{
  return <Homes key={logo.id} {...logo}/>;
})}
      </div>
    </div>
        </div>
        </div>

        
);
  };
export default Home