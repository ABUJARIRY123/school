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
import logo4 from './assets/logo4.png'
import logo5 from './assets/logo5.png'
import logo6 from './assets/logo6.png'

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

export const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

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
  },
  {
    id: 2,
    title: "What can I learn from Manarat?",
  },
  {
    id: 3,
    title: "Can I teach at Manarat?",
  },
  {
    id: 4,
    title: "What are categories of programs offered at Manarat International School of Kenya?",
  },
];