import React from 'react';
import Header from '../../components/Header/Header';
import SocialMediaLinks from '../../components/contact/SocialMediaLinks';
import OfficeLocations from '../../components/contact/OfficeLocations';
import ContactInfo from '../../components/contact/ContactInfo ';
import ContactForm from '../../components/contact/ContactForm';


const Contact = () => {
    const socialMediaLinks = [
        { title: 'Facebook', url: 'https://www.facebook.com/SulTanVai0' },
        { title: 'Instagram', url: 'https://www.instagram.com/sultanvai0/' },
        { title: 'Telegram', url: 'https://t.me/Sultan_vai' },
        { title: 'LinkedIn', url: 'https://www.linkedin.com/in/muhammed-mehedi/' },
        { title: 'GitHub', url: 'https://github.com/SulTanvai0' },
    ];

    const officeLocations = [
        { city: 'Dhaka', address: '123 Main Street, Dhaka' },
        { city: 'Dhaka', address: '456 Elm Avenue, Dhaka' },
        { city: 'Dhaka', address: '789 Oak Lane, Dhaka' },
    ];
    const contactLocations = [
        {
            address: ' Dhaka, Senbag, Noldia, Islampur',
            phone: '01816456903',
            email: 'MuhammedMehediH@gmail.com',
        },
    ];





    return (
        <div>
            <Header />
            <div className='flex justify-evenly items-center'>
                <div>
                    <ContactInfo contactLocations={contactLocations} />
                    <OfficeLocations locations={officeLocations} />

                </div>
                <ContactForm />
            </div>

            <SocialMediaLinks links={socialMediaLinks} />

        </div>
    );
};

export default Contact;