import React from 'react'
import {categories} from '../../../Data'
import {programs} from '../../../Data'
import Categories from './Categories';
import Program from './Program';

const Programs = () => {
  return (
    <div className='section' id='programs'>
    <div className='text-center'>
      <div className='sm:text-3xl text-2xl font-bold mb-5'>
      Our Top <span className='text-Teal'> 
      Categories of Programs includes and not limited to</span>
          </div>

<p className='text-sm text-gray leading-7 max-w-[700px] mx-auto'>
   Here is a set of categories of the programs we offer
 from early years, special needs, primary, secondary and A-Levels
</p>
  </div>
      <div className='grid md:grid-cols-5 sm:grid-cols-2 mt-12 gap-8'>
        {categories.map(category => {
          return <Categories key={category.id} {...category}/>;
        })}
      </div>
      <div className='text-xl font-bold mt-32'>
      Description of just a few of activities conducted at school
      </div>
      <div className='mt-12 overflow-x-hidden w-full relative'>
      <div className='flex gap-8 md:w-full sm:w-[170%] xs:w-[340%] w-[480%] animate-slide'>
{programs.map(program =>{
  return <Program key={program.id} {...program}/>;
})}
      </div>
      </div>
      </div>
  );
};

export default Programs