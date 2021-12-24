import {motion} from 'framer-motion';

export default function Header() {
    const parentVariant = {
        initial : {}, 
        animate: {
            transition: {
                staggerChildren: 0.15, 
                delayChildren: 2
            }
        }, 
    }
    const childrenVariant = {
        initial : {
            opacity: 0, 
            y: 400
        }, 
        animate: {
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.4
            }
        }, 
    }
    const gradientTextVariant = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1, 
            scale: [0.8, 1.05, 1],
            transition: {
                duration: 0.5, 
                delay: 4.2, 
                ease: [0.6, 0.01, -0.05, 0.9]
            }
        }
    }

    return (
        <motion.h1 
          className="header"
          variants={parentVariant}
          initial="initial"
          animate="animate"
          >
            <motion.span variants={childrenVariant}>G</motion.span>
            <motion.span variants={childrenVariant}>i</motion.span>
            <motion.span variants={childrenVariant}>f</motion.span>
            <motion.span variants={childrenVariant}>t</motion.span>
            <motion.span variants={childrenVariant}>i</motion.span>
            <motion.span variants={childrenVariant}>n</motion.span>
            <motion.span variants={childrenVariant}>g</motion.span>
            <span> </span>
            <motion.span variants={childrenVariant}>m</motion.span>
            <motion.span variants={childrenVariant}>a</motion.span>
            <motion.span variants={childrenVariant}>d</motion.span>
            <motion.span variants={childrenVariant}>e</motion.span>
            <span> </span>
        
        <motion.span className="gradientText" variants={gradientTextVariant}>easier</motion.span>
        </motion.h1>
    );
}