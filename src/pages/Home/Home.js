import React from 'react';
import { Typography, Box, Grid, Container, Card, CardContent } from '@mui/material';
import { styled } from '@mui/system';
import Layout from '../../components/Layout/Layout';
import FlagIcon from '@mui/icons-material/Flag'; // Bu ikonu kendi tercihinize göre değiştirebilirsiniz.
import GradeIcon from '@mui/icons-material/Grade'; // Bu ikonu kendi tercihinize göre değiştirebilirsiniz.
import CarouselPage from './CarouselPage';


const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%', 
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
}));

const StyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'flex-start',
  padding: '16px',
  '&:last-child': {
    paddingBottom: '16px',
  },
});

const IconTypographyContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '8px',
});

const Home = () => {
  return (
    <Layout>
      <CarouselPage/>

      <Container sx={{ padding: '5%' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <StyledCard>
              <StyledCardContent>
                <IconTypographyContainer>
                  <FlagIcon sx={{ marginRight: '8px', verticalAlign: 'bottom' }} />
                  <Typography variant="h5" fontWeight="bold">
                    Mission
                  </Typography>
                </IconTypographyContainer>
                <Typography variant="body1" gutterBottom textAlign="left">
                  In our society, the importance of reading is indisputable. However, in this age of information we live in, it's not just about reading, but how quickly and effectively we read that holds significant importance. Our mission is to provide the most effective methods for everyone to easily learn and apply this skill.
                </Typography>
              </StyledCardContent>
            </StyledCard>
          </Grid>

          <Grid item xs={12} sm={6}>
            <StyledCard>
              <StyledCardContent>
                <IconTypographyContainer>
                  <GradeIcon sx={{ marginRight: '8px', verticalAlign: 'bottom' }} />
                  <Typography variant="h5" fontWeight="bold">
                    Our Goals
                  </Typography>
                </IconTypographyContainer>
                <Typography variant="body1" gutterBottom textAlign="left">
                  Our goals are to provide the skill of speed reading to people of all ages and backgrounds completely free of charge and at the highest quality. We prioritize having a user-friendly interface for our website, consistently offering the most up-to-date information and practices, and enabling each user to track their individual progress. We believe this skill should not just be theoretical but also provide tangible benefits in everyday life. As we move forward, we are dedicated to shaping a future where knowledge is more accessible and time is used wisely.
                </Typography>
              </StyledCardContent>
            </StyledCard>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Home;

