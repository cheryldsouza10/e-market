import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

const ProductCard = (props) => {
    const  book  = props.book;

    return(
        <div className="card-container">
            
            <div className="desc">
                <h2>{book.name}</h2>
                <p>{book.description}</p>
                <h3>
                <Link to={`/show-details/${book._id}`} className="btn btn-outline-info btn-sm btn-small float-right">
                    Show Product
                </Link><br/><br/>
                </h3> 
            </div>
        </div>
    )
};

export default ProductCard;