// import React from 'react';
// import { Box, Typography, Button, IconButton } from '@mui/material';
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import SwipeableViews from 'react-swipeable-views';
// import carousel1 from "../../assets/imgs/book1.jpeg";
// import carousel2 from "../../assets/imgs/book2.jpeg";
// import carousel3 from "../../assets/imgs/book3.jpeg";

// const CarouselItem = ({ item, isMobile }) => (
//   <Box
//     sx={{
//       display: 'flex',
//       flexDirection: isMobile ? 'column' : 'row',
//       alignItems: 'center',
//       height: '100%',
//       bgcolor: 'background.paper',
//     }}
//   >
//     <Box
//       component="img"
//       sx={{
//         width: isMobile ? '100%' : '50%',
//         objectFit: 'cover',
//       }}
//       src={item.imageUrl}
//       alt={item.title}
//     />
//     <Box
//       sx={{
//         p: 4,
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'flex-start',
//         justifyContent: 'center',
//         width: isMobile ? '100%' : '50%',
//       }}
//     >
//       <Typography variant="h5" component="div" sx={{ mb: 2 }}>
//         {item.title}
//       </Typography>
//       <Typography variant="body1" sx={{ mb: 2 }}>
//         {item.description}
//       </Typography>
//       <Button variant="contained" sx={{ alignSelf: 'start' }}>
//         {item.buttonText}
//       </Button>
//     </Box>
//   </Box>
// );

// const carouselItems = [
//   {
//     title: "Speed Reading Exercises",
//     description: "Develop yourself with fast reading exercises.",
//     imageUrl: carousel1,
//     buttonText: 'DETAILS',
//   },
//   {
//     title: "Speed Reading Training",
//     description: "Speed reading training consultancy.",
//     imageUrl: carousel1,
//     buttonText: 'DETAILS',
//   },
//   {
//     title: "Educational Blogs",
//     description: "Increase your knowledge about reading with our blogs.",
//     imageUrl: carousel3,
//     buttonText: 'DETAILS',
//   },
// ];

// const ServicesCarousel = () => {
//     const [activeStep, setActiveStep] = React.useState(0);
//     const theme = useTheme();
//     const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//     const maxSteps = carouselItems.length;
  
//     const handleNext = () => {
//       setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
//     };
  
//     const handleBack = () => {
//       setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
//     };
  
//     return (
//       <Box sx={{
//         position: 'relative',
//         maxWidth: '70%', // Kutunun genişliği
//         width: 'auto', // Genişlik otomatik ayarlanacak
//         mx: 'auto', // Kutuyu yatay eksende ortalar
//         my: 4, // Yukarı ve aşağıya margin
//          // Kutuya padding
//         boxShadow: 3, // Gölgelendirme
//         borderRadius: '16px', // Köşelerin yuvarlaklığı
//       }}>
//         <SwipeableViews
//           axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//           index={activeStep}
//           onChangeIndex={(step) => setActiveStep(step)}
//           enableMouseEvents
//           style={{ borderRadius: '16px' }}
//         >
//           {carouselItems.map((item, index) => (
//             <CarouselItem key={index} item={item} isMobile={isMobile} />
//           ))}
//         </SwipeableViews>
//         <Box sx={{
//           position: 'absolute',
//           bottom: theme.spacing(7),
//           right: theme.spacing(2),
//           display: 'flex',
//           alignItems: 'center',
//           transform: 'translateY(100%)', // Okları kutunun dışına çıkarır
//         }}>
//           <IconButton
//             onClick={handleBack}
//             sx={{
//               '&:hover': { transform: 'scale(1.1)' },
//               transition: 'transform 0.3s ease-in-out',
//             }}
//           >
//             <KeyboardArrowLeftIcon />
//           </IconButton>
//           <IconButton
//             onClick={handleNext}
//             sx={{
//               '&:hover': { transform: 'scale(1.1)' },
//               transition: 'transform 0.3s ease-in-out',
//             }}
//           >
//             <KeyboardArrowRightIcon />
//           </IconButton>
//         </Box>
//       </Box>
//     );
//   };
  
//   export default ServicesCarousel;