import { useState, useRef, useEffect } from "react";
import { Layout } from "@/components/layout";
import Background from "@/components/HomeBackground";
import anime from 'animejs'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const Form = () => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    // 
}




const EmailForm = () => {


    return (
        <Layout>
            
            <h1>Send a Letter</h1>
            
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" />
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message"></textarea>
                <button type="submit">Send</button>
            </form>
        </Layout>
    )
}

export default EmailForm;