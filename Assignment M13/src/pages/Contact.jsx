import React from 'react';
import ContactAddress from '../component/ContactPage/ContactAddress';
import ContactForm from '../component/ContactPage/ContactForm';
import '../assets/CSS/ContactPage.css'
import ContactMap from '../component/ContactPage/ContactMap';

const Contact = () => {
    return (
        <div className='contact-parent-pages-level'>
            <h1>Contact Us</h1>
            <ContactForm/>
            <ContactAddress/>
            <ContactMap/>
        </div>
    );
};

export default Contact;