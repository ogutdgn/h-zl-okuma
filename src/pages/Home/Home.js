import React from 'react';
import { Typography, Box, Grid, Container } from '@mui/material';
import { styled } from '@mui/system';
import Layout from '../../components/Layout/Layout';
import libraryImage from "../../assets/imgs/book1.jpeg";
import Carousel from './Carousel';

const CommonStyles = {
  maxWidth: '90%',
  margin: '20px auto',
  borderRadius: '10px',
  overflow: 'hidden',
};

const ImageBackground = styled(Box)({
  ...CommonStyles,
  height: '420px',
  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${libraryImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
  padding: '50px',
  marginBottom: '3%',
});

const Home = () => {
  return (
    <Layout>
      <Container>
        <Box style={{ margin: '3% 0', marginBottom: '5%' }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Carousel />
          </div>
        </Box>
      </Container>


      <Container>
        <ImageBackground>
          <Typography variant="h4" gutterBottom>
            About Us
          </Typography>
          <Typography variant="h6" gutterBottom>
            Serdar and Doan Dreams
          </Typography>
          <Typography variant="body1">
            SwiftReaders' mission is to provide speed reading skills in an accessible and comprehensible manner to anyone, of any age, who wishes to learn. On our website, you can find speed reading techniques, practical exercises, and tips. Additionally, we consistently enrich our platform with new content and updates.
          </Typography>
        </ImageBackground>
      </Container>

      <Box style={{ padding: '10%' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5" gutterBottom fontWeight="bold">
              Mission
            </Typography>
            <Typography variant="body1" gutterBottom>
              In our society, the importance of reading is indisputable. However, in this age of information we live in, it's not just about reading, but how quickly and effectively we read that holds significant importance. Our mission is to provide the most effective methods for everyone to easily learn and apply this skill.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="h5" gutterBottom fontWeight="bold">
              Our Goals
            </Typography>
            <Typography variant="body1" gutterBottom>
              Our goals are to provide the skill of speed reading to people of all ages and backgrounds completely free of charge and at the highest quality. We prioritize having a user-friendly interface for our website, consistently offering the most up-to-date information and practices, and enabling each user to track their individual progress. We believe this skill should not just be theoretical but also provide tangible benefits in everyday life. As we move forward, we are dedicated to shaping a future where knowledge is more accessible and time is used wisely.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default Home;
