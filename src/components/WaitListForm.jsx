import Rocket from "./Rocket";
import { useState } from "react";
import axios from 'axios';
import Joi from 'joi-browser';
import {motion, useTransform, useViewportScroll} from 'framer-motion';

export default function WaitListForm() {
    const [successfulSignUp, setSuccessfulSignUp] = useState(false);
    const [payload, setPayload] = useState({email: ""});
    const [errors, setErrors] = useState("");
    const {scrollYProgress} = useViewportScroll();
    const opacity = useTransform(scrollYProgress, [0.3, 1],  [0, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);
    const handleChange = (e) => {
        const email = e.currentTarget.value.trim();
        setPayload({email})
    };
    const schema = {
        email: Joi.string().required().email().label('Your email').min(3)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const apiEndpoint = "https://wishaapp.herokuapp.com/api/emails";
        const options = {abortEarly: true};
        const {error} = Joi.validate(payload, schema);
        if (error) {
            setErrors(error.details[0].message);
            console.log(errors);
        }
        else {
            setErrors("");
            try {
                const response = await axios.post(apiEndpoint, payload);
                alert('You have successfully been added to the wait-list!');
                setSuccessfulSignUp(true);
                setPayload({email: ""});
            } catch (ex) {
                if (ex.response && ex.response.status == 400){
                    alert("You are already on the waitlist");
                    setSuccessfulSignUp(true);
                }
                else {
                    alert("Something went wrong. Check your internet connection")
                }
                console.log(ex);
            }
        }
        
        // If there is an error, a small span must display some red text to signify that there is something wrong with the inpu
        console.log(payload);
    }
    return (
        <motion.form 
          className="waitListForm" 
          onSubmit={handleSubmit}
          style={{opacity: opacity}}
          animate={{y: y}}  
          id="waitlist"
        >
            {!successfulSignUp &&
                <>
                    <Rocket />
                    <p className="description">Get notified when we launch</p>
                    <input className="formInput" placeholder="Your email" value={payload.email} onChange={handleChange}/>
                    {errors && <span className="errorText">{errors}</span>}
                    <button className="submitButton" type="submit">Join the waitlist</button>
                </>
            }
            {successfulSignUp && <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_ucUcKt.json" background="transparent"  speed="1"  style={{width: 250, height: 250}}  loop  autoplay></lottie-player>}
            {successfulSignUp && <h1 className="successMessage">You are on the wait-list</h1>}
        </motion.form>
    );
}
