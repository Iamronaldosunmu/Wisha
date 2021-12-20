import Rocket from "./Rocket";
import { useState } from "react";
// import axios from 'axios';

export default function WaitListForm() {
    const [payload, setPayload] = useState({email: ""});
    const handleChange = (e) => {
        const email = e.currentTarget.value;
        setPayload({email})
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(payload);
    }
    return (
        <form className="waitListForm" onSubmit={handleSubmit}>
            <Rocket />
            <p className="description">Get notified when we launch</p>
            <input className="formInput" placeholder="Your email" value={payload.email} onChange={handleChange}/>
            <button className="submitButton" type="submit">Join the waitlist</button>
        </form>
    );
}
