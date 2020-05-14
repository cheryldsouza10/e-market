const express = require('express');
const router = express.Router();

// Require our controllers.
var client_controller = require('../controllers/buyerController'); 



/// All ROUTES ///

// GET all clients.
router.get('/', client_controller.client_list);  

// POST to add client
router.post('/add', client_controller.client_register);  

// POST to add client
router.post('/login', client_controller.client_login);  

// GET request for logged in information
router.get('/logged', client_controller.client_logged);  

// GET request for logout
router.get('/logout', client_controller.client_logout);  


module.exports = router;