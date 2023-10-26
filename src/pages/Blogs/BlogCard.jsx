import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/blogs/${blog.title.toLowerCase().replace(/\s+/g, '-')}`);
  };

  const isLongText = (text, threshold = 50) => text.length > threshold;

  const titleStyle = isLongText(blog.title) ? { fontSize: '1.1rem' } : {};
  const descriptionStyle = isLongText(blog.description) ? { fontSize: '0.8rem' } : {};

  return (
    <Card sx={{ maxWidth: 345, height: "275px", m: 2, transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }}>
      <CardActionArea onClick={handleCardClick}>
        <CardMedia
          component="img"
          height="140"
          image={blog.img}
          alt={blog.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={titleStyle}>
            {blog.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={descriptionStyle}>
            {blog.description}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Author: {blog.author}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BlogCard;
