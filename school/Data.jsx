import React from 'react'
import {FiPenTool} from 'react-icons/fi'
import {FaLaptopCode} from 'react-icons/fa'
import {BsBarChartLine} from "react-icons/bs"
import {MdOutlineScience} from 'react-icons/md'

import courses1 from './src/assets/courses1.jpg'
import courses2 from './src/assets/courses2.jpg'
import courses3 from './src/assets/courses3.jpg'
import courses4 from './src/assets/courses4.jpg'
import courses5 from './src/assets/courses5.jpg'
import courses6 from './src/assets/courses6.jpg'
import courses7 from './src/assets/courses7.jpg'
import courses8 from './src/assets/courses8.jpg'

import logo1 from './src/assets/logo1.png'
import logo2 from './src/assets/logo2.png'
import logo3 from './src/assets/logo3.png'
import logo4 from './src/assets/logo4.png'
import logo5 from './src/assets/logo5.png'
import logo6 from './src/assets/logo6.png'

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