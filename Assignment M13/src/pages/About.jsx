import React from 'react';
import AboutContent from '../component/AboutPage/AboutContent';
import AboutHeader from '../component/AboutPage/AboutHeader';
import AboutMission from '../component/AboutPage/AboutMission';
import AboutTeam from '../component/AboutPage/AboutTeam';
import '../assets/CSS/AboutPage.css'

const About = () => {
    return (
        <div className='about-parent-pages-level'>
            <AboutHeader/>
            <AboutContent/>
            <AboutTeam/>
            <AboutMission/>
        </div>
    );
};

export default About;