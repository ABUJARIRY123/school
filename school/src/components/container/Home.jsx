import React from 'react'
import hero from '../../assets/hero.png'
import {logos} from '../../Data'

const Home = () => {
  return (
    <div className='section' id='home'>
    <div className='md:flex items-center justify-center'>
      <div>
<div className='font-bold text-xs text-Teal mb-4'>
  {""}
  Your Best Online Classes masters
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
      <div className='flex items-center justify-center flex-wrap gap-8 p-2'>
        {logos.map((logo, index) => (
          <div className='w-28' key={index}>
<img src={logo} alt='' className='w-full object-cover'/>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Home