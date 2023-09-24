import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.jpg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpg';
import Work4 from './assets/project-4.jpg';
import Work5 from './assets/project-5.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Harshal',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Modhave',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '21 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 5,
    title: 'Gender : ',
    description: 'Male',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'A.Nagar, Maharashtra',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+91 7499277321',
  },

  {
    id: 8,
    title: 'Freelance : ',
    description: 'Available',
  },
  
  {
    id: 9,
    title: 'Email : ',
    description: 'harshalmodhave@gmail.com',
  },

  {
    id: 10,
    title: 'Languages : ',
    description: 'English, Hindi, Marathi',
  },
];

export const stats = [
  {
    id: 1,
    no: '2+',
    title: '____Years of <br /> Experience',
  },

  {
    id: 2,
    no: '10+',
    title: '____Completed <br /> Projects',
  },

  {
    id: 3,
    no: '10+',
    title: '____Certifications <br /> Done',
  },

  {
    id: 4,
    no: '5+',
    title: '____Achievements',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2023 - PRESENT',
    title: 'Inter Institute Competition Facilitator<br /><span> PCCOE IEEE STUDENT BRANCH </span>',
    desc: `
      Responsible for organizing both technological and non-technological competitions within the department. 
      Intermediator between different institutes for conducting competitions. 
    `,
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2023 PRESENT',
    title: 'Social Media Lead<br /><span> PCCOE IEEE STUDENT BRANCH</span>',
    desc: `I artfully manage and nurture PCCOE IEEE's official profiles on LinkedIn, Instagram, Facebook, and Twitter, ensuring a captivating online presence. With a keen eye for aesthetics, I create visually stunning and engaging posts that effortlessly draw in and delight our audience.`,
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2016 - 2021',
    title: 'Executive<br /><span> Harshal Traders & Company, Jeur (Ba)</span>',
    desc: 'I proudly serve as an executive at Harshal Traders, a revered construction and building materials shop founded by my father in 2008. In my role, I enthusiastically handle customer interactions and manage the billing process, ensuring seamless and satisfying experiences for all.',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2020',
    title: 'Higher Secondary Certificate <br /><span> Pemraj Sarda College, A.Nagar </span>',
    desc: 'I proudly attained a flawless 100/100 in Mathematics and Statistics, showcasing my exceptional grasp of the subject. With a commendable overall score of 76% in my higher secondary exam, I accomplished these academic achievements within the confines of my hometown, reflecting my dedication and proficiency in mathematics.',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2024',
    title: 'Bachelor Degree <br /><span> Pimpri Chinchwad College Of Engineering, Pune </span>',
    desc: `I am currently in my third year of pursuing a Bachelor's degree in Information Technology at my college. With a commendable overall CGPA of 8.9, I am actively acquiring technological skills that will further enrich my knowledge and pave the way for me to become a proficient software developer.`,
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '85',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '80',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '70',
  },

  {
    id: 4,
    title: 'React',
    percentage: '75',
  },

  {
    id: 5,
    title: 'NodeJS',
    percentage: '70',
  },

  {
    id: 6,
    title: 'Express',
    percentage: '65',
  },

  {
    id: 7,
    title: 'MySQL',
    percentage: '85',
  },

  {
    id: 8,
    title: 'MongoDB',
    percentage: '80',
  },

  {
    id: 9,
    title: 'C, C++',
    percentage: '90',
  },

  {
    id: 10,
    title: 'Python',
    percentage: '70',
  },

  {
    id: 11,
    title: 'Java',
    percentage: '65',
  }
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Music Player App',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Web Application',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Public',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'ReactJs, NodeJs, Express, MongoDB, HTML, CSS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'music-app-67220.web.app',  
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'NoteTaker App',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Web Application',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Public',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS, Vanila Js, BootStrap',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'harshal-modhave.github.io/NoteTaker.github.io',  
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Library Management System',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Landing Page',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Public',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS, JS, BootStrap',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',  // link to be added
      },
    ],
  },
  
  // {
  //  id: 4,
  //   img: Work3,
  //   title: 'Library Management System',
  //   details: [
  //     {
  //       icon: <FiFileText />,
  //       title: 'Project : ',
  //       desc: 'Landing Page',
  //     },
  //     {
  //       icon: <FiUser />,
  //       title: 'Client : ',
  //       desc: 'Public',
  //     },
  //     {
  //       icon: <FaCode />,
  //       title: 'Language : ',
  //       desc: 'HTML, CSS, JS, BootStrap',
  //     },
  //     {
  //       icon: <FiExternalLink />,
  //       title: 'Preview : ',
  //       desc: 'www.dribble.com',  // link to be added
  //     },
  //   ],
  // },

  {
    id: 4,
    img: Work4,
    title: 'News Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Landing Page',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Public',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS, JS, BootStrap',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',  // link to be added
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Form Validation',
    details: [
      {
        title: 'Project : ',
        desc: 'Landing Page',
      },
      {
        title: 'Client : ',
        desc: 'Public',
      },
      {
        title: 'Language : ',
        desc: 'HTML, CSS, JS, BootStrap',
      },
      {
        title: 'Preview : ',
        desc: 'www.dribble.com',  // link
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
