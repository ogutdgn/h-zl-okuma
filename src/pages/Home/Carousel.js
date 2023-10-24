import { useState, useEffect } from "react";
import carousel1 from "../../assets/imgs/book1.jpeg";
import carousel2 from "../../assets/imgs/book2.jpeg";
import carousel3 from "../../assets/imgs/book3.jpeg";

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  transition: 'opacity 1s',
  opacity: 0,
  position: "absolute",
  top: 0,
  left: 0
};

const slideTextStyle = {
  fontFamily: "'Playfair Display', serif",
  color: "#fff",
  fontSize: "50px",  // Increase font size for prominence
  fontWeight: "bold",  // Bold text for emphasis
  letterSpacing: "2px",  // Spacing between letters for a more aesthetic look
  textTransform: "uppercase",  // Convert text to uppercase
  textAlign: "center",
  position: "absolute",
  top: "50%",  // Center vertically
  left: "50%",  // Center horizontally
  transform: "translate(-50%, -50%)",  // Adjust to truly center the text
  backdropFilter: "blur(6px)",  // Optional: Add a blur effect for readability
  padding: "10px 20px",  // Some padding around the text
  width: "90%"
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 2,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 2,
  cursor: "pointer",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
  position: "absolute",
  bottom: "10px",
  width: "100%",
  zIndex: 2,   // ensuring dots are visible on top
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
  transition: 'color 0.5s'
};

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { src: carousel1, title: "beach", text: "Boost Your Reading Speed and Comprehension Now!" },
    { src: carousel2, title: "boat", text: "Unlock Your Potential with Targeted Exercises!"  },
    { src: carousel3, title: "forest", text: "Dive into Our Blogs for Reading Mastery!" },
  ];

  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 3000);
    return () => clearInterval(autoSlideInterval);
  }, [currentIndex, slides.length]);

  return (
    <div style={{display: "flex", justifyContent: "center", position: "relative", height: "480px", margin: "20px", width: "90%"}}>
      <div onClick={() => {
          const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
          setCurrentIndex(newIndex);
        }} style={leftArrowStyles}>
          ❰
      </div>
      <div onClick={() => {
          const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
          setCurrentIndex(newIndex);
        }} style={rightArrowStyles}>
          ❱
      </div>
      {slides.map((slide, index) => (
        <div key={index} style={{ ...slideStyles, backgroundImage: `url(${slide.src})`, opacity: index === currentIndex ? 1 : 0 }}>
            <div style={slideTextStyle}>
                {slide.text}
            </div>
        </div>
      ))}
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div style={{ ...dotStyle, color: currentIndex === slideIndex ? '#000' : '#aaa' }} key={slideIndex} onClick={() => setCurrentIndex(slideIndex)}>
            ●
          </div>
        ))}
      </div>
    </div>  
  );
};

export default Carousel;
