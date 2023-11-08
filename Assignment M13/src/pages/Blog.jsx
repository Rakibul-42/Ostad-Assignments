import React from 'react';
import BlogData from '../component/BlogPage/BlogData';
import BlogSidebar from './../component/BlogPage/BlogSidebar';
import '../assets/CSS/BlogPage.css'

const Blog = () => {
    return (
        <div>
            <div className='blog-parent-pages-level'>
            <BlogData/>
            <BlogSidebar/>
            </div>
            
        </div>
    );
};

export default Blog;