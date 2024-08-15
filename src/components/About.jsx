import { HERO_CONTENT } from "../constants"
import { delay, motion } from "framer-motion"
import { Helmet } from "react-helmet";

const container = (delay) => ({
    hidden: {x:-100, opacity: 0},
    visible: {
        x:0,
        opacity:1,
        transition: {duration:0.5,delay:delay},
    },
    }
);
const About = () => {
    const words = ["Vibrant,", "Innovative,", "Driven", "and", "Creative"];
  
    return (
      <div className="border-b border-neutral-900 pb-4 lg:mb-36">
        <Helmet>
          <title>Portfolio</title>
        </Helmet>
        <div className="flex flex-wrap">
          <div className="w-full">
            <div className="flex justify-start items-center space-x-4 lg:space-x-8 w-full">
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  className="bg-gradient-to-r from-white via-slate-200 to-purple-300 
                  bg-clip-text text-4xl tracking-tight text-transparent"
                  animate={{
                    x: [0, -2, 2, -2, 2, 0], 
                    y: [0, -2, 2, -2, 2, 0], 
                  }}
                  transition={{
                    duration: 0.1, 
                    ease: "easeInOut", 
                    repeat: Infinity, 
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
            <motion.h1
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-4xl"
            >
              Web Developer
            </motion.h1>
            <motion.p 
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-2 py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
      </div>
    );
  };

export default About
