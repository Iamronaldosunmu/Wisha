import { motion } from "framer-motion";
const NavButton = (props) => {
  const handleClick = () => {
    props.history.push("/nav");
  };
  return (
    <motion.button
      className="navButton"
      onClick={handleClick}
      initial={{}}
      animate={{
        transition: {
          delay: 0.3,
          duration: 0.4
        }
      }}
    >
      <motion.div
        className="navRect"
        exit={{
          rotate: -45,
          y: 11,
          transition: {
            delay: 0.5,
            duration: 0.5
          }
        }}
      ></motion.div>
      <motion.div
        className="navRect"
        exit={{
          width: 0,
          opacity: 0,
          transition: {
            duration: 0.5
          }
        }}
      ></motion.div>
      <motion.div
        className="navRect"
        exit={{
          width: 40,
          rotate: 45,
          y: -10,
          transition: {
            delay: 0.5,
            duration: 0.5
          }
        }}
      ></motion.div>
    </motion.button>
  );
};
export default NavButton;
