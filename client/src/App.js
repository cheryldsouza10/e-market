import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Home from './components/home';
//Seller
import SellerRegister from './components/seller/register';
import SellerLogin from './components/seller/login';
import SellerMain from './components/seller/main';
import AddProduct from './components/seller/addProduct';
import ViewProduct from './components/seller/viewProduct';
import ShowDetails from './components/seller/showDetails';
import UpdateProduct from './components/seller/updateProduct';

//Buyer
import BuyerRegister from './components/buyer/register';
import BuyerLogin from './components/buyer/login';
import BuyerMain from './components/buyer/main';
import StaticView from './components/buyer/staticView';
import CartItem from './components/buyer/cartItem';
import Payment from './components/buyer/payment';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          
          <Route path='/seller-register' component={SellerRegister} />
          <Route path='/seller-login' component={SellerLogin} />
          <Route path='/seller-main' component={SellerMain} />
          <Route path='/add-product' component={AddProduct} />
          <Route path='/view-product' component={ViewProduct} />
          <Route path='/show-details/:id' component={ShowDetails} />
          <Route path='/edit-product/:id' component={UpdateProduct} />

          <Route path='/buyer-register' component={BuyerRegister} />
          <Route path='/buyer-login' component={BuyerLogin} />
          <Route path='/buyer-main' component={BuyerMain} />
          <Route path='/static-view' component={StaticView} />
          <Route path='/cart-items' component={CartItem} />
          <Route path='/payment' component={Payment} />
        </div>
      </Router>
    );
  }
}

export default App;