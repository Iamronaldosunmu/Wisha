import { motion } from "framer-motion";

const WishaLogoText = (props) => {
  const parentVariant = {
    initial: { y: -43, x: 5, opacity: 0 },
    animate: {
      opacity: props.startAnimation ? 1 : 0,
      transition: {
        delay: 0.3,
        duration: 0.75,
        ease: [0.6, 0.01, -0.05, 0.9],
        delayChildren: 0.6,
        staggerChildren: 0.04
      }
    }
  };
  const letter = {
    initial: {
      y: 30
    },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, 0.01, -0.05, 0.9]
      }
    }
  };
  return (
    <motion.div
      className="wishaLogoText"
      variants={parentVariant}
      initial="initial"
      animate="animate"
    >
      <motion.span variants={letter} className="wishaLetter">
        w
      </motion.span>
      <motion.span variants={letter} className="wishaLetter">
        i
      </motion.span>
      <motion.span variants={letter} className="wishaLetter">
        s
      </motion.span>
      <motion.span variants={letter} className="wishaLetter">
        h
      </motion.span>
      <motion.span variants={letter} className="wishaLetter">
        a
      </motion.span>
    </motion.div>
  );
};
export default WishaLogoText;
