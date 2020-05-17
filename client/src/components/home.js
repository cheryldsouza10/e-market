import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Home extends Component {
    render(){
        return(
            <div class="container-fluid">
            <Link to="/seller-register" className="btn btn-outline-warning">
                  GET STARTTED (Seller)
            </Link>
            <h1> Already have an account? </h1>
            <Link to="/seller-login" className="btn btn-outline-warning">
                  Login
            </Link> <br/> <br/>

            <Link to="/buyer-register" className="btn btn-outline-warning">
                  GET STARTTED (Buyer)
            </Link>
            <h1> Already have an account? </h1>
            <Link to="/buyer-login" className="btn btn-outline-warning">
                  Login
            </Link>
            </div>
        );
    }
}

export default Home;