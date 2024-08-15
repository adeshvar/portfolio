import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa"; 
import { SiMongodb } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { DiPython } from "react-icons/di";
import logo from '../assets/projects/python_logo.jpeg';
import { DiJava } from "react-icons/di";
import { animate, motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y:-10},
    animate: {
        y: [10,-10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1 
        whileInView = {{opacity: 1, y:0}}
        initial={{opacity:0, y: -100}}
        transition={{duration: 1.5}}className='my-20 text-center text-4xl'>Technologies</motion.h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
             variants={iconVariants(2.5)}
             initial="initial"
             animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-7xl text-green-500"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-7xl text-green-500"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiPostgresql className="text-7xl text-sky-700"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(4.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiPython className="text-7xl "/>
            </motion.div>
            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiJava className="text-7xl text-cyan-400"/>
            </motion.div>
        </div>
    </div>
  );
}

export default Technologies;
