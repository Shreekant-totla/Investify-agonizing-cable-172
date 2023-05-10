import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './CarouselHome.css';

const styles = {
  carousel: {
    position: 'relative',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  carouselItem: {
    height: '100%',
  },
};

const BackgroundCarousel = () => {
  return (
    <Carousel variant="dark" fade controls={true} indicators={true} interval={null} style={styles.carousel}>
      
        <Carousel.Item  style={styles.carouselItem}>
          <img className="d-block w-100" src='./images/CarouselImage1.png' alt='image1' />
          <Carousel.Caption style={{width:"29%", textAlign:"left", marginLeft:"-50px",marginBottom:"20px"}}>
          <h2 style={{fontWeight: '600',
            fontSize: '40px',
            lineHeight: '48px',
            color: '#333',
            fontFamily: "Poppins,sans-serif"}}>Ab karo har sapna poora.</h2>
          <h2 style={{fontWeight: '600',
            fontSize: '40px',
            lineHeight: '48px',
            color: '#333',
            fontFamily: "Poppins,sans-serif"}}>SIP Karo, Khush Raho!</h2>
          <p style={{
            fontSize: '17px',
            lineHeight: '15px',
            color: '#606060',
            fontFamily: "Poppins,sans-serif"}}>Invest a fixed amount in SIP every month.</p>
          <br/>
    <button style={{color:"#ffffff", fontSize:"13px", fontFamily:"Poppins,sans-serif", margin: "0px 5px 5px 0px",
  padding: "14px 25px", backgroundColor:"#2C6EB5", borderRadius:"20px"}}>START AN SIP</button>
        </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item  style={styles.carouselItem}>
          <img className="d-block w-100" src='./images/CarouselImage2.png' alt='image2' />
          <Carousel.Caption style={{width:"29%", textAlign:"left", marginLeft:"-50px",marginBottom:"20px"}}>
          <h2 style={{fontWeight: '600',
            fontSize: '40px',
            lineHeight: '48px',
            color: '#333',
            fontFamily: "Poppins,sans-serif"}}>Save upto ₹46,800</h2>
          <h2 style={{fontWeight: '600',
            fontSize: '40px',
            lineHeight: '48px',
            color: '#333',
            fontFamily: "Poppins,sans-serif"}}>with ELSS Tax Saver Funds</h2>
          <p style={{
            fontSize: '17px',
            lineHeight: '15px',
            color: '#606060',
            fontFamily: "Poppins,sans-serif"}}>Dual Benefits: Tax Saving & Wealth Creation</p>
          <br/>
    <button style={{color:"#ffffff", fontSize:"13px", fontFamily:"Poppins,sans-serif", margin: "0px 5px 5px 0px",
  padding: "14px 25px", backgroundColor:"#2C6EB5", borderRadius:"20px"}}>START INVESTING</button>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item  style={styles.carouselItem}>
          <img className="d-block w-100" src='./images/CarouselImage3.png' alt='image3' />
          <Carousel.Caption style={{width:"29%", textAlign:"left", marginLeft:"-50px",marginBottom:"0px"}}>
          <h2 style={{fontWeight: '600',
            fontSize: '40px',
            lineHeight: '48px',
            color: '#333',
            fontFamily: "Poppins,sans-serif"}}>SIP Banaega</h2>
          <h2 style={{fontWeight: '600',
            fontSize: '40px',
            lineHeight: '48px',
            color: '#333',
            fontFamily: "Poppins,sans-serif"}}>Crorepati - Make your first 1 Cr.*</h2>
          <p style={{
            fontSize: '17px',
            lineHeight: '20px',
            color: '#606060',
            fontFamily: "Poppins,sans-serif"}}>Invest ₹ 5000 per month for 20 years with an annual top up of ₹ 500.</p>
          <br/>
    <button style={{color:"#ffffff", fontSize:"13px", fontFamily:"Poppins,sans-serif", margin: "0px 5px 5px 0px",
  padding: "14px 25px", backgroundColor:"#2C6EB5", borderRadius:"20px"}}>KNOW MORE</button>
        </Carousel.Caption>
        </Carousel.Item>
      
    </Carousel>
  );
};

export default BackgroundCarousel
