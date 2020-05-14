//https://codeforgeek.com/manage-session-using-node-js-express-4/
//req.params.id
const Client = require('../models/buyer');
//const Product = require('../models/product');
const Order = require('../models/order');


let user="000000000000";

//client list
exports.client_list = function(req, res) {
	
    Client.find(function(err, response) {
        if (err) {
            console.log(err);
        } else {
            res.json(response);
        }
    });
};

//logged
exports.client_logged = function(req, res) {
    
    Client.findById({"_id" : user},function(err, client) {
        if (err) {
            console.log(err);
        } else {
            if(!client){
                res.status(420).json("User doesn't exist")
                console.log(client);
            }
            else
            {
            res.json({"logged_in":client.logged,"user":client});
            console.log(user);
            }
        }
    });
    
};


//logout
exports.client_logout = function(req, res) {
    Client.updateOne({_id:user},{logged:0},
        function(err, resp) {
                if (err) {
                    res.json(err);
                } else {
                    user="000000000000"
                    res.json("Logged Out successfully");
                }
            });
         };


//Register client
exports.client_register = function(req, res) {
	console.log(req.method,req.url)
    let client = new Client(req.body);
	if(req.body.password == req.body.repass){
        client.logged=1;
		client.save()
        .then(resp => {
            user=client._id
            res.status(200).json(resp);
            console.log(resp);
        })
        .catch(err => {
            res.status(400).send('Adding new client failed');
        });
	}
	else{
	res.status(420).json({'Client':'Password doesnt match'});
	}
};


//Client login validation
exports.client_login = function(req, res) {
Client.updateOne({username:req.body.username,pass:req.body.pass, logged:1},
    function(err, resp) {
        if (err) {
            res.json(err);
        } else {
                Client.find({email:req.body.username,password:req.body.pass},function(err, response) {
                    if (err) {
                        console.log(err);
                    } else {
                        if(response.length==0){
                            res.status(420).json("User doesn't exist")
                            console.log(response);
                        }
                        else
                        {
                        logged=1;
                        user=response[0]._id;
                        res.json(response[0]);
                        console.log(user)
                        }
                    }
                });
        }
    });
 };

 //place an order
exports.place_order = function(req, res){
    console.log(req.method,req.url)
    // let products = [], id =null;
    // let cart = JSON.parse(req.body.cart);
    // if(!cart) return res.json(products)
    // for (var i=0; i<DataCue.products.length; i++){
    //     id = data.products[i].qty = cart[id]
    //     products.push(data.products[i]);
    // }
    // return res.json(products);
    for (var i=0; i<req.body.cart.length; i++){
        let order = new Order(req.body);
        order.buyer=user;	
	    order.save()
        .then(resp => {
            //user=client._id
            res.status(200).json(resp);
            console.log(resp);
        })
        .catch(err => {
            res.status(400).send('Placing order failed');
        });
    }
    
    
        
 };
 