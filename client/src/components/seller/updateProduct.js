import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../App.css';

class UpdateProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      cost: '',
      description: ''
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/products/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, book: res.data})
        this.setState({
          name: res.data.name,
          cost: res.data.cost,
          description: res.data.description
        })
      })
      .catch(err => {
        console.log("Error from UpdateProduct");
      })
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      name: this.state.name,
      cost: this.state.cost,
      description: this.state.description
    };

    axios
      .put('http://localhost:8082/products/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-details/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdateProduct!");
      })
  };


  render() {
    return (
      <div className="UpdateProduct">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/view-product" className="btn btn-outline-warning float-left">
                  Show Product List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Product</h1>
              <p className="lead text-center">
                  Update Product's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="title">Name</label>
              <input
                type='text'
                placeholder='Name of the Product'
                name='name'
                className='form-control'
                value={this.state.name}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="cost">Cost</label>
              <input
                type='text'
                placeholder='Cost'
                name='cost'
                className='form-control'
                value={this.state.cost}
                onChange={this.onChange}
              />
            </div>

            {/* <div className='form-group'>
            <label htmlFor="author">Seller</label>
              <input
                type='text'
                placeholder='Seller'
                name='seller'
                className='form-control'
                value={this.state.seller}
                onChange={this.onChange}
              />
            </div> */}

            <div className='form-group'>
            <label htmlFor="description">Description</label>
              <input
                type='text'
                placeholder='Describe this product'
                name='description'
                className='form-control'
                value={this.state.description}
                onChange={this.onChange}
              />
            </div>

            {/* <div className='form-group'>
            <label htmlFor="published_date">Published Date</label>
              <input
                type='date'
                placeholder='published_date'
                name='published_date'
                className='form-control'
                value={this.state.published_date}
                onChange={this.onChange}
              />
            </div> */}

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Product</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateProduct;