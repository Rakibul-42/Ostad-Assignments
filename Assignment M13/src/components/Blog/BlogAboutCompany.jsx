import React from 'react';

const BlogAboutCompany = () => {
  return (
    <div>
      <div className="tooltip tooltip-open tooltip-success" data-tip="click to see about company">
      <details className="collapse bg-base-200">
        <summary className="collapse-title text-xl font-medium">About our Company </summary>
        <div className="collapse-content ">
          <p>Our journey began in 2010 with a small team of passionate individuals who shared a common vision. Over the years, we have grown into a leading provider of innovative solutions in various industries.In 2012, we expanded our services to include mobile app development, setting the stage for our foray into the digital world. By 2015, we had launched our first e-commerce platform, showcasing our commitment to excellence in online retail.In 2017, our dedication to customer satisfaction led to the development of a user-friendly doctor's portal, simplifying healthcare management for both patients and practitioners.Throughout our journey, we have received numerous awards and recognition for our outstanding work. We are excited about the future and look forward to many more years of success and growth.</p>
        </div>
      </details>
      </div>
    </div>
  );
};

export default BlogAboutCompany;