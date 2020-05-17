import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ProductCard from './productCard';

class ViewProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/products/seller-product')
      .then(res => {
        this.setState({
          books: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowProductList');
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
          <ProductCard book={book} key={k} />
      );
    }
      return (
        <div className="ViewProduct">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <br />
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
  }


export default ViewProduct;