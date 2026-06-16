import React from 'react';

const ServiceDetails = ({ service }) => {
  const serviceData = {
    'Web Development': {
      description: 'We offer professional web development services to create stunning websites tailored to your needs.',
      features: ['Custom web design', 'Responsive layouts', 'E-commerce integration', 'SEO optimization'],
    },
    'Mobile App Development': {
      description: 'Our mobile app development team can build feature-rich apps for iOS and Android platforms.',
      features: ['Cross-platform development', 'User-friendly interfaces', 'App store submission', 'Continuous support'],
    },
    'UI/UX Design': {
      description: 'Our UI/UX design services focus on creating user-friendly and visually appealing interfaces.',
      features: ['Wireframing and prototyping', 'User research', 'Mobile and web design', 'Interaction design'],
    },
    'Digital Marketing': {
      description: 'Boost your online presence with our digital marketing services, including SEO and social media marketing.',
      features: ['Search engine optimization', 'Social media management', 'Content marketing', 'PPC advertising'],
    },
  };

  const details = serviceData[service];

  return (
    <div className="bg-white p-4 rounded shadow-md ">
      <h2 className="text-2xl font-bold mb-4">{service}</h2>
      <p className="text-gray-700 mb-4">{details?.description}</p>
      <h3 className="text-lg font-bold mb-2">Key Features:</h3>
      <ul>
        {details.features.map((feature, index) => (
          <li key={index} className="text-gray-700">{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceDetails;
