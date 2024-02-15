import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Layout from '../../components/Layout/Layout';
import { Button, TextField, Box, Container, Typography, Paper, Grid } from '@mui/material';
import contactUsImg from "../../assets/imgs/contact.jpeg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: ""
  });

  const [errors, setErrors] = useState({
    from_name: false,
    from_email: false,
    message: false
  });

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = { ...errors };

    for (const key in formData) {
      if (!formData[key]) {
        newErrors[key] = true;
        valid = false;
      }
    }

    if (formData.from_email && !validateEmail(formData.from_email)) {
      newErrors.from_email = true;
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
        emailjs.sendForm('service_vaxfiwy', 'template_5mroox2', form.current, '0ZeIImYKyM30u5LKz')
            .then((result) => {
                toast.success('Email sent successfully!');
                setFormData({ from_name: "", from_email: "", message: "" });
                setErrors({ from_name: false, from_email: false, message: false }); // Reset errors state
            }, (error) => {
                console.log(error.text);
            });
    }
};


  const toastStyles = {
    container: {
      marginTop: window.innerWidth > 600 ? '150px' : '0'
    }
  };

  return (
    <Layout>
      <Container sx={{ paddingTop: "15vh" }}>
      <ToastContainer 
        position="bottom-right"
        style={toastStyles.container}
      />
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" minHeight="85vh">
          <Typography variant="h4" gutterBottom>Contact Us</Typography>
          <Paper elevation={3} style={{ padding: '20px', width: '100%' }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <img src={contactUsImg} alt="Contact Us" style={{ width: '100%', maxHeight: '375px', objectFit: 'cover' }} />
              </Grid>
              <Grid item xs={12} md={6}>
                <form ref={form} onSubmit={sendEmail}>
                <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    name="from_name"
                    margin="normal"
                    value={formData.from_name}
                    onChange={handleInputChange}
                    error={errors.from_name}
                    helperText={errors.from_name && "Name is required."}
                    placeholder="Enter your full name"
                />
                <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    name="from_email"
                    margin="normal"
                    value={formData.from_email}
                    onChange={handleInputChange}
                    error={errors.from_email}
                    helperText={errors.from_email && (validateEmail(formData.from_email) ? "Email is required." : "Email format is invalid.")}
                    placeholder="Enter your valid email address (example@mail.com)"
                />
                <TextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    name="message"
                    multiline
                    rows={4}
                    margin="normal"
                    value={formData.message}
                    onChange={handleInputChange}
                    error={errors.message}
                    helperText={errors.message && "Message is required."}
                    placeholder="Write your message or inquiry here"
                />

                  <Box mt={2} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button type="submit" variant="contained" color="primary">
                      Send
                    </Button>
                  </Box>
                </form>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Container>
    </Layout>
  );
};

export default Contact;
