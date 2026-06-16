import React, { useState } from 'react';
import ProjectDetail from './ProjectDetail';
import ProjectStats from './ProjectStatus';
import ProjectGallery from './ProjectGallery';


const ProjectList = ({ projects }) => {
    const projectData = [
        {
            id: 1,
            title: 'BMI-Calculator',
            description: 'BIM-Calculator is a tool for architects and engineers to estimate project costs and timelines based on Building Information Modeling (BIM) data.',
            features: [
                'Real-time cost estimation',
                'Timeline prediction',
                'BIM data integration',
                'Detailed project reports',
            ],
        },
        {
            id: 2,
            title: 'News Portal',
            description: 'The News Portal is a platform for publishing and reading news articles from various categories and sources.',
            features: [
                'User-friendly news browsing',
                'Category filters',
                'Author profiles',
                'Comment and share articles',
            ],
        },
        {
            id: 3,
            title: 'E-Commerce Site',
            description: 'The E-Commerce Site is an online store where users can browse and purchase a wide range of products from different sellers.',
            features: [
                'Product catalog with categories',
                'Shopping cart and checkout',
                'User reviews and ratings',
                'Seller dashboards',
            ],
        },
        {
            id: 4,
            title: "Doctor's Portal",
            description: "The Doctor's Portal is a platform for healthcare professionals to manage appointments, patient records, and medical information.",
            features: [
                'Appointment scheduling',
                'Patient record management',
                'Prescription and medical history',
                'Secure communication with patients',
            ],
        },
    ];
    const [data, setData] = useState(projectData[0])
    const projectStats = [
        {
            id: 1,
            project: 'BMI-Calculator',
            duration: '6 months',
            budget: '$250,000',
            milestones: ['Concept design', 'Data integration', 'Cost estimation', 'Final report'],
            clientSatisfaction: '90% satisfaction',
            roi: '150% ROI',
        },
        {
            id: 2,
            project: 'News Portal',
            duration: '8 months',
            budget: '$150,000',
            milestones: ['Frontend development', 'Backend development', 'Launch', 'User feedback'],
            clientSatisfaction: '85% satisfaction',
            roi: '120% ROI',
        },
        {
            id: 3,
            project: 'E-Commerce Site',
            duration: '10 months',
            budget: '$300,000',
            milestones: ['Product catalog setup', 'Marketing campaigns', 'Sales growth', 'Customer reviews'],
            clientSatisfaction: '88% satisfaction',
            roi: '180% ROI',
        },
        {
            id: 4,
            project: "Doctor's Portal",
            duration: '12 months',
            budget: '$200,000',
            milestones: ['Appointment system', 'Patient records', 'Security enhancements', 'User training'],
            clientSatisfaction: '92% satisfaction',
            roi: '160% ROI',
        },
    ];

    const [status, setStatus] = useState(projectStats[0]);

    const projectImage = [
        {
            id: 1,
            name: "BMI-Calculator"
            , image: 'https://muhammed-mehedi-hasan.netlify.app/Project-img/Hello-Bmi.jpg'
        },
        {
            id: 2,
            name: "News-Portal",
            image: "https://muhammed-mehedi-hasan.netlify.app/Project-img/News-Potral.jpg"
        }
        , {
            id: 3,
            name: 'E-Commerce Site',
            image: 'https://muhammed-mehedi-hasan.netlify.app/Project-img/Ema-Jhon.jpg'
        },
        {
            id: 4,
            name: 'Doctors Portal',
            image: 'https://images.remotehub.com/f5f0fa9e97b711ed8e648ad19d072a4d/original_thumb/8e5f1183.jpg?version=1674105192'
        }
    ]

    const [image, setImage] = useState(projectImage[0]);

    const setProjectData = (index) => {
        setData(projectData[index])
        setStatus(projectStats[index])
        setImage(projectImage[index])
    }



    return (
        <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4">Projects</h2>
            <div className='flex justify-around'>
                {projects.map((project, index) => (
                    <button onClick={() => { setProjectData(index) }} key={index} className=" hover:underline mb-2 btn">
                        {project.title}
                    </button>
                ))}
            </div>
            <div className='mx-auto'>

                <ProjectDetail data={data} />
                <ProjectGallery images={image} />
                <ProjectStats projectStats={status} />


            </div>
        </div>
    );
};

export default ProjectList;
