import React from 'react'
import Teacher1 from '../../assets/teacher1.png'
import Teacher2 from '../../assets/teacher2.png'
import Teacher3 from '../../assets/teacher3.jpg'
import Teacher4 from '../../assets/teacher4.jpg'
import {faqs} from '../../Data'
import FAQs from './FAQs'

const Teachers = () => {
  return (
    <div className='section' id='teachers'>
      <div className='grid sm:grid-cols-2 place-items-center gap-4'>
        <div className='pl-5'>
          <div className='font-bold sm:text-[1.5rem] text-[1.2rem] mb-5'>
            Message  from <span className='text-Teal'> Islamiyaat Department</span><br/>  
          </div>
          <p className='text-sm leading-7 text-gray mb-5'>
Dear Parents and Guardians,
Welcome to Manarat International School of Kenya, 
a hub of holistic and lifelong learning. Our distinctive approach, 
merging British and Islamic education, nurtures spiritual growth, 
intellectual curiosity, and self-discovery, ensuring students excel 
academically, socially, physically, and emotionally. Upholding values of 
respect, compassion, excellence, and piety, we prepare students for global 
challenges while embracing their unique potential. Come witness our motivated s
tudents in our purposeful learning environment. We look forward to a fulfilling, 
enduring partnership with your family.
Warm regards,


         
 </p>
          <button className='py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold'>
Abdul Waheed,

Islamiyaat          
</button>
        </div>
        <div className='p-4 md:w-0.75 sm:row-start-1'>
          <img src={Teacher1} alt=""/>
        </div>
        <div className='pl-5'>
          <div className='font-bold sm:text-[1.6rem] text-[1.2rem] mb-5'>
            Message from the  <span className='text-Teal'>Early Years</span><br/>  
          </div>
          <p className='text-sm leading-7 text-gray mb-5'>
Dear Parents and Guardians,
Welcome to Manarat International School of Kenya, 
a hub of holistic and lifelong learning. Our distinctive approach, 
merging British and Islamic education, nurtures spiritual growth, 
intellectual curiosity, and self-discovery, ensuring students excel 
academically, socially, physically, and emotionally. Upholding values of 
respect, compassion, excellence, and piety, we prepare students for global 
challenges while embracing their unique potential. Come witness our motivated 
students in our purposeful learning environment. We look forward to a fulfilling, 
enduring partnership with your family.
Warm regards,

 </p>
  <button className='py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold'>
     Miss Ruth,

Early Years   
          </button>
        </div>
        <div className='p-4 md:w-0.75'>
          <img src={Teacher2} alt=""/>
        </div>
        <div className='pl-5'>
          <div className='font-bold sm:text-[1.6rem] text-[1.2rem] mb-5'>
            A word from the<span className='text-Teal'>  head of academics</span><br/>  
          </div>
          <p className='text-sm leading-7 text-gray mb-5'>
Dear Parents and Guardians,
Welcome to Manarat International School of Kenya, 
a hub of holistic and lifelong learning. Our distinctive approach, 
merging British and Islamic education, nurtures spiritual growth, 
intellectual curiosity, and self-discovery, ensuring students excel academically, 
socially, physically, and emotionally. Upholding values of respect, compassion, 
excellence, and piety, we prepare students for global challenges while 
embracing their unique potential. Come witness our motivated students in 
our purposeful learning environment. We look forward to a fulfilling, 
enduring partnership with your family.

Warm regards,
          </p>
          <button className='py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold'>
            Miss Fanice Rop
          </button>
        </div>
                        <div className='p-4 md:w-0.75 sm:row-start-3'>

          <img src={Teacher3} alt=""/>
        </div>
        <div className='pl-5'>
          <div className='font-bold sm:text-[1.4rem] text-[1.2rem] mb-5'>
           Message  from Special<span className='text-Teal'>  Needs department</span><br/>  
          </div>
          <p className='text-sm leading-7 text-gray mb-5'>

Dear Parents and Guardians,
Welcome to Manarat International School of Kenya, 
a hub of holistic and lifelong learning. Our distinctive approach, 
merging British and Islamic education, nurtures spiritual growth, 
intellectual curiosity, and self-discovery, ensuring students excel academically, 
socially, physically, and emotionally. Upholding values of respect, compassion, 
excellence, and piety, we prepare students for global challenges while 
embracing their unique potential. Come witness our motivated students in 
our purposeful learning environment. We look forward to a fulfilling, 
enduring partnership with your family.

Warm regards,


          </p>
          <button className='py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold'>
Mis Lilian,
Special Needs 

          </button>
        </div>
        <div className='p-4 md:w-0.75'>

          <img src={Teacher4} alt=""/>
        </div>
      </div>
      <div className='text-center my-8 font-bold sm:text-[1.9rem] text-[1.4rem] '>
        Frequently <span className='text-Teal'>Asked Questions</span>
      </div>
      <div className='mt-12 max-w-[700px] mx-auto'>
        {faqs.map(faq => {
          return <FAQs key={faq.id} {...faq} />;
        })}
      </div>
    </div>
  );
};

export default Teachers
