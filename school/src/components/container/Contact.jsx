import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';
import {motion} from 'framer-motion'

const Contact = () => {
  const form = useRef()
   const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vmaklnl', 'template_ui6xmwe', form.current, 'ZtwfZE-s4hDF7B71R')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
   const sendNews = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vmaklnl', 'template_ui6xmwe', form.current, 'ZtwfZE-s4hDF7B71R')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <div className='section' id='contact'>
    <section id="contact" className='p-6 my-12 scroll-mt-16'>
<h3 className='text-2xl font-bold text-center sm:text-2xl mb-2'>Contact Us</h3>
<form ref={form} action='' method="post" onSubmit={sendEmail} className='max-w-2xl mx-auto text-bold sm:text-bold
flex flex-col items-left gap-4'>
  <label htmlFor="subject" > Subject: </label>
  <input type='text' id='subject' name='subject' required
    minLength='3' maxLength='60' placeholder='Your Subject' className='w-full text balck text-0.7xl
    sm:text-0.5xl p-1 rounded-x1 border border-solid border-slate-900'
  />
  <label htmlFor="email" > Email: </label>
  <input type="email" id="email" name="email" required
  minLength="3" maxLength="60" placeholder="Your Email" className="w-full text-black text-0.7xl
  sm:text-0.5xl p-1 rounded-xl border border-solid border-slate-900"
/>
    <label htmlFor="phone" > Phone Number: </label>
  <input type='phone' id='phone' name='phone' required
    minLength='10' maxLength='60' placeholder='Your Phone Number' className='w-full text-balck text-0.7xl
    sm:text-0.5xl p-1 rounded-x1 border border-solid border-slate-900'
  />
  <label htmlFor='message'> Message: </label>
  <textarea name='message' id='message' cols='8' rows='4' placeholder='Your Message' required
  className='w-full text-balck text-1xl
    sm:text-0.8xl p-1 rounded-x1 border border-solid border-slate-900'>
    </textarea>

    <button className='bg-Teal-700 hover:bg:Teal-600 active:bg-Teal-500 text-black text-0.8xl
    p-1 w-28 rounded-xl border border-solid border-slate-900'>Send</button>
</form>
    </section>
    <div className='text-center max-w-[600px] mx-auto'>
<div className='sm:text-3xl text-2xl font-bold mb-5'>
Subscribe to Our Newsletter
</div>
<p className='text-sm leading-7 text-gray'>
  Welcome to Manarat International School of Kenya where we 
  inspire each child to achieve greatness in their own way
</p>

<motion.form ref={form} action='' method="post" onSubmit={sendNews} initial={{scale:0}} whileInView={{scale:1}}  
transition={{duration:0.4}} className='mt-5'>
  <input type='email' placeholder='Enter Your Email Address'className='sm:p-3 p-2 outline-none
  text-sm shadow-md sm:w-72 w-60'/>
  <button className='text-sm text-white bg-Teal sm:p-3 p-2 shadow-md'>Subscribe</button>
</motion.form>
    </div>
    </div>
  );
};

export default Contact