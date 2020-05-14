// routes/api/products.js

const express = require('express');
const router = express.Router();

var client_controller = require('../controllers/sellerController'); 


// Load Product model
const Product = require('../models/product');

//const multer = require('multer');

//View product (seller specific)
router.get('/seller-product', client_controller.product_view);

//Get product details for showDetails
router.get('/:id', (req, res) => {
  Product.findById(req.params.id)
    .then(pro => res.json(pro))
    .catch(err => res.status(404).json({ noprofound: 'No Product found' }));
});

//Add new product (seller specific)
router.post('/add', client_controller.product_register);  

//Update product information
router.put('/:id', (req, res) => {
  Product.findByIdAndUpdate(req.params.id, req.body)
    .then(pro => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

//Delete product by id
router.delete('/:id', (req, res) => {
  Product.findByIdAndRemove(req.params.id, req.body)
    .then(pro => res.json({ mgs: 'Product entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a product' }));
});

//View for buyer
router.get('/', (req, res) => {
  Product.find()
    .then(pros => res.json(pros))
    .catch(err => res.status(404).json({ noprosfound: 'No Products found' }));
 });



module.exports = router;