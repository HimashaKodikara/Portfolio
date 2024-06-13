import React from 'react';
import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion';	

import {styles} from '../styles';
import { services } from '../constants';
import {fadeIn , textVariant} from '../utils/motion';

const ServiceCard =({index,title,icon})=>{
  return(
    <p>{title}</p>
  )
}
const About = () => {
  return (
    <>
     <motion.div>
      <p className={styles.sectionSubText}>Introduction</p>
      <p className={styles.sectionHeadText}>Overview</p>
     </motion.div>
     <motion.p
     variants={fadeIn("","",0.1,1)}>
      I'm Undergraduate at University of Moratuwa. I'm quick learner and collaborate closely with clients
      to create efficient, scalable and user-friendly solutions that solve real-world problems. Let's work together to build something great. 
     </motion.p>
     <div className='flex flex-wrap gap-10 mt-20 '>
      {services.map((service,index) => (
        <ServiceCard key={services.title}
         index={index} {...service}/>
      ))}

     </div>
    </>
  );
};

export default About;