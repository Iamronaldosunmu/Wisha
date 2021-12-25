import NavBar from "./NavBar";
import { motion } from "framer-motion";
import GiftSvg from "./giftSvg";
import Underline from '../images/underline.svg';
import Rocket from './Rocket';
import WaitListForm from "./WaitListForm";
import finger from '../images/hand_one_finger.png';
import Header from "./Header";

const Home = (props) => {
  return (
    <motion.div className="homePage">
      <motion.img src={finger} className="finger" initial={{y:-300}} animate={{y: 0}} transition={{delay: 5.2, type: 'spring', stiffness: 60, dampening: 4}}/>
      <NavBar history={props.history} />
      <motion.div 
        className="mainContainer"
        exit={{
          opacity: 0
        }}
        >
        <div className="textWithButtonContainer">
          <Header />
          <motion.div className="text" initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}} transition={{duration: 0.85, delay: 6.7, ease: "anticipate"}}>Create wishlists and recieve money from your fans, followers and loved ones with the click of a link 😜</motion.div>
          <motion.button className="waitlistButton" onClick={() => document.querySelector('#waitlist').scrollIntoView({   behavior: 'smooth' })} initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 7.8, duration: 0.5}}>Join wisha</motion.button>
        </div>
        <div className="giftContainer">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], scale: [1, 0.9, 1, 0.9, 1, 0.9, 1, 0.9, 1, 0.9, 1, 0.9, 1, 0.9, 1, 0.9, 1, 0.9, 1, 0.9, 1, 0.9, 1, 0.9,1, 0.9, 1, 0.9, 1, 0.9, 1, 0.9, 1, 0.9, 1, 0.9,1, 0.9, 1, 0.9, 1, 0.9, 1, 0.9, 1, 0.9, 1, 0.9,] }}
          transition={{ delay: 8.5, duration: 35 }}
          className="blur"
        >
        </motion.div>
        <GiftSvg />
        </div>
      </motion.div>
      <WaitListForm />
    </motion.div>
  );
};
export default Home;
