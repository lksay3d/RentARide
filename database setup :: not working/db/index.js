const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'RentARide',
  password: 'S_534257',
  port: 3000,
});

module.exports = pool;

const express = require('express');
const app = express();

app.use(express.json());

// Import routes
const userRoutes = require('./routes/users');
const carRoutes = require('./routes/cars');

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/cars', carRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${3000}`));
