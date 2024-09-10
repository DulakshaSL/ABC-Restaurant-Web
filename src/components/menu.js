// frontend/src/components/Gallery.js
import React, { useEffect, useState } from 'react';
import './menu.css'; 
import dish1Image from '../assets/images/grid1.jpg';
import dish2Image from '../assets/images/grid2.jpg';
import dish3Image from '../assets/images/grid3.jpg';
import dish4Image from '../assets/images/grid4.jpg';
import AllDishes from './AllDishes'; 
import AllBeverages from './AllBeverages'; 

const menu = () => {
  return (

    <div className="main-menu">
      {/* Menu Introduction Section */}
      <section className="menu-in">
        <div className="intro-c">
          <h2>Our Menu</h2>
          <p>At ABC Restaurant, we pride ourselves in serving dishes that tell a story. 
    Each item on our menu is a reflection of the rich culinary heritage of our roots, 
    combined with the vibrant flavors of modern gastronomy. Sourced from local farmers and fishermen, 
    our ingredients promise freshness in every bite. 
    Dive into our curated selection and embark on a delightful culinary journey.</p>
        </div>

        {/* Static images */}
        <div className="images-g">
        <img src={dish1Image} alt="Dish 1" />
          <img src={dish2Image} alt="Dish 2" />
          <img src={dish3Image} alt="Dish 3" />
          <img src={dish4Image} alt="Dish 4" />
        </div>
      </section>

      <AllDishes /> 
      
      <AllBeverages /> 
 
    </div>
     
  );
};

export default menu;
