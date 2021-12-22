import { motion } from "framer-motion";
export default function DesktopNav(props) {
  return (
    <motion.nav
      className="desktopNav"
      initial={{
        y: -80
      }}
      animate={{
        y: 0,
        transition: {
          delay: 0.3,
          duration: 0.4
        }
      }}
    >
      <ul>
        <li>Home</li>
        <li>Join</li>
        <li>Follow us</li>
      </ul>
    </motion.nav>
  );
}
