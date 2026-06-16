import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import BlogList from '../../components/Blog/BlogList';
import BlogAboutCompany from '../../components/Blog/BlogAboutCompany';
import AuthorBio from '../../components/Blog/AuthorBio';


const Blog = () => {
    const blogPosts = [
        {
          id: 1,
          title: 'The Art of Web Development',
          content: 'In this blog post, we explore the creative and technical aspects of web development, from design to coding. Learn about the latest web development tools, frameworks, and best practices to create stunning and user-friendly websites.',
        },
        {
          id: 2,
          title: 'Mastering UI/UX Design',
          content: 'Discover the principles and practices of creating user-friendly and visually appealing user interfaces and experiences. Dive into the world of user-centered design, usability, and interaction design for creating outstanding digital products.',
        },
        {
          id: 3,
          title: 'The Power of Content Marketing',
          content: 'Explore how content marketing can drive engagement, brand awareness, and conversions for your business. Learn about content strategy, SEO optimization, and effective content promotion techniques to boost your online presence.',
        },
        {
          id: 4,
          title: 'Optimizing SEO for Better Rankings',
          content: "Discover the essential SEO techniques and practices to improve your website's search engine rankings. Learn about on-page and off-page SEO, keyword research, and the latest trends in search engine optimization.",
        },
      ];
      
      const authorInfo = {
        name: 'Muhammed Mehedi Hasan',
        profileImage: 'https://muhammed-mehedi-hasan.netlify.app/static/media/sultan2.0bd1deef425577b102c2.jpg',
        bio: 'I was born and raised in a small rural village in Noakhali, Bangladesh where technological advancements, till this day hasn\'t fully reached. Eager to learn more about the industry that is becoming a vast phenomenon, I dipped my toes into the tech world and became fully immersed in what it has to offer. I want to continue refining my skills and become immersed with the right company.',
        website: 'https://muhammed-mehedi-hasan.netlify.app/',
      };
      

    return (
        <div>
            <Header/>
            <BlogList blogPosts={blogPosts}/>
            <BlogAboutCompany/>
            <AuthorBio/>
        </div>
    );
};

export default Blog;