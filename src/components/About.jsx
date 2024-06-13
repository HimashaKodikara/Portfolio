import React from 'react';
import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion';	

import {styles} from '../styles';
import { services } from '../constants';
import {fadeIn , textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';
const ServiceCard =({index,title,icon})=>{
  return(
    
    <Tilt className="xs:w-[250px] w-full">
        <motion.div
        variants={fadeIn("right","spring",0.5* index,0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
          <div 
          options={{
            max:45,
            scale:1,
            speed:450
          }}
          className='bg-tertiary rounded-[20px]
          py-5 px-12 min-h-[280px] flex justify-evenly items-center
          flex-col '>
            <img src={icon} alt={title} 
            className='object-contain w-16 h-16'/>
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>

        </motion.div>
    </Tilt>
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

export default SectionWrapper(About,"about");