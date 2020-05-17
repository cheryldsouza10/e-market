import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import axios from 'axios';



class AddProduct extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      cost: null,
      description:'',
    };
  }


  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    // this.setState({image:e,target.files[0]})
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      name: this.state.name,
      cost: this.state.cost,
      description: this.state.description
    };
  
    axios
      .post('http://localhost:8082/products/add', data)
      .then(res => {
        this.setState({
          name: '',
          cost: null,
          description:''
        })
        this.props.history.push('/view-product');
      })
      .catch(err => {
        console.log("Error in AddProduct!");
      })

  };

  render() {
    return (
      <div className="AddProduct">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/view-product" className="btn btn-outline-warning float-left">
                  Show Product List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Product</h1>
              <p className="lead text-center">
                  New product details
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Name of the product'
                    name='name'
                    className='form-control'
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='digit'
                    placeholder='Enter the cost'
                    name='cost'
                    className='form-control'
                    value={this.state.cost}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Describe the product'
                    name='description'
                    className='form-control'
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='file'
                    placeholder='Drop the image'
                    //name='published_date'
                    className='form-control'
                    //value={this.state.published_date}
                    onChange={(e) => this.uploadImage(e, "multer")}
                  />
                </div>
                
                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddProduct;