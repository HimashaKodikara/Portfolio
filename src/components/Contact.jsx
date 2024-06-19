import { useState, useRef} from "react";
import {motion} from	"framer-motion";
import emailjs from '@emailjs/browser';
import {styles} from '../styles';
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

//template_l7apa0k
//service_oyki62p
//bX7ob55rM3wPFOmv7
const Contact = () => {
  const formRef = useRef();
  const[form,setForm] = useState(
    {name:"",email:"",message:""});
    const [loading,setLoading] = useState(false);
    const handleChange = (e) => {

      const {name,value} = e.target;
      setForm({...form,[name]:value})
    }
    const handleSubmit = (e) => 
      {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm('service_oyki62p','template_l7apa0k',
          {
            from_name: form.name,
            to_name:'Himasha Kodikara',
            from_email: form.email,
            to_email : 'himasha.kodikara2001@gmail.com',
            message: form.message,
          },
          'bX7ob55rM3wPFOmv7'
        )
      }
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
      <span className="mb-4 font-medium text-white">Your Email</span>
      <input 
      type="email"
      name="email"
      value={form.email}
      onChange={handleChange}
      placeholder="What is your Email?"
      className="px-6 py-4 font-medium text-white border-none rounded-lg bg-tertiary placeholder:text-secondary outlined-none"/>
    </label>
    <label className="flex flex-col">
      <span className="mb-4 font-medium text-white">Your Message</span>
      <textarea
      rows="7"
      name="message"
      value={form.message}
      onChange={handleChange}
      placeholder="What do you want to say?"
      className="px-6 py-4 font-medium text-white border-none rounded-lg bg-tertiary placeholder:text-secondary outlined-none"/>
    </label>
    <button type="submit"
    className="bg-tertiray py-3 px-8 *:outline-none w-fit text-white
    font-bold shadow-md shadow-primary
    rounded-xl">
{loading ? "Sending..." : "Send"}
    </button>
   </form>
     </motion.div>
     <motion.div
     variants={slideIn('left','tween',0.2,1)}
     className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
   <EarthCanvas/>
     </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact,"contact");