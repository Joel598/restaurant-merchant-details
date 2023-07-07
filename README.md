# Restaurant Onboarding Application

This is a web application built with React.js, Node.js, and SQL that allows a food delivery company to self-onboard restaurants and collect basic merchant details.

## Features

- Collects restaurant details such as name, contact name, Pincode, location, website, phone number, and average daily transactions.
- Stores the collected data in a SQL database.
- Provides client-side form validation to ensure all required fields are filled before submission.
- Resets the form after successful submission.
- Responsive design for a better user experience on different devices.

## Technologies Used

- React.js
- Node.js
- Express.js
- MySQL
- HTML
- CSS

## Getting Started

#Connecting to MYSQL database

1. Install Xampp sever:
phpMyAdmin: Install Xampp to manage your MySQL database through phpMyAdmin.
You can download phpMyAdmin from the official website: https://www.apachefriends.org/download.html
Open the Xampp control panel and start Apache and MYSQL.

2. Create a MySQL database from phpMyAdmin or use given SQL code below
   //CREATE DATABASE databasename;
```bash
CREATE DATABASE merchant; 
```
3. Create Table for the above database from phpMyAdmin or use given SQL code below
```

```


#To run this application locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/your-username/restaurant-onboarding-app.git
```

2. Navigate to the project directory:
```bash
cd restaurant-onboarding-app
```
3. Install the dependencies for the server-side:
```bash
npm install
```
4. Create a MySQL database and update the connection details in server.js.
Start the server:

```bash
npm start
```
5. Open another terminal window, navigate to the client-side directory:
```bash
cd client
```
6. Install the dependencies for the client-side:
```bash
npm install
```
7. Start the client:
```bash
npm start
```
8. Open your web browser and visit http://localhost:3000 to access the application.
