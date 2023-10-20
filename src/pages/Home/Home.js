  import React from 'react';
  import { Typography, Box, Grid } from '@mui/material';
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
  });

  const Home = () => {
    return (
      <Layout>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Carousel />
        </div>
        <ImageBackground>
          <Typography variant="h4" gutterBottom>
            About Us
          </Typography>
          <Typography variant="h6" gutterBottom>
            Emir and his dream team doing outstanding job...
          </Typography>
          <Typography variant="body1">
            StemWise is where young minds embark on a journey of innovation. Through fun programming lessons and mentorship, we’re nurturing the next generation as problem solvers, dreamers, and trailblazers in the world of STEM for a brighter, smarter future.
          </Typography>
        </ImageBackground>

        <Box style={{ padding: '10%' }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h5" gutterBottom fontWeight="bold">
                Mission
              </Typography>
              <Typography variant="body1" gutterBottom>
                Our mission at StemWise is to ignite a lifelong passion for learning, coding, and STEM in every child we touch, fostering a world where innovation knows no boundaries.
              </Typography>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Typography variant="h5" gutterBottom fontWeight="bold">
                Our Goals
              </Typography>
              <Typography variant="body1" gutterBottom>
                Our goal at StemWise is to inspire and equip the next generation with essential STEM skills, unlocking a world of limitless opportunities.
              </Typography>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Typography variant="h5" gutterBottom fontWeight="bold">
                The Company
              </Typography>
              <Typography variant="body1">
                Stemwise is a non-profit organization that is passionate about mentoring children and innovating them for STEM.
              </Typography>
            </Grid>
          </Grid>
        </Box>


      </Layout>
    );
  };

  export default Home;
