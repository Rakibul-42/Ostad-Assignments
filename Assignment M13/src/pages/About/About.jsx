import React from 'react';
import Header from '../../components/Header/Header';
import AboutUs from '../../components/About/AboutUs';
import TeamMembers from '../../components/About/TeamMembers';
import AwardsAndRecognition from '../../components/About/AwardsAndRecognition';
import CompanyHistory from '../../components/About/CompanyHistory ';

const About = () => {
    const aboutText = "We are a passionate team of professionals dedicated to delivering high-quality solutions. Our mission is to exceed our clients' expectations by providing innovative and cost-effective services. With years of experience and a commitment to excellence, we aim to make a positive impact on every project we undertake. Our core values include integrity, collaboration, and customer-centricity. Let us be your trusted partner in achieving your goals.";

    const employeeData = [
        {
            id: 1,
            name: 'John Smith',
            position: 'Software Engineer',
            project: 'E-commerce Site',
        },
        {
            id: 2,
            name: 'Emily Chen',
            position: 'UI/UX Designer',
            project: 'Web Development',
        },
        {
            id: 3,
            name: 'David Kim',
            position: 'Mobile App Developer',
            project: 'Mobile App Development',
        },
        {
            id: 4,
            name: 'Alicia Patel',
            position: 'Digital Marketer',
            project: 'Digital Marketing Campaign',
        },
        {
            id: 5,
            name: 'Liam Tan',
            position: 'Frontend Developer',
            project: 'News Portal',
        },
        {
            id: 6,
            name: 'Sophia Wu',
            position: 'Full Stack Developer',
            project: 'BIM-Calculator',
        },
        {
            id: 7,
            name: 'Oliver Gupta',
            position: 'UI/UX Designer',
            project: 'E-commerce Site',
        },
        {
            id: 8,
            name: 'Mia Khan',
            position: 'Software Engineer',
            project: 'Doctor\'s Portal',
        },
        {
            id: 9,
            name: 'Noah Lee',
            position: 'Mobile App Developer',
            project: 'Mobile App Development',
        },
        {
            id: 10,
            name: 'Emma Sharma',
            position: 'Digital Marketer',
            project: 'Digital Marketing Campaign',
        },

    ];

    const awardsData = [
        'Best Design Award 2022',
        'Innovation Excellence Award 2021',
        'Outstanding Service Provider 2020',
        'Top Employer Award 2018',
        'Excellence in Customer Satisfaction 2017',
        'Industry Leadership Award 2016',
        'Best Startup of the Year 2015',
    ];

    const historyText = `Our journey began in 2010 with a small team of passionate individuals who shared a common vision. Over the years, we have grown into a leading provider of innovative solutions in various industries.

In 2012, we expanded our services to include mobile app development, setting the stage for our foray into the digital world. By 2015, we had launched our first e-commerce platform, showcasing our commitment to excellence in online retail.

In 2017, our dedication to customer satisfaction led to the development of a user-friendly doctor's portal, simplifying healthcare management for both patients and practitioners.

Throughout our journey, we have received numerous awards and recognition for our outstanding work. We are excited about the future and look forward to many more years of success and growth.`;





    return (
        <div>
            <Header />
            <AboutUs aboutText={aboutText} />
            <TeamMembers team={employeeData} />
            <AwardsAndRecognition awards={awardsData} />
            <CompanyHistory historyText={historyText}/>
        </div>
    );
};

export default About;