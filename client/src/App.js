import React, { useState } from 'react';
import axios from 'axios';
import './index.css';
import './components/FormComponent'
import FormComponent from './components/FormComponent';


const App = () => {
  const [formData, setFormData] = useState({
    restaurantName: '',
    contactName: '',
    pincode: '',
    location: '',
    website: '',
    phoneNumber: '',
    avgDailyTransactions: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check for empty fields
    for (const key in formData) {
      if (formData[key] === '') {
        alert('Please fill in all fields');
        return;
      }
    }
    try {
      await axios.post('http://localhost:5000/restaurants', formData);
      alert('Restaurant data submitted successfully.');

      // Reset the form after successful submission
      setFormData({
        restaurantName: '',
        contactName: '',
        pincode: '',
        location: '',
        website: '',
        phoneNumber: '',
        avgDailyTransactions: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form.');
    }
  };

  return (
    <div className="container">
      <FormComponent
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default App;
