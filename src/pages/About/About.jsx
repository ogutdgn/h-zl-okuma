import React from 'react';
import {
  Box, Typography, Avatar, IconButton
} from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import Layout from '../../components/Layout/Layout';

const teamMembers = [
  { name: 'Tom Cruise', role: 'Full Stack Developer', img: './man.jpg' },
  { name: 'David Wornar', role: 'Front End Developer', img: './man.jpg' },
  { name: 'Vin Diesel', role: 'Back End Developer', img: './man.jpg' }
];

const TeamMemberCard = ({ name, role, img }) => {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        borderRadius: '50%',
        m: 2,
        p: 3,
        width: 220,
        height: 220,
        transition: 'all .4s',
        '&:hover': {
          borderRadius: '10%',
          height: 260,
        }
      }}
    >
      <Avatar
        src={img}
        alt={name}
        sx={{
          width: '100%',
          height: '100%',
          transition: 'all .4s',
          borderRadius: '50%',
          '&:hover': {
            transform: 'translateY(-70px)',
            borderRadius: '10%',
          }
        }}
      />
      <Box
        sx={{
          textAlign: 'center',
          transform: 'translateY(-90px)',
          opacity: 0,
          transition: 'all .5s',
          '&:hover': {
            opacity: 1,
          }
        }}
      >
        <Typography variant="h6" component="div" color="primary">
          {name}
        </Typography>
        <Typography variant="subtitle1" component="div">
          {role}
        </Typography>
        <Box>
          <IconButton>
            <Facebook color="action" />
          </IconButton>
          <IconButton>
            <Twitter color="action" />
          </IconButton>
          <IconButton>
            <Instagram color="action" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: '#0c52a1'
        }}
      >
        {teamMembers.map(member => (
          <TeamMemberCard key={member.name} {...member} />
        ))}
      </Box>
    </Layout>
  );
};

export default About;
