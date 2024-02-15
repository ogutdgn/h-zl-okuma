import React from 'react';
import BlogsList from './BlogsList';
import Layout from '../../components/Layout/Layout';

const BlogsPage = () => {
  return (
    <Layout>
      <div style={{ paddingTop: "15vh" }} >
        <BlogsList />
      </div>
    </Layout>
  );
};

export default BlogsPage;
