import NavBar from "./NavBar";
import { motion } from "framer-motion";
import GiftSvg from "./giftSvg";
import Underline from '../images/underline.svg';
import Rocket from './Rocket';
import WaitListForm from "./WaitListForm";
import finger from '../images/hand_one_finger.png';

const Home = (props) => {
  return (
    <motion.div className="homePage">
      <NavBar history={props.history} />
      <img src={finger} className="finger"/>
      <div className="mainContainer">
        <div className="textWithButtonContainer">
          <h1 className="header">Gifting made <span className="gradientText">easier</span></h1>
          <div className="text">Wisha makes it easy for you to share your  wishlists and recieve gifts in the form of money from your friends, family, followers, fans with only one link </div>
          <button className="waitlistButton">Join the waitlist</button>
        </div>
        <div className="giftContainer">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          exit={{ opacity: 0 }}
          className="blur"
        >
        </motion.div>
        <GiftSvg />
        </div>
      </div>
      <WaitListForm />
    </motion.div>
  );
};
export default Home;
