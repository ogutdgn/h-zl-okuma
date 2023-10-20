import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div style={{ width: "1200px", display: "flex" }}>
      <section className="footer-about">
        <h2>ABOUT US</h2>
        <p>StemWise is where young minds embark on a journey of innovation. Through fun programming lessons and mentorship, we're nurturing the next generation as problem solvers, dreamers, and trailblazers in the world of STEM for a brighter, smarter future.</p>
        <div className="footer-icons">
          {/* Replace with your icons */}
          <i className="icon-instagram"></i>
          <i className="icon-envelope"></i>
          <i className="icon-phone"></i>
          <i className="icon-linkedin"></i>
          <i className="icon-youtube"></i>
        </div>
      </section>
      <section className="footer-news">
        <h2>LATEST NEWS</h2>
        {/* Sample News List */}
        <p>13 Sep - Neuroscience on the Slopes: How Skiing Enhances Brain Function and Motor Neurons</p>
        <p>13 Oct - Just another post with A Gallery</p>
        <p>13 Oct - A Simple Blog Post</p>
        <p>01 Jan - A Video Blog Post</p>
      </section>
      <section className="footer-categories">
        <h2>CATEGORIES</h2>
        {/* Sample Categories List */}
        <p>Programming</p>
        <p>Science</p>
      </section>
      </div>
      <div className="footer-bottom">
        <p>ABOUT | OUR STORES | BLOG | CONTACT | FAQ</p>
      </div>
    </div>
  );
}

export default Footer;
