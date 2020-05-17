import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';

import ProductCard from './productCard';
import CartItem from './cartItem';

class StaticView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      items: [],
      value: false,
      z: true
    };
    //console.log(this.props);
    this.AddtoCart = this.AddtoCart.bind(this);
    this.handleClick = this.handleClick.bind(this);
    //this.unhandleClick = this.unhandleClick.bind(this);
  }

  AddtoCart(x){
    this.setState({
      items: this.state.items.concat(x)
    }, (y => console.log("View"+this.state.items)) );
  }

  handleClick(x){
    //let z = true;
    if(this.state.value == true){
      this.setState({z: false})
    }
    else{
      this.setState({z: true})
    }
    this.setState({
      value: this.state.z}, 
      (y => console.log("Value"+this.state.value)) );
    }
    

  componentDidMount() {
    axios
      .get('http://localhost:8082/products')
      .then(res => {
        this.setState({
          books: res.data
        })
        //console.log(this.state.books);
      })
      .catch(err =>{
        console.log('Error from ShowProductList (Static view)');
      })
  };


  render() {
    const books = this.state.books;
    console.log("PrintProduct: " + books);
    let bookList;

    if(!books) {
      bookList = "There is no product record!";
    } else {
      bookList = books.map((book, k) =>
        <div>
          <ProductCard book={book} key={k} a={this.AddtoCart.bind(this)}/>
        </div>
      );
    }

      let cartList;
      
      console.log(this.state.value)
      if (!this.state.value) {
        return (
          <div className="ViewProduct">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <br />
            
                  <button onClick={this.handleClick} className="btn btn-outline-warning float-right">
                    View Cart
                  </button>
                              
                  <h2 className="display-4 text-center">Product List</h2>
                </div> 
              </div>
    
              <div className="list">
                  {bookList}
              </div>
            </div>
          </div>
        );
        }
      else {
        cartList = <CartItem pro={this.state.items}  /> 
        return(
          <div>
            <button onClick={this.handleClick} className="btn btn-outline-warning float-right">
                    View Products
                  </button>
          {cartList}
          </div>
        );
        
      }
    
      
    } 
  }


export default StaticView;