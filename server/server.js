const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'merchant',
});

// Endpoint to handle the form submission
app.post('/restaurants', (req, res) => {
  const { restaurantName, contactName, pincode, location, website, phoneNumber, avgDailyTransactions } = req.body;

  // Insert the restaurant details into the database
  const sql = 'INSERT INTO restaurants (restaurantName, contactName, pincode, location, website, phoneNumber, avgDailyTransactions) VALUES (?, ?, ?, ?, ?, ?, ?)';
  pool.query(sql, [restaurantName, contactName, pincode, location, website, phoneNumber, avgDailyTransactions], (error, results) => {
    if (error) {
      console.error('Error inserting restaurant details:', error);
      res.status(500).json({ message: 'An error occurred while inserting restaurant details.' });
    } else {
      res.json({ message: 'Restaurant details inserted successfully.' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
