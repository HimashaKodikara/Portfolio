import { useState, useRef} from "react";
import {motion} from	"framer-motion";
import emailjs from '@emailjs/browser';
import {styles} from '../styles';
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";


const Contact = () => {
  const formRef = useRef();
  const[form,setForm] = useState(
    {name:"",email:"",message:""});
    const [loading,setLoading] = useState(false);
    const handleChange = (e) => {}
    const handleSubmit = (e) => {}
  return (
    <div className="flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row">
     <motion.div
     variants={slideIn('left','tween',0.2,1)}
     className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
 <p className={styles.sectionSubText}>Get in touch</p>
 <h3 className={styles.sectionHeadText}>Contact</h3>
 <form
   ref={formRef}
   onSubmit={handleSubmit}
   className="flex flex-col gap-8 mt-12">
    <label className="flex flex-col">
      <span className="mb-4 font-medium text-white">Your Name</span>
      <input 
      type="text"
      name="name"
      value={form.name}
      onChange={handleChange}
      placeholder="What is your Name?"
      className="px-6 py-4 font-medium text-white border-none rounded-lg bg-tertiary placeholder:text-secondary outlined-none"/>
    </label>
    <label className="flex flex-col">
      <span className="mb-4 font-medium text-white">Your Name</span>
      <input 
      type="text"
      name="name"
      value={form.name}
      onChange={handleChange}
      placeholder="What is your Name?"
      className="px-6 py-4 font-medium text-white border-none rounded-lg bg-tertiary placeholder:text-secondary outlined-none"/>
    </label>
    <label className="flex flex-col">
      <span className="mb-4 font-medium text-white">Your Name</span>
      <input 
      type="text"
      name="name"
      value={form.name}
      onChange={handleChange}
      placeholder="What is your Name?"
      className="px-6 py-4 font-medium text-white border-none rounded-lg bg-tertiary placeholder:text-secondary outlined-none"/>
    </label>
   </form>
     </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact,"contact");