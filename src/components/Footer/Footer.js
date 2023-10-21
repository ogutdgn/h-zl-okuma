import React from 'react';
import { Container, Grid, Typography, Box, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, Phone, Email, Send } from '@mui/icons-material';

const Footer = () => {
    return (
        <>
            <Box sx={{ bgcolor: '#2C2C2C', color: 'white', py: 4 }}> {/* Increased vertical padding */}
                <Container>
                    <Grid container spacing={4}> {/* Increased grid spacing */}
                        <Grid item xs={12} md={6} lg={5}>
                            <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}><span>WALEED</span>CODES</Typography>
                            <Typography sx={{ fontWeight: 'bold', mt: 2 }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit...</Typography> {/* Increased margin-top */}
                            <Box mt={3}> {/* Increased margin-top */}
                                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                    <IconButton color="inherit" size="large"><Facebook /></IconButton>
                                </a>
                                <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
                                    <IconButton color="inherit" size="large"><Twitter /></IconButton>
                                </a>
                                <a href="https://www.instagram.com/swift_readers" target="_blank" rel="noreferrer">
                                    <IconButton color="inherit" size="large"><Instagram /></IconButton>
                                </a>
                                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                    <IconButton color="inherit" size="large"><LinkedIn /></IconButton>
                                </a>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} lg={3}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.3rem' }}>Quick Links</Typography>
                            <Box mt={3}> {/* Increased margin-top */}
                                <Link href="/services" color="inherit" display="block" sx={{ textDecoration: 'none', my: 1, fontSize: '1.1rem', fontWeight: 'bold', '&:hover': { textDecoration: 'underline', color: "white" } }}>Services</Link>
                                <Link href="/about" color="inherit" display="block" sx={{ textDecoration: 'none', my: 1, fontSize: '1.1rem', fontWeight: 'bold', '&:hover': { textDecoration: 'underline', color: "white" } }}>About</Link>
                                <Link href="/contact" color="inherit" display="block" sx={{ textDecoration: 'none', my: 1, fontSize: '1.1rem', fontWeight: 'bold', '&:hover': { textDecoration: 'underline', color: "white" } }}>Contact</Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.3rem' }}>Contact</Typography>
                            <Box mt={3}> {/* Increased margin-top */}
                                <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}><Phone color="inherit" sx={{ mr: 1 }} />+90 5445629942</Typography>
                                <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}><Link href="mailto:ogutdgn@swiftreaders.com" sx={{ color: "white", textDecoration: 'none', '&:hover': { textDecoration: 'underline', color: "white" } }}><Email color="inherit" sx={{ mr: 1 }} />ogutdgn@swiftreaders.com</Link></Typography>
                                <Typography variant="body1" sx={{ fontWeight: 'bold' }}><Send color="inherit" sx={{ mr: 1 }} /> Ankara, Turkey.</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box sx={{ bgcolor: '#2C2C2C', color: 'white', py: 3 }}> {/* Increased vertical padding */}
                <Container>
                    <Typography align="center" variant="body2" sx={{ fontWeight: 'bold' }}>
                        © 2023 All rights reserved. | Design By Dastugo Technology | <Link href="/" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Terms & Policy</Link>
                    </Typography>
                </Container>
            </Box>
        </>
    )
}

export default Footer;
