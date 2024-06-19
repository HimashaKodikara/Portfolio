import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  
 
} from "../assets";
import ds from "../assets/company/ds.png";
import AAT from "../assets/company/AAT.png";
import CA from "../assets/company/CA.png";
import Open from "../assets/company/Open.jpeg";
import Moratuwa from "../assets/company/Moratuwa.png";
import Java from "../assets/tech/java.jpg";

import C from "../assets/tech/C.svg";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "C#",
    icon: C,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Java",
    icon: Java,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "D.S.Senanayake College",
    company_name: "A/L in Commerce stream",
    icon: ds,
    iconBg: "#ffffff",
    date: " 2017 -  2020",
    points: [
      "Passed with 3A's",
      "GPA - 1.9783",
      "Accounting - A | Business Studies - A | Economics - A",
      
    ],
  },
  {
    title: "Passed Finalist",
    company_name: " Association of Accounting Technicians",
    icon: AAT,
    iconBg: "#ffffff",
    date: " 2019 - 2021",
    points: [
      "Successfully Completed all levels"
    ]
  },
  {
    title: "CA",
    company_name: "Institute of Charted Accountants of Sri Lanka ",
    icon: CA,
    iconBg: "#ffffff",
    date: " 2021 -  2022",
    points: [
      "Completed Business level 1 and 2",
     
    ],
  },
  {
    title: " Bachelor of Software Engineering ",
    company_name: "Open university, Sri Lanka",
    icon: Open,
    iconBg: "#ffffff",
    date: " 2021 - Present",
    points: [
      "3rd year undergraduate",
      
     ,
    ],
  },
  {
    title: "B.Sc.(Hons) in Information Technology and management",
    company_name: "University of Moratuwa ",
    icon: Moratuwa,
    iconBg: "#ffffff",
    date: " 2021 - Present",
    points: [
      "Reading degree in 2nd year",
      " Dean list in 1st Semester."
      
     ,
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
