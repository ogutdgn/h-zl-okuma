import React from 'react';
import {
  Avatar,
  Card,
  Typography,
  CardActions,
  IconButton,
  Box
} from '@mui/material';
import { LinkedIn, MailOutline } from '@mui/icons-material';

const socialIconComponents = {
    LinkedIn,
    MailOutline,
  };
  
  const MemberCard = ({ user }) => {
    const isCoFounder = user.title.includes("Co-Founder");
    const isMobile = window.innerWidth <= 600;
  
    return (
      <Card sx={{ px: 2, py: 3 }}>
        <Box display={isMobile ? 'block' : (isCoFounder ? 'flex' : 'block')}>
          <Avatar
            alt={user.name}
            src={user.img}
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

export default MemberCard;