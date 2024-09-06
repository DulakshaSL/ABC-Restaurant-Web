// src/components/Reservation.js
import React, { useState } from 'react';
import axios from 'axios';
import './Reservation.css'; // Ensure you have corresponding styles
import reserveImage from '../assets/images/reservenow.png';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    seats: 1,
    paymentSlip: null,
  });

  const [loading, setLoading] = useState(false);

  // Get stored userId from localStorage
  const storedUserId = localStorage.getItem('userId');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'paymentSlip') {
      setFormData({ ...formData, paymentSlip: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formPayload = new FormData();
    formPayload.append('userId', storedUserId); // Append userId to the form data
    for (let key in formData) {
      formPayload.append(key, formData[key]);
    }

    try {
      const response = await axios.post(
        'http://localhost:5000/api/reservations/reserve',
        formPayload,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      alert(`Reservation successful! Your Reservation ID is: ${response.data.reservationId}`);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        seats: 1,
        paymentSlip: null,
      });
    } catch (error) {
      alert('Failed to make a reservation. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="reservation-section">
      <div className="creative-content">
        <h3>Book Your Table Now!</h3>
        <img src={reserveImage}  alt="Reserve Now" />

        <div className="guidelines">
          <h2>Reservation Guidelines</h2>
          <h3>Time Periods & Prices For Table Reservations</h3>
          <h4>Lunch: 60-90 minutes</h4>
          <h4>Dinner: 90-120 minutes</h4>
          <h4>Special occasions: 120-180 minutes</h4>
          <h4>Per Seat (Normal) : Rs. 2500</h4>
          <h4>Per Seat (Special) : Rs. 3500</h4>
          <p>
            Note: We will contact you within 15 minutes to inform your booking
            status. <br />
            All payments should be made to the below bank account, and please
            upload proof.
          </p>
          <h4>Account No: 67457854</h4>
          <h4>Branch: NDB Bank - Colombo</h4>
          <h4>Signature Cuisine</h4>
        </div>
      </div>

      <div className="reservation-form">
        <h2>Reservation Form</h2>
        <form onSubmit={handleSubmit} id="reservation-form-details">
          <div className="form-field">
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="time">Time:</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="seats">Number of Seats:</label>
            <input
              type="number"
              id="seats"
              name="seats"
              min="1"
              value={formData.seats}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="paymentSlip">Payment Slip:</label>
            <input
              type="file"
              id="paymentSlip"
              name="paymentSlip"
              accept="image/*"
              onChange={handleChange}
              required
            />
          </div>

          <div className="btn-container">
            <button type="submit" className="reserve-btn" disabled={loading}>
              {loading ? 'Processing...' : 'Reserve'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Reservation;
