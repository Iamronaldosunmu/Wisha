import { motion } from "framer-motion";
export default function NavScreen(props) {
  const handleClick = () => {
    props.history.push("/home");
  };
  const formRedirect = () => {
    props.history.push('/home');
    setTimeout(() => document.querySelector('#waitlist').scrollIntoView({behavior: 'smooth'}), 3000)
    
  }
  const navLinkContainerVariant = {
    animate: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.15
      }
    },
    initial: {},
    exit: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.15,
        staggerDirection: -1
      }
    }
  };
  const navLinkVariant = {
    initial: {
      y: 150,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    exit: {
      y: 150,
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeIn"
      }
    }
  };
  return (
    <>
      <div className="navBarContainer">
        <button className="navButton" onClick={handleClick}>
          <motion.div
            className="navRect"
            initial={{
              rotate: -45,
              y: 11
            }}
            exit={{
              rotate: 0,
              y: 0,
              transition: {
                duration: 0.5
              }
            }}
          ></motion.div>
          <motion.div
            className="navRect"
            initial={{
              width: 0,
              opacity: 0
            }}
            exit={{
              width: 27.1,
              opacity: 1,
              transition: {
                delay: 0.5,
                duration: 0.5
              }
            }}
          ></motion.div>
          <motion.div
            className="navRect"
            initial={{
              width: 40,
              rotate: 45,
              y: -10
            }}
            exit={{
              width: 14.9,
              rotate: 0,
              y: 0,
              transition: {
                duration: 0.5
              }
            }}
          ></motion.div>
        </button>
      </div>
      {/* Section for the nav links */}
      <motion.ul
        variants={navLinkContainerVariant}
        animate="animate"
        initial="initial"
        exit="exit"
        className="navLinkSection"
      >
        <motion.li variants={navLinkVariant} onClick={handleClick}>Home</motion.li>
        <motion.li variants={navLinkVariant} onClick={formRedirect}>Join</motion.li>
        <motion.li onClick={() => alert("Please use a VPN if you are from Nigeria")}variants={navLinkVariant}><a className="externalLink"href="https://twitter.com/WishaApp">Follow us</a></motion.li>
      </motion.ul>
    </>
  );
}
