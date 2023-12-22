import React from 'react';
import { Typography, Box, Grid, Container } from '@mui/material';
import { styled } from '@mui/system';
import Layout from '../../components/Layout/Layout';
import libraryImage from "../../assets/imgs/book1.jpeg";
import Carousel from './Carousel';
import axios from 'axios';

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
  const options = {
    method: 'GET',
    url: 'https://api.shopier.com/v1/products',
    headers: {
      accept: 'application/json',
      authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJjZjI3MDhlZmJhODQxMzUzNjc1YjExYWEwODNlNDA3NyIsImp0aSI6IjU4ODdkY2JjOTZiZDExYTU5ZWM3NmE3Mzk3MmQ3OTIxYjI5ZmNlZDBkZjczOGM3OTQ3M2VlMTE3ODI0MjQzMzYwMGRmYmNiYTcyOTg4NjJjNjU3YjNmMTFjZGYzZTIzNzI3YWMxMWM5MWVhODFhYWExYTcyNWVjMWM3MmE0OTgyZjA0MDRiNTExZTkwNmIyYTM1MzU5M2E3OTM4NGMzYTkiLCJpYXQiOjE3MDMwNzE0ODQsIm5iZiI6MTcwMzA3MTQ4NCwiZXhwIjoxODYwODU2MjQ0LCJzdWIiOiIxNjE5ODcxIiwic2NvcGVzIjpbIm9yZGVyczpyZWFkIiwib3JkZXJzOndyaXRlIiwicHJvZHVjdHM6cmVhZCIsInByb2R1Y3RzOndyaXRlIiwic2hpcHBpbmdzOnJlYWQiLCJzaGlwcGluZ3M6d3JpdGUiLCJkaXNjb3VudHM6cmVhZCIsImRpc2NvdW50czp3cml0ZSIsInBheW91dHM6cmVhZCIsInJlZnVuZHM6cmVhZCIsInJlZnVuZHM6d3JpdGUiLCJzaG9wOnJlYWQiLCJzaG9wOndyaXRlIl19.M6I46TaWDSobY_9ceR9ixNKH1UTDMYran2fTvUVMw022fvqfhMzwaL5z419saySTzlEmsOE87RWfceMwE2oPKrRQEmZrsWp5tXqmUoXJ-g2uf8n47fGCvQN0pOKDTn3l24WCDnxOaxMcaR5bR7iHHI7cSKQ6NRGRwlUmZ7878ZfS_y3G3fyQTinhXicOvFBlCf_wrKWpLlLFVrsKtBgmoYcIG1dtgwQbc5tqvxU7laodFyhuaawqCscdjGCR1KOSBt47FT_2aN8lNSBfpMYLqOIM7vr9dVsE_cCwr4JrQULRdPeJc0wxY6zfCmLW7TMTO-EqJA31jbVpneAyFR6qpw'
    }
  };
  
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
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
