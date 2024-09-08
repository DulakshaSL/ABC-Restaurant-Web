// src/components/Facilities.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Facilities.css'; 
import restImage from '../assets/images/restaurant.jpg';
import popularImage from '../assets/images/environment2.jpg';
import conferenceImage from '../assets/images/conference_rooms.jpg';
import exploreImage from '../assets/images/explorearound.jpg';
import fitnessImage from '../assets/images/fitness_center.jpg';
import exclusiveImage from '../assets/images/Exlusive.jpeg';
import reserveImage from '../assets/images/reservenow.png';


const Facilities = () => {
  const [facilities, setFacilities] = useState([]);

  useEffect(() => {
    const fetchFacilities = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/facilities');
        setFacilities(response.data);
      } catch (error) {
        console.error('Error fetching facilities:', error);
      }
    };

    fetchFacilities();
  }, []);

  return (
    <main>
      {/* Overview Section */}
      <section className="overview-sec">
        <div className="overview-te">
          <h1>Our Facilities</h1>
          <p>Welcome to our world-class facilities! At our establishment,
      we take pride in offering a wide range of facilities designed to enhance your experience.
      From state-of-the-art amenities to relaxing spaces, we've got it all. Take a closer look at
      what we have to offer, and discover how our facilities can elevate your visit.
      Explore the different sections below to learn more about each facility.</p>
          
        </div>

        <div className="overview-imag">
        <img src={restImage} alt="" />
        <img src={conferenceImage} alt="" />
        <img src={popularImage} alt="" />
       

        </div>
      </section>

      {/* Facilities Display Section */}
      <section className="explore-section">
        {facilities.map((facility, index) => (
          <div className={`explore-content ${index % 2 === 0 ? 'even' : 'odd'}`} key={facility._id}>
            <img
              src={`http://localhost:5000/images/${facility.image}`}
              alt={facility.facility_name}
              className="explore-image"
             
            />
            <div className="explore-text">
              <h3>{facility.facility_name}</h3>
              <p>{facility.description}</p>
            </div>
          </div>
        ))}
      </section>

      <section id="reservation-cta">
  <h2>Experience Signature Delicacies</h2>
  <p>Reserve your table now and immerse yourself in a culinary journey.</p>
  <a href="/reservation"><button id="reserve-now">Reserve Now</button></a> 
</section>

    </main>
  );
};

export default Facilities;
