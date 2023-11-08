import React from 'react';
import FirstProjectCom from '../component/PojectPage/FirstProjectCom';
import '../assets/CSS/ProjectPage.css'
import SecondProjectCom from '../component/PojectPage/SecondProjectCom';
import ThirdProjectCom from '../component/PojectPage/ThirdProjectCom';
import FourthProjectCom from '../component/PojectPage/FourthProjectCom';

const Project = () => {
    return (
        <div >
            <div className='project-parent-pages-level'>
                <FirstProjectCom />
                <SecondProjectCom/>
            </div>
            <div className='project-parent-pages-level'>
                <ThirdProjectCom/>
                <FourthProjectCom/>
            </div>
        </div>
    );
};

export default Project;