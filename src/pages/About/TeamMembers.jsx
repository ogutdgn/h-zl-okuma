import React from 'react';
import {
  Grid,
  Box
} from '@mui/material';
import MemberCard from './MemberCard';
import MemberList from './MemberList';


const TeamMembers = () => {
    const coFounders = MemberList.filter(user => user.title.includes("Co-Founder"));
    const others = MemberList.filter(user => !user.title.includes("Co-Founder"));
    console.log(MemberList);
  
    return (
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
                  <MemberCard user={user} />
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
                <MemberCard user={user} />
              </Grid>
            ))}
  
          </Grid>
        </Box>
    );
  };
  
  export default TeamMembers;