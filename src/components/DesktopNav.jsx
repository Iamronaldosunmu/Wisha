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
          delay: 0.9,
          duration: 0.8
        }
      }}
    >
      <ul>
        <li onClick={() => document.querySelector('#waitlist').scrollIntoView({   behavior: 'smooth' })}>Join</li>
        <li onClick={() => alert("Please use a VPN if you are from Nigeria")}><a className="externalLink" href="https://twitter.com/WishaApp">
          Follow us
          </a></li>
      </ul>
    </motion.nav>
  );
}
