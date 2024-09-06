// src/components/Overview.js

import React from 'react';
import './Overview.css'; // Import your CSS file here
import restImage from '../assets/images/restaurant.jpg';
import popularImage from '../assets/images/populardish1.jpg';
import conferenceImage from '../assets/images/conference_rooms.jpg';
import exploreImage from '../assets/images/explorearound.jpg';
import fitnessImage from '../assets/images/fitness_center.jpg';
import exclusiveImage from '../assets/images/Exlusive.jpeg';
import reserveImage from '../assets/images/reservenow.png';


const Overview = () => {
  return (
    <div>
      {/* Overview Main Content */}
      <section className="overview-section">
        <div className="overview-text">
          <h1>Welcome to ABC Restaurant</h1>
          <p>
            Since our establishment in 2000, ABC Restaurant has been offering a blend of traditional and innovative
            dishes. Overlooking the pristine southern coast of beautiful Sri Lanka, ABC Restaurant Hambantota is
            located along the ancient Spice Route in a city steeped in rich history. Hambantota is known for its
            natural beauty and allows visitors to explore Asia’s fascinating nature and wildlife sanctuaries. Our
            mission is to provide an unforgettable dining experience.
          </p>
          <a href="/menu" className="cta-button">
            Explore Our Menu
          </a>
        </div>

        <div className="overview-images">
        <img src={restImage} alt="" />
        <img src={conferenceImage} alt="" />
        <img src={popularImage} alt="" />
       

        </div>
      </section>

      {/* Explore More Section */}
      <section className="explore-section">
        {/* First content block with image on the left */}
        <div className="explore-content">
          <img src={exploreImage}  alt="Explore Image 1" className="explore-image" />
          <div className="explore-text">
            <h3>Explore Hambantota</h3>
            <p>
              Our main branch is located in Hambantota, a one-of-a-kind town that allows visitors to experience
              natural beauty and wildlife, historic colonial architecture, expansive salt flats, and heritage sites
              including dagobas and viharas. Approximately 200 kilometres south of Sri Lanka's capital, Colombo,
              Hambantota borders the sacred city of Kataragama and Udawalawe National Park.
            </p>
          </div>
        </div>

        {/* Second content block with image on the right */}
        <div className="explore-content reverse">
          <img src={fitnessImage}  alt="Explore Image 2" className="explore-imagesecond" />
          <div className="explore-textsecond">
            <h3>Services and Facilities</h3>
            <p>
              Our dedicated and experienced team caters to the needs of guests with an extensive range of services and
              facilities. If you require any service not listed here, please contact us and we will do our very best to
              assist in any way we can.
            </p>
            <a href="/facilities" className="explore-btn">
              Explore More
            </a>
          </div>
        </div>
      </section>

      {/* Exclusive Offers Section */}
      <section className="explore-section">
        <div className="explore-content">
          <img src={exclusiveImage}  alt="Explore Image 1" className="explore-image" />
          <div className="explore-text">
            <h3>Exclusive offers for our loyal customers!</h3>
            <p>
              At ABC Restaurant, we love to reward our loyal customers. That's why we're offering a variety of
              exclusive offers on our website. Whether you're looking for a discount on your next meal or a free
              dessert, we have something for everyone.
            </p>
            <a href="/offers" className="explore-btn">
              Explore More
            </a>
          </div>
        </div>
      </section>

      {/* Menu Introduction Section */}
      <section className="menu-intro">
        <div className="intro-cont">
          <h2>Make a reservation today!</h2>
          <p>
            Making a reservation at ABC Restaurant is now easier than ever! You can now make a reservation online,
            through our website. To make a reservation, simply visit our website and click on the "Make a Reservation"
            button. You will be able to select your preferred date, time, and number of guests.
          </p>
          <a href="/reservation" className="view-btn">
            Book Now
          </a>
        </div>

        <div className="images-grid">
          <img src={reserveImage}  alt="Reserve Now" />
        </div>
      </section>
    </div>
  );
};

export default Overview;
