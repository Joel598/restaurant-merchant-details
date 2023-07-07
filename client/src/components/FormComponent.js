import React from 'react';

const FormComponent = ({ formData, handleChange, handleSubmit }) => {
  return (
    <div>
      <h1>Restaurant Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Restaurant Name:</label>
          <input
            type="text"
            name="restaurantName"
            value={formData.restaurantName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Contact Name:</label>
          <input
            type="text"
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Pincode:</label>
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Website:</label>
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Average Daily Transactions:</label>
          <input
            type="text"
            name="avgDailyTransactions"
            value={formData.avgDailyTransactions}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
