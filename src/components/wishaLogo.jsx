import PlainBlackLogo from "./svgviewer-react-output1";
import { useState } from "react";
import { motion } from "framer-motion";
import ColouredLogo from "./svgviewer-react-output";
import WishaLogoText from "./wishaLogoText";
export default function Logo(props) {
  const [startAnimation, setStartAnimation] = useState(false);
  return (
    <motion.div
      exit={{
        opacity: 0
      }}
      className="wishaLogoContainer"
    >
      <ColouredLogo
        setStartAnimation={setStartAnimation}
        history={props.history}
      />
      <WishaLogoText startAnimation={startAnimation} history={props.history} />
    </motion.div>
  );
}
