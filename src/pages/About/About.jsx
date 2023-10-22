import React from 'react';
import {
  Avatar,
  Card,
  Typography,
  CardActions,
  IconButton,
  Grid,
  Box
} from '@mui/material';
import { LinkedIn, MailOutline } from '@mui/icons-material';
import Layout from '../../components/Layout/Layout';
import dogan from "../../assets/teamMembers/dogan.jpeg";
import serdar from "../../assets/teamMembers/serdar.jpeg";

const socialIconComponents = {
  LinkedIn,
  MailOutline,
};

const ProfileCard = ({ user }) => {
  const isCoFounder = user.title.includes("Co-Founder");
  const isMobile = window.innerWidth <= 600;

  return (
    <Card sx={{ px: 2, py: 3 }}>
      <Box display={isMobile ? 'block' : (isCoFounder ? 'flex' : 'block')}>
        <Avatar
          alt={user.name}
          src={user.image}
          sx={{
            width: 160,
            height: 160,
            m: 2,
            margin: { xs: '0 auto', sm: '0 auto' },  // Adjusted margin for mobile view
            mt: { xs: 0, sm: 2 }
          }}
        />
        <Box flexGrow={1} p={2} display="flex" flexDirection="column" justifyContent="space-between">
        <Typography 
            variant="h6" 
            align={isMobile ? 'center' : (isCoFounder ? 'right' : 'center')} // Modified here
          >
            {user.name}
          </Typography>

          {user.title.split(' - ').map((role, index) => (
            <Typography 
              key={index}
              variant="body2" 
              color="textSecondary" 
              fontWeight="bold"
              align={isMobile ? 'center' : (isCoFounder ? 'right' : 'center')}  // Modified here
            >
              {role}
            </Typography>
          ))}

          <CardActions 
            sx={{ 
              justifyContent: isMobile ? 'center' : (isCoFounder ? 'flex-end' : 'center'),
              mt: 'auto' 
            }}
          >
            {user.socialLinks.map((link, index) => {
              const SocialIcon = socialIconComponents[link.icon];
              return (
                <IconButton key={index} onClick={() => {
                  if (link.icon === "MailOutline") {
                    window.location.href = `mailto:${link.url}`;
                  } else {
                    window.open(link.url, '_blank');
                  }
                }}>
                  <SocialIcon />
                </IconButton>
              );
            })}
          </CardActions>
        </Box>
      </Box>
    </Card>
  );
};



const userList = [
  // Co-founders
  {
    image: dogan,
    name: "DOGAN OGUT",
    title: "Co-Founder - Software Developer",
    socialLinks: [
      { icon: 'LinkedIn', url: 'https://www.linkedin.com/in/doganogut/' },
      { icon: 'MailOutline', url: 'cofounder1@example.com' },
    ]
  },
  {
    image: serdar,
    name: "SERDAR SAGIR",
    title: "Co-Founder - Content Developer",
    socialLinks: [
      { icon: 'LinkedIn', url: 'https://www.linkedin.com/in/serdar-bozan/' },
      { icon: 'MailOutline', url: 'cofounder2@example.com' },
    ]
  },
  {
    image: "./man.jpg",
    name: "YAGIZ",
    title: "Developer",
    socialLinks: [
      { icon: 'LinkedIn', url: 'https://linkedin.com/in/cofounder2' },
      { icon: 'MailOutline', url: 'cofounder2@example.com' },
    ]
  },
  {
    image: "./man.jpg",
    name: "EMIR",
    title: "Developer",
    socialLinks: [
      { icon: 'LinkedIn', url: 'https://linkedin.com/in/cofounder2' },
      { icon: 'MailOutline', url: 'cofounder2@example.com' },
    ]
  },
  {
    image: "./man.jpg",
    name: "LEVO",
    title: "Developer",
    socialLinks: [
      { icon: 'LinkedIn', url: 'https://linkedin.com/in/cofounder2' },
      { icon: 'MailOutline', url: 'cofounder2@example.com' },
    ]
  },
  {
    image: "./man.jpg",
    name: "TAMER",
    title: "Developer",
    socialLinks: [
      { icon: 'LinkedIn', url: 'https://linkedin.com/in/cofounder2' },
      { icon: 'MailOutline', url: 'cofounder2@example.com' },
    ]
  },
  // Team members
  // ... your other 4 team members with similar structure.
];

const About = () => {
  const coFounders = userList.filter(user => user.title.includes("Co-Founder"));
  const others = userList.filter(user => !user.title.includes("Co-Founder"));

  return (
    <Layout>
      <Box display="flex" justifyContent="center" px={2}>  {/* Added horizontal padding here */}
        <Grid container spacing={2} sx={{ maxWidth: '80%', margin: "5%" }}>

          {/* Display Co-Founders centered */}
          <Grid 
            item 
            xs={12}
            container
            justifyContent="center"
            spacing={2}
          >
            {coFounders.map((user, index) => (
              <Grid 
                item 
                xs={12}
                md={5}
                key={index}
              >
                <ProfileCard user={user} />
              </Grid>
            ))}
          </Grid>

          {/* Display Other Team Members */}
          {others.map((user, index) => (
            <Grid 
              item 
              xs={12}
              md={3}
              key={index}
            >
              <ProfileCard user={user} />
            </Grid>
          ))}

        </Grid>
      </Box>
    </Layout>
  );
};

export default About;