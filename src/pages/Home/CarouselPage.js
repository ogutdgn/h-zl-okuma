import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';
import carousel1 from "../../assets/imgs/book1.jpeg";
import carousel2 from "../../assets/imgs/book2.jpeg";
import carousel3 from "../../assets/imgs/book3.jpeg";
import './CarouselPage.css';

function CarouselPage() {

  const navigate = useNavigate();

  const navigateFunc = (path) => {
    navigate(path)
  }

  const carouselItems = [
    {
      title: "Speed Reading Exercise",
      description: "Develop yourself with fast reading exercises.",
      imageUrl: carousel1,
      buttonText: 'TRY YOUR SELF',
      path: "/exercise/reading-test",
    },
    {
      title: "Speed Reading Training",
      description: "Speed reading training consultancy.",
      imageUrl: carousel2,
      buttonText: 'TAKE LESSONS',
      path: "/contact",
    },
    {
      title: "Educational Blogs",
      description: "Increase your knowledge about reading with our blogs.",
      imageUrl: carousel3,
      buttonText: 'LEARN MORE',
      path: "/blogs",
    },
  ];

  return (
    <div style={{ paddingTop: "15vh" }}>
      <Carousel interval={3000} pause={false}>
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index}>
            <div className="carousel-image-wrapper">
              <img
                style={{ height: '85vh', objectFit: 'cover' }}
                className="d-block w-100"
                src={item.imageUrl}
                alt={`${item.title} slide`}
              />
              <div className="carousel-image-overlay" /> {/* Yeni eklenen kısım */}
            </div>
            <Carousel.Caption style={{ textAlign: 'left', bottom: '35%', left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
              <h1 style={{ fontFamily: "'Alegreya Sans', sans-serif", fontWeight: 'bold', color: '#fff', marginBottom: '20px' }}>{item.title}</h1>
              <p style={{ fontFamily: "'Alegreya Sans', sans-serif", fontSize: '1.25rem', color: '#fff', marginBottom: '20px' }}>{item.description}</p>
              <button 
                className="custom-button" // Burada bir className tanımladık.
                onClick={() => navigateFunc(item.path)}
              >
                {item.buttonText}
              </button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default CarouselPage;
