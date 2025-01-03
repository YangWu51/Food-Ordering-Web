const express = require("express");
const Pizza = require('./models/pizzaModel');
const cors = require('cors');
const app = express();
const db = require("./db.js");

app.use(express.json());
app.use(cors());

// Routes
const pizzasRoute = require('./routes/pizzasRoute');
const userRoute = require('./routes/userRoute');
const ordersRoute = require('./routes/ordersRoute');

app.use('/api/pizzas/', pizzasRoute);
app.use('/api/users/', userRoute);
app.use('/api/orders/', ordersRoute);

// Root route
app.get("/", (req, res) => {
    res.send(`Server working on port ${port}`);
});

// Define port
const port = process.env.PORT || 8000;

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

const path = require('path');
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
