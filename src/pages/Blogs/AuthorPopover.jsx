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

const AuthorPopover = ({ author }) => {
    return (
        <Card sx={{ p: 2 }}>
            <Box display="flex" alignItems="center">
                <Avatar src={author.img} alt={author.name} sx={{ width: 60, height: 60, mr: 2 }} />
                <Box>
                    <Typography variant="h6">{author.name}</Typography>
                    <Typography variant="body2" color="textSecondary">{author.title}</Typography> {/* Display the member's title */}
                    <Typography variant="body2" color="textSecondary">{author.email}</Typography>
                </Box>
            </Box>
            <CardActions>
                <IconButton onClick={() => window.open(`mailto:${author.socialLinks.find(link => link.icon === 'MailOutline').url}`)}> 
                    <MailOutline />
                </IconButton>
                <IconButton onClick={() => window.open(author.socialLinks.find(link => link.icon === 'LinkedIn').url, '_blank')}>
                    <LinkedIn />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default AuthorPopover;
