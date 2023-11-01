import React from 'react'
import {motion} from 'framer-motion'

const Contact = () => {
  return (
    <div className='section' id='contact'>
    <section id="contact" className='p-6 my-12 scroll-mt-16'>
<h3 className='text-2xl font-bold text-center sm:text-2xl mb-2'>Contact Us</h3>
<form action='' className='max-w-2xl mx-auto text-bold sm:text-bold
flex flex-col items-left gap-4'>
  <label htmlFor="subject" > Subject: </label>
  <input type='text' id='subject' name='subject' required
    minLength='3' maxLength='60' placeholder='Your Subject' className='w-full text balck text-0.7xl
    sm:text-0.5xl p-1 rounded-x1 border border-solid border-slate-900'
  />
  <label htmlFor="subject" > Email: </label>
  <input type='email' id='email' name='email' required
    minLength='3' maxLength='60' placeholder='Your Email' className='w-full text balck text-0.7xl
    sm:text-0.5xl p-1 rounded-x1 border border-solid border-slate-900'
  />
  <label htmlFor='message'> Message: </label>
  <textarea name='message' id='message' cols='8' rows='4' placeholder='Your Message' required
  className='w-full text balck text-1xl
    sm:text-0.8xl p-3 rounded-x1 border border-solid border-slate-900'></textarea>
    <button className='bg-Teal-700 hover:bg:Teal-600 active:bg-Teal-500 text-black text-0.8xl
    p-1 w-28 rounded-xl border border-solid border-slate-900'>Submit</button>
</form>
    </section>
    <div className='text-center max-w-[600px] mx-auto'>
<div className='sm:text-3xl text-2xl font-bold mb-5'>
Subscribe to Our Newsletter
</div>
<p className='text-sm leading-7 text-gray'>
  Welcome to our School of Kenya where we 
  inspire each child to achieve their own in
</p>
<motion.form initial={{scale:0}} whileInView={{scale:1}}
transition={{duration:0.4}} className='mt-5'>
  <input type='email' placeholder='Enter Your Email Address'className='sm:p-3 p-2 outline-none
  text-sm shadow-md sm:w-72 w-60'/>
  <button className='text-sm text-white bg-Teal sm:p-3 p-2 shadow-md'>Subscribe</button>
</motion.form>
    </div>
    </div>
  )
}

export default Contact