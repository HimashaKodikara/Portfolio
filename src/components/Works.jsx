import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({index,name, description, tags, image, source_code__link }) => {
  return(
    <motion.div
    variants={fadeIn("up","spring",0.5 * index,0.75)}>
      test
    </motion.div>
  )
}
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My work</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Projects</h2>
      </motion.div>
      <div className="flex w-full">
        <motion.p
        variants={fadeIn("","",0.1,1)}
        className="mt-3 text-secondary text-[17px]
         leading-[30px] xl:ml-72 xl:mr-64 justify-center">
        Following projectsshowcase my skills and experience through real-world examples 
        of my work. Each project is briefly described
        with links to code repositories and live demos.
        It reflects my ability to work with different technologies.
        </motion.p>

      </div>
      <div className="flex flex-wrap mt-20 gap-7">
{
  projects.map((project,index)=>(
    <ProjectCard key={'project-${index'}
    {...project}/>
  ))
}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");