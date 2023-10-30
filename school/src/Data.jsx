import React from 'react'
import {FiPenTool} from 'react-icons/fi'
import {FaLaptopCode} from 'react-icons/fa'
import {BsBarChartLine} from "react-icons/bs"
import {MdOutlineScience} from 'react-icons/md'

import courses1 from './assets/courses1.jpg'
import courses2 from './assets/courses2.jpg'
import courses3 from './assets/courses3.jpg'
import courses4 from './assets/courses4.jpg'
import courses5 from './assets/courses5.jpg'
import courses6 from './assets/courses6.jpg'
import courses7 from './assets/courses7.jpg'
import courses8 from './assets/courses8.jpg'

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
    category: "Design",
  },
   {
    id: 2,
    icon: <FaLaptopCode/>,
    category: "Development",
  },
   {
    id: 3,
    icon: <BsBarChartLine/>,
    category: "Business",
  },
   {
    id: 4,
    icon: <MdOutlineScience/>,
    category: "Science",
  },
];
