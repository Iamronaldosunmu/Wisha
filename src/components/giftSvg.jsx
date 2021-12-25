import * as React from "react";
import {motion} from 'framer-motion';
const GiftSvg = (props) => (
  <motion.svg
    width={222}
    height={228}
    className="giftSvg"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
    initial={{opacity:0, scale: 0.6}}
    animate={{opacity: 1, scale: 1}}
    transition={{delay: 8.5, duration: 0.6}}
  >
    <path fill="url(#a)" d="M0 0h222v228H0z" />
    <defs>
      <pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#b" transform="matrix(.00103 0 0 .00103 -.014 0)" />
      </pattern>
      <image
        id="b"
        width={1000}
        height={1000}
      />
    </defs>
  </motion.svg>
);
export default GiftSvg;