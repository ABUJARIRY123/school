import React from 'react'
import about from '../../assets/About.jpg'


const About = () => {
  return (
<div className='section' id='about'>
<div className='grid md:grid-cols-2 gap-8 place-items-center'>
<div className='border-[3px] border-solid border-Teal rounded-lg'>
  <img src={about} alt='' className='p-4'/>
</div>
<div className='font-bold sm:text -[1.9rem] text-[1.3rem]'>
We are proving the <br/> best <span className='text-Teal'> 
Educational services from early years to A-levels</span>
<p className='text-sm text-gray leading-7 mb-4'>
  We have  a team of experienced teachers that are well versed in their areas of specialization
  We offer practical oriented education 
</p>
<h2>Mission</h2>
<p className='text-sm text-gray leading-7 mb-4'>
  We have  a team of experienced teachers that are well versed in their areas of specialization
  We offer practical oriented education 
</p>
<h2>Vision</h2>
<p className='text-sm text-gray leading-7 mb-4'>
  We have  a team of experienced teachers that are well versed in their areas of specialization
  We offer practical oriented education 
</p>
<button className='py-3 px-6 text-sm border border-solid border-gray rounded-lg font-bold'>
Know More
</button>
</div>
</div>
</div>
  )
}

export default About