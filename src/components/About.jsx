import Aboutme from "../assets/Aboutme.jpg";
import { motion } from "framer-motion"


const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">About 
        <span className="text-purple-800"> Me</span>
      </h2>
      <div className="flex flex-col lg:flex-row">
        <motion.div 
         whileInView={{opacity:1,x:0}}
         initial={{opacity:0,x:-100}}
         transition={{duration:0.5}}
        className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center lg:justify-start">
            <img className="max-w-xs lg:max-w-sm h-auto rounded-md lg:rounded-lg mx-7" src={Aboutme} alt="About Me" />
          </div>
        </motion.div>
        <motion.div 
         whileInView={{opacity:1,x:0}}
         initial={{opacity:0,x:100}}
         transition={{duration:0.5}}
        className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-10 px-4 lg:px-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea unde eligendi esse eaque velit natus placeat libero omnis voluptates. Reprehenderit sequi corrupti optio magni necessitatibus consequatur nostrum ipsum, voluptate quod provident earum iusto, aperiam temporibus, doloribus dicta iste aliquid incidunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quisquam dicta rem repudiandae nam hic id quos illum, sapiente cum, at natus cupiditate voluptatum libero fuga repellat, placeat iure? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat natus voluptas cupiditate molestias corporis. Numquam illum ipsa temporibus aliquid delectus?
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
