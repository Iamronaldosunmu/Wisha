import Rocket from "./Rocket";
import { useState } from "react";
import axios from 'axios';
import Joi from 'joi-browser';

export default function WaitListForm() {
    const [payload, setPayload] = useState({email: ""});
    const [errors, setErrors] = useState("");
    const handleChange = (e) => {
        const email = e.currentTarget.value;
        setPayload({email})
    };
    const schema = {
        email: Joi.string().required().email().label('Your email').min(3)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const apiEndpoint = "http://localhost:4000/api/emails";
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
                setPayload({email: ""});
            } catch (ex) {
                if (ex.response && ex.response.status == 400){
                    alert("You are already on the waitlist");
                }
                console.log(ex);
            }
        }
        
        // If there is an error, a small span must display some red text to signify that there is something wrong with the inpu
        console.log(payload);
    }
    return (
        <form className="waitListForm" onSubmit={handleSubmit}>
            <Rocket />
            <p className="description">Get notified when we launch</p>
            <input className="formInput" placeholder="Your email" value={payload.email} onChange={handleChange}/>
            {errors && <span className="errorText">{errors}</span>}
            <button className="submitButton" type="submit">Join the waitlist</button>
        </form>
    );
}
