import NavBar from "./NavBar";
import { motion } from "framer-motion";
import GiftSvg from "./giftSvg";
import Underline from '../images/underline.svg';
import Rocket from './Rocket';
import WaitListForm from "./WaitListForm";

const Home = (props) => {
  return (
    <motion.div>
      <NavBar history={props.history} />
      <div className="header">Gifting made <span className="gradientText">easier</span>
      {/* <Underline /> */}
      </div>
      <div className="text">Wisha makes it easy for you to share your  wishlists and recieve gifts and money from your friends, family, followers, fans with only one link </div>
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
      {/* <Rocket /> */}
      <WaitListForm />
    </motion.div>
  );
};
export default Home;
