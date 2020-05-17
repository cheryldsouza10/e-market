import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

class ProductCard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            item: ''
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        //console.log(e)
        alert("You sure?");    
        this.props.a(this.props.book._id);
        e.preventDefault();
    }
    


    render(){
        return(
            <div className="card-container">
            <div className="desc">
                <h2>{this.props.book.name}</h2>
                <p> {this.props.book.description} </p>
                <p> {this.props.book.cost} </p>
                <button onClick={this.handleClick} className="btn btn-outline-warning float-right">
                    Add to Cart
                </button>
            </div>
            </div>
        )
    }
};

export default ProductCard;