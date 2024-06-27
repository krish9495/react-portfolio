import profilepic from "../assets/gautam.jpg";
import { motion } from "framer-motion"
const container =(delay)=>({
hidden:{x:-100,opacity:0},
visible:{
  x:0,
  opacity:1,
  transition:{duration:0.5,delay:delay},
},
});
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap items-center mx-4 lg:mx-0"> {/* Adjusted margin here */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="mx-4 lg:mx-14 pb-4 text-4xl lg:text-6xl font-thin tracking-tight lg:mt-16 lg:-mt-8">
              Gautam Bharti
            </motion.h1>
            <motion.span 
             variants={container(0.5)}
             initial="hidden"
             animate="visible"
            className="mx-4 lg:mx-14 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl lg:text-4xl tracking-tight text-transparent">
              Founder-Hunar Tribe
            </motion.span>
            <motion.p
             variants={container(1)}
             initial="hidden"
             animate="visible"
            className="mx-4 lg:mx-14 my-2 max-w-xl lg:max-w-none py-6 lg:py-0 font-light tracking-tighter">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo commodi earum ut qui cumque tempora accusantium eius quo praesentium dignissimos fugit iste culpa, neque repellat porro vero, dicta inventore, alias eaque ab animi debitis. Sed magnam distinctio illum assumenda?
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 flex justify-center lg:justify-end">
          <motion.img 
          initial={{x:100,opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{duration:1,delay:1.2}}
          src={profilepic} alt="Gautam Bharti" className="max-w-xs lg:max-w-sm h-auto lg:h-auto rounded-lg lg:mt-[-20px] mt-4" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
