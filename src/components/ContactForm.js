import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/contact', form)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} />
            <textarea name="message" placeholder="Message" onChange={handleChange}></textarea>
            <button type="submit">Send</button>
        </form>
    );
};

export default ContactForm;
