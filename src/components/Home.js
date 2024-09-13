// src/components/Home.js
import React from 'react';
import './Home.css';
import feature1Image from '../assets/images/feature1.png';
import feature2Image from '../assets/images/feature2.png';
import feature3Image from '../assets/images/feature3.png';
import Carousel from './Carousel'; // Import the Carousel component
import NewArrivals from './NewArrivals'; 
import Testimonials from './Testimonials'; // Import the Testimonials component
import SearchComponent from './SearchComponent';
import aboutImage from '../assets/images/about.jpg';
import specialImage from '../assets/images/specialoffer.jpeg';
import earlyImage from '../assets/images/earlybird.jpeg';
import getImage from '../assets/images/getonefree.jpeg';

import dish1Image from '../assets/images/grid1.jpg';
import dish2Image from '../assets/images/grid2.jpg';
import dish3Image from '../assets/images/grid3.jpg';
import dish4Image from '../assets/images/grid4.jpg';


function Home() {
  return (
    <div className="home">
      {/* Carousel Section */}
      <Carousel /> 
     
      {/* Features Section */}
      <section id="features">
        <h2 className="section-featurestitle">What We Offer</h2>
        <div className="container-section">
          <div className="features-card">
            <img src={feature1Image} alt="Quality Clothing" />
            <h3>Master Chefs</h3>
            <p>A Master Chef is a professional cook who has reached the highest level of culinary skill and expertise.</p>
          </div>

          <div className="features-card">
          <img src={feature2Image} alt="Quality Clothing" />
            <h3>Quality Food</h3>
            <p>Quality food is not just about taste, but also about nutritional value, safety, and sustainability.</p>
          </div>

          <div className="features-card">
          <img src={feature3Image} alt="Quality Clothing" />
            <h3>Online Order</h3>
            <p>Online ordering refers to the process of placing an order for goods or services using the device.</p>
          </div>
        </div>
      </section>

<h2 class="section-title">About Us</h2>
<section id="about-us">

 <div class="about-container">

 <img src={aboutImage} alt="About Us" class="about-img"/>

   <div class="about-text">
     <h3>Our Story</h3>
     <p>We began our journey in 2000 with a vision to bring world-class cuisine to the heart of the city. 
      Over the years, ABC Restaurant has become a landmark for culinary excellence, receiving numerous accolades and awards.</p>
     <h3>Our Commitment</h3>
     <p>At ABC Restaurant, we're dedicated to sourcing the finest ingredients, crafting exquisite dishes, and delivering an unparalleled dining experience for every customer who walks through our doors.</p>
     <a href="/overview" class="learn-more">Learn More</a>
   </div>

 </div>

</section>


<Testimonials />

{/* Menu Introduction Section */}
<section className="menu-introduction">
        <div className="intro-content">
          <h2>Discover Our Menu</h2>
          <p>
            Dive into the world of exquisite flavors and embark on a culinary journey like no other. 
            Every dish we serve has a story, an origin, and a soul of its own.
          </p>
          <a href="/menu" className="view-button">View All</a>
        </div>

        <div className="images-gr">
          <img src={dish1Image} alt="Dish 1" />
          <img src={dish2Image} alt="Dish 2" />
          <img src={dish3Image} alt="Dish 3" />
          <img src={dish4Image} alt="Dish 4" />
        </div>
      </section>

      <section id="exclusive-offers">

  <h2>Exclusive Offers</h2>

  <div class="offers-container">

 
   <div class="offer-card">
    <img src={specialImage} alt="Offer Image 1"/>
    <h3>50% off all pizzas</h3>
    <p>Satisfy your pizza cravings for half the price with our limited time offer: 
    50% off all pizzas! Treat yourself without breaking the bank.</p>
  
   </div>

   
   <div class="offer-card">
     <img src={getImage} alt="Offer Image 2"/>
     <h3>Buy one, get one free</h3>
     <p>Double your burger fun with our Buy one, get one free on all burgers offer! 
      This offer is valid for a limited time only, so don't miss!</p>
   
   </div>


   <div class="offer-card">
    <img src={earlyImage} alt="Offer Image 3"/>
    <h3>Early bird specials</h3>
    <p>Save money on a delicious meal and beat the rush with our early bird specials. 
     Available from 4pm to 7pm.</p>
    
   </div>

  </div>

   <div class="view-all">
    <a href="/offers" class="view-all-b">View All</a>
   </div>

</section>




<section id="reservation-cta">
  <h2>Experience Signature Delicacies</h2>
  <p>Reserve your table now and immerse yourself in a culinary journey.</p>
  <a href="/reservation"><button id="reserve-now">Reserve Now</button></a> 
</section>

      


      
<NewArrivals /> 

      


    </div>
  );
}

export default Home;
