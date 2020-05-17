//https://codeforgeek.com/manage-session-using-node-js-express-4/
//req.params.id
const Seller = require('../models/seller');
const Buyer = require('../models/buyer');
const Product = require('../models/product');
const Order = require('../models/order');


let user="000000000000";

//all orders list
exports.order_list = function(req, res) {
	
    Order.find(function(err, response) {
        if (err) {
            console.log(err);
        } else {
            res.json(response);
        }
    });
};

 //get seller specific
 exports.seller_product = function(req, res){
    Order.find({"seller" : req.params.id},function(err, product){
        if (err) {
            console.log(err);
        } else {
            if(!product){
                res.status(420).json("Seller don't exist")
                console.log(product);
            }
            else
            {
            props = res.json(product);
            console.log(props);
            }
        }
    });
 }

