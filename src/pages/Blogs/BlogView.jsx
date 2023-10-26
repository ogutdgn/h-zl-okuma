import React from 'react';
import { Container, Paper, Typography, CardMedia, Divider, Popover } from '@mui/material';
import AuthorPopover from './AuthorPopover';
import blogsdata from '../Data/blogsdata';
import { useParams } from 'react-router-dom';
import memberdata from "../Data/memberdata";
import Layout from '../../components/Layout/Layout';

const BlogView = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { blogTitle } = useParams();
  const blog = blogsdata.find(b => b.title.toLowerCase().replace(/\s+/g, '-') === blogTitle);

  if (!blog) {
    return <Typography variant="h5">Blog not found.</Typography>;
  }

  const authorInfo = memberdata.find(member => member.name === blog.author);

  return (
    <Layout>
    <Container component="main" sx={{ mt: 2 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h3" gutterBottom>
          {blog.title}
        </Typography>
        <CardMedia
          component="img"
          alt={blog.title}
          height="340"
          image={blog.img}
          sx={{ mb: 2 }}
        />
        <Typography variant="body1" paragraph>
          {blog.description}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="body1" sx={{ mb: 2 }}>
          {blog.content}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography 
          variant="subtitle1" 
          sx={{ mt: 2, textAlign: 'right', '&:hover': { cursor: 'pointer' } }}
          onClick={handleClick}
          aria-describedby={id}
        >
          - {blog.author}
        </Typography>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <AuthorPopover author={authorInfo} />
        </Popover>
      </Paper>
    </Container>
    </Layout>
  );
};

export default BlogView;
