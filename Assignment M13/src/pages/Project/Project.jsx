import React, { useEffect, useRef, useState } from 'react';
import Header from '../../components/Header/Header';
import ProjectList from '../../components/project/ProjectsList';

const Project = () => {
    const projects = [
        { id: 1, title: 'BMI-Calculator' },
        { id: 2, title: 'News-Portal' },
        { id: 3, title: 'E-Commerce Site' },
        { id: 4, title: 'Doctors Portal' },
    ];



    return (
        <div>
            <Header />
            <ProjectList projects={projects} />

        </div>
    );
};

export default Project;
