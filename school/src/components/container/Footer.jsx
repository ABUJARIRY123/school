import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
import {motion} from 'framer-motion';

const Footer = () => {
  return (
    <motion.div
    initial={{height:0}} whileInView={{height:'auto'}} transition={{duration:1}} 
    className='bg-Teal p-10'>
<div className='grid md:grid-cols-6 sm:grid-cols-5 xs:grid-cols-4 grid-cols-3 place-items-start
gap-10 text-black'>
  <div>
    <div className='font-bold mb-6 '> Highly welcomed </div>
    <p className='text-sm leading-7 '>
  Welcome to our School of Kenya where we 
  inspire each child to achieve their own in
</p>
  </div>
  <div>
  <div className='font-bold mb-6'> Programs </div>
 <div className='flex flex-col gap-4'>
    <a href="" className='text-sm hover:underline'> Early Years </a>
    <a href="" className='text-sm hover:underline'> Special Eduation </a>
    <a href="" className='text-sm hover:underline'> Cambridge Primary </a>
    <a href="" className='text-sm hover:underline'> Cambridge Secondary </a>
    <a href="" className='text-sm hover:underline'> A-Levels </a>
    <a href="" className='text-sm hover:underline'> Islamiyaat </a>
 </div>
 <div>
 <div className='font-bold mb-6'> Talk to Us </div>
 <div className='text-sm mb-4'> email@gmail.com</div>
 <div className='text-sm'> +254765690364</div>
 <div className='flex gap-4 mt-4'>

  <a href="" className='hover:scale-120 text-xl'>
    <BsFacebook/>
  </a>

  <a href="" className='hover:scale-120 text-xl'>
    <BsInstagram/>
  </a>

  <a href="" className='hover:scale-120 text-xl'>
  <BsTwitter/>
  </a>
 </div>
 </div>
  </div>
</div>
    </motion.div>
  )
}

export default Footer