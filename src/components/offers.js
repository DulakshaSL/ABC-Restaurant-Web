// frontend/src/components/Gallery.js
import React, { useEffect, useState } from 'react';
import './menu.css'; 
import dish1Image from '../assets/images/grid1.jpg';
import dish2Image from '../assets/images/grid2.jpg';
import dish3Image from '../assets/images/grid3.jpg';
import dish4Image from '../assets/images/grid4.jpg';
import feature1Image from '../assets/images/feature1.png';
import feature2Image from '../assets/images/feature2.png';
import feature3Image from '../assets/images/feature3.png';
import DiscountItems from './DiscountItems';

const menu = () => {
  return (

    <div className="main-menu">
      {/* Menu Introduction Section */}
      <section className="menu-in">
        <div className="intro-c">
          <h2>Exclusive Offers </h2>
          <p>At ABC Restaurant, we love to reward our valued customers! Enjoy special discounts on our most popular dishes that have won the hearts of our patrons. 
            From signature meals to seasonal delights, we have crafted exclusive offers just for you. Whether you’re dining in or ordering for delivery, 
            make the most of our exciting deals and savor the flavors you love at a fantastic price. Don’t miss out—explore our offers and indulge 
            in your favorite dishes while the promotion lasts!</p>
        </div>

        {/* Static images */}
        <div className="images-g">
        <img src={dish1Image} alt="Dish 1" />
          <img src={dish2Image} alt="Dish 2" />
          <img src={dish3Image} alt="Dish 3" />
          <img src={dish4Image} alt="Dish 4" />
        </div>
      </section>

       {/* Features Section */}
       <section id="features">
        <h2 className="section-featurestitle">ABC Loyalty</h2>
        <div className="container-section">
          <div className="features-card">
            <img src={feature1Image} alt="Quality Clothing" />
            <h3>Earn and Redeem Points</h3>
            <p>As a loyalty Customer, Yo can earn points for each purchase, which they can redeem for rewards.</p>
          </div>

          <div className="features-card">
          <img src={feature2Image} alt="Quality Clothing" />
            <h3>Tiers Programs</h3>
            <p>Our loyalty program features different tiers that reward on your spending. 
            As you climb the tiers, you unlock  perks and benefits.</p>
          </div>

          <div className="features-card">
          <img src={feature3Image} alt="Quality Clothing" />
            <h3>Surprise Rewards</h3>
            <p>Keep an eye out for surprise rewards! From double points days to bonus gifts, we love to delight our loyal customers.</p>
          </div>
        </div>
      </section>
      
      <DiscountItems/>
     
    </div>
     
  );
};

export default menu;
