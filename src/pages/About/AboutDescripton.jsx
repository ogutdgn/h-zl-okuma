import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import img1 from "../../assets/imgs/book1.jpeg";
// import img2 from "../../assets/imgs/book2.jpeg";

const AboutDescription = () => {
  return (
    <Container maxWidth="lg">
      <Box p={2}>

        <Grid container spacing={3} alignItems="center" style={{ marginBottom: '10em', marginTop: "1em" }}>
          <Grid item xs={12} md={6}>
            <img
              src={img1} 
              alt="Coding visuals"
              style={{ width: '100%', borderRadius: '10px' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom style={{ marginBottom: '1em' }}>
              Who we are?
            </Typography>
            <Typography variant="h6" paragraph>
              We, Doğan and Serdar, are two individuals passionate about speed reading. Both of us recognized the value of reading in our lives at an early age and sought various methods to enhance this skill. However, noticing the lack of quality educational materials on this subject, we decided to establish this website to fill that gap.
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Typography variant="h3" gutterBottom style={{ marginBottom: '1em' }}>
              Our Vision
            </Typography>
            <Typography variant="h6" paragraph>
              SwiftReaders' mission is to provide speed reading skills in an accessible and comprehensible manner to anyone, of any age, who wishes to learn. On our website, you can find speed reading techniques, practical exercises, and tips. Additionally, we consistently enrich our platform with new content and updates.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <img
              src={img1}
              alt="Code snippet"
              style={{ width: '100%', borderRadius: '10px' }}
            />
          </Grid>
        </Grid>

      </Box>
    </Container>
  );
}

export default AboutDescription;
