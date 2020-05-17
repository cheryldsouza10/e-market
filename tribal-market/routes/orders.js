const express = require('express');
const router = express.Router();

// Require our controllers.
var order_controller = require('../controllers/orderController');
var client_controller = require('../controllers/buyerController'); 
var seller_controller = require('../controllers/sellerController'); 



/// All ROUTES ///

// GET all clients.
router.get('/',order_controller.order_list);  

// POST to add client
router.post('/add', client_controller.place_order);  

// Get for seller specific.
router.get('/', seller_controller.seller_product);


module.exports = router;