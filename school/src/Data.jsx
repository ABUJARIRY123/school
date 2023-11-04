import React from 'react'
import {FiPenTool} from 'react-icons/fi'
import {FaLaptopCode} from 'react-icons/fa'
import {BsBarChartLine} from "react-icons/bs"
import {MdOutlineScience} from 'react-icons/md'

import event1 from './assets/event1.jpg'
import event2 from './assets/event2.jpg'
import event3 from './assets/event3.jpg'
import event4 from './assets/event4.jpg'
import event5 from './assets/event5.jpg'
import event6 from './assets/event6.jpg'
import event7 from './assets/event7.jpg'
import event8 from './assets/event8.jpg'

import logo1 from './assets/logo1.png'
import logo2 from './assets/logo2.png'
import logo3 from './assets/logo3.png'
import logo5 from './assets/logo5.png'
import logo7 from './assets/logo7.png'
import logo8 from './assets/logo8.png'
import logo10 from './assets/logo10.png'
import logo11 from './assets/logo11.png'
import logo12 from './assets/logo12.png'
import logo16 from './assets/logo16.png'
import logo17 from './assets/logo17.png'


export const navLinks = [

{
id: 1,
href: "home",
link: "Home",
},

{
  id: 2,
  href: "about",
  link: "About"
},

{
id: 3,
href: "programs",
link: "Programs",
},

{
id: 4,
href: "teachers",
link: "Teachers",
},
{
id: 5,
href: "contact",
link: "Contact",
},
];

export const logos = [
  {
    id: 1,
    image: logo1,
    title: "Robotics",
    rating: 4.9,
    participants: 902,
  },
  {
    id: 2,
    image: logo2,
    title: "Science",
    rating: 4.8,
    participants: 80,
  },
  {
    id: 3,
    image: logo3,
    title: "Qura'an",
    rating: 4.9,
    participants: 30,
  },
  {
    id: 5,
    image: logo5,
    title: "Artificial Inteligence",
    rating: 4.9,
    participants: 54,
  },
  {
    id: 12,
    image: logo12,
    title: "Tawheed",
    rating: 4.9,
    participants: 15,
  },  
  {
    id: 7,
    image: logo7,
    title: "Sports",
    rating: 4.9,
    participants: 30,
  },
   {
    id: 16,
    image: logo16,
    title: "Seerah",
    rating: 4.9,
    participants: 15,
  },
  {
    id: 8,
    image: logo8,
    title: "Mathematics",
    rating: 4.9,
    participants: 15,
  },
  {
    id: 10,
    image: logo10,
    title: "Art",
    rating: 4.9,
    participants: 15,
  },
  
  {
    id: 11,
    image: logo11,
    title: "Programing",
    rating: 4.9,
    participants: 15,
  },
   
 
  {
    id: 17,
    image: logo17,
    title: "Martial Arts",
    rating: 4.9,
    participants: 15,
  },
 
];

export const categories = [
  {
    id: 1,
    icon: <FiPenTool/>,
    category: "Early Years",
  },
   {
    id: 2,
    icon: <FaLaptopCode/>,
    category: "Special Needs",
  },
   {
    id: 3,
    icon: <BsBarChartLine/>,
    category: "Cambridge Primary",
  },
   {
    id: 4,
    icon: <MdOutlineScience/>,
    category: "Cambridge Secondary",
  },
{
    id: 5,
    icon: <MdOutlineScience/>,
    category: "A- Levels",
  },
   {
    id: 6,
    icon: <BsBarChartLine/>,
    category: "Islamiyaat",
  },
];

//these are several events conducted at school
export const programs = [
  {
    id: 1,
    image: event1,
    category: "Science Fair Day",
    title: "A student presenting his idea during science fair",
    rating: 4.9,
    participants: 902,
  },
  {
    id: 2,
    image: event2,
    category: "Ventilator",
    title: "Science studnets designed a ventilator in response to Covid-19",
    rating: 4.8,
    participants: 80,
  },
  {
    id: 3,
    image: event3,
    category: "Football Team",
    title: "Our Football Team pausing for a photo after winning a match",
    rating: 4.9,
    participants: 30,
    price: 99,
  },
  {
    id: 4,
    image: event4,
    category: "Early Year",
    title: "Miss Ruth talking to parents about the exemplory performance of Early Years",
    rating: 4.7,
    participants: 600,
  },
  {
    id: 5,
    image: event5,
    category: "Games Time",
    title: "Miss Safia nad students skipping a rop during games time",
    rating: 4.9,
    participants: 54,
  },
  {
    id: 6,
    image: event6,
    category: "Mentorship",
    title: "Teachers attending a mentorship session organised at school",
    rating: 4.9,
    participants: 500,
  },
  {
    id: 7,
    image: event7,
    category: "Certification",
    title: "Students receiving their certificates",
    rating: 4.9,
    participants: 30,
  },
  {
    id: 8,
    image: event8,
    category: "Sketting",
    title: "Our sketting champions pausing for a photo",
    rating: 4.9,
    participants: 15,
  },
];

export const faqs = [
  {
    id: 1,
    title: "What is Manarat International School Of Kenya?",
    answer: "Manarat International School of Kenya is a renowned educational institution dedicated to nurturing talents and creating future leaders. It offers a wide range of programs and a supportive learning environment."
  },
  {
    id: 2,
    title: "What can I learn from Manarat?",
    answer: "You can learn a variety of subjects and skills at Manarat, including robotics, science, Qura'an, French language, artificial intelligence, Hadeeth, sports, mathematics, Adhkaar, art, programming, Tawheed, English, Kiswahili, Aaadab, Seerah, and martial arts."
  },
  {
    id: 3,
    title: "Can I teach at Manarat?",
    answer: "Manarat International School welcomes passionate and qualified educators. You can explore teaching opportunities by contacting our school administration."
  },
  {
    id: 4,
    title: "What are categories of programs offered at Manarat International School of Kenya?",
    answer: "Manarat offers programs in Early Years, Special Needs, Cambridge Primary, Cambridge Secondary, and A-Levels. Additionally, there are programs in Islamiyaat to cater to various educational needs."
  },
];