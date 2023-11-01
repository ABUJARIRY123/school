import React from 'react'
import hero from '../../assets/hero.png'
import {logos} from '../../Data'
import{motion} from 'framer-motion'
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
  <button className='px-6 py-3 font-bold text-white bg-Teal rounded-lg mr-4 text-sm'>
Join Us Today
  </button>
    <button className='px-6 py-3 font-bold border border-solid border-gray rounded-lg text-sm'>
Discover More
    </button>
</div>
      </div>
      <div className='md:w-[60%]'>
        <img src={hero} alt="" />
      </div>
    </div>
    <div>
      <p className='text-center text-xl'>
        Out of the experties we offer, Our graduates have now managed
        to join <span className='text-Teal'>100+ different carrers in the world</span>
      </p>
     <motion.div variants={container} initial="hidden" whileInView="visible" className='flex items-center justify-center flex-wrap gap-8 p-2'>
  {logos.map((logo, index) => (
    <motion.div variants={item} className='w-28' key={index}>
      <img src={logo} alt='' className='w-full object-cover' />
    </motion.div>
  ))}
</motion.div>
    </div>
    </div>
  )
}

export default Home