// app.js

const express = require('express');
const connectDB = require('./config/db');
const app = express();

var cors = require('cors');

//Routes
const sellers = require('./routes/sellers');
const products = require('./routes/products');
const buyers = require('./routes/buyers');
const orders = require('./routes/orders');

//Connect to database
connectDB();

//cors
app.use(cors({origin: true, credentials: true}));
//Init middleware
app.use(express.json({extended: false}));

app.get('/', (req, res) => res.send("Hello world"));

//use routes
app.use('/sellers',sellers);
app.use('/products', products);
app.use('/buyers', buyers);
app.use('/orders', orders);

const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port ${port}`));