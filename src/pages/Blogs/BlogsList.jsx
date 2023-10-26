import React from 'react';
import BlogCard from './BlogCard';
import { Box } from '@mui/material';
import blogsdata from '../Data/blogsdata';

const BlogsList = () => {
  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center">
      {blogsdata.map(blog => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </Box>
  );
};

export default BlogsList;
