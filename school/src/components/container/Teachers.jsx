import React from 'react'
import Teacher1 from '../../assets/teacher1.png'
import Teacher2 from '../../assets/teacher2.png'
import {faqs} from '../../Data'
import FAQs from './FAQs'
const Teachers = () => {
  return (
    <div className='section' id='teachers'>

      <div className='grid sm:grid-cols-4 place-items-center gap-4'>

<div className='pl-5'>

  <div className='font-bold sm:text-[1.9rem] text-[1.2rem] mb-5'>
  Receive a word  <span className='text-Teal'> from some of our instructors</span><br/>  
  </div>

  <p className='text-sm leading-7 text-gray mb-5'>
  The best Teacher, teaches from the heart not from the books
</p>
<button className='py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold'>
You have a question?
</button>
</div>
<div className='p-4 md:w-0.75 sm:row-start-1'>
  <img src={Teacher1} alt=""/>
</div>
<div className='pl-5'>
<div className='font-bold sm:text-[1.9rem] text-[1.2rem] mb-5'>
  Receive a word  <span className='text-Teal'> from some of our instructors</span><br/>  
</div>
<p className='text-sm leading-7 text-gray mb-5'>
  The best Teacher, teaches from the heart not from the books
</p>
<button className='py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold'>
Join Us
</button>
</div>
<div className='p-4 md:w-0.75'>
  <img src={Teacher2} alt=""/>
</div>
</div>
<div className='text-center my-8 font-bold sm:text-[1.9rem] text-[1.4rem] '>
  Frequently <span className='text-Teal'>Asked Questions</span>
</div>
<div className='mt-12 max-w-[700px] mx-auto'>
  {faqs.map(faqs => {
    return <FAQs key={faqs.id} {...faqs} />;
  })}
</div>
</div>
  );
};

export default Teachers