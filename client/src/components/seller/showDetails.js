import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import axios from 'axios';

class ShowDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pro: {}
    };
  }

  componentDidMount() {
     console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/products/'+this.props.match.params.id)
      .then(res => {
        console.log("Print-showDetails-API-response: " + res.data);
        this.setState({
          pro: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowDetails");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('http://localhost:8082/products/'+id)
      .then(res => {
        this.props.history.push("/view-product");
      })
      .catch(err => {
        console.log("Error form ShowDetails_deleteClick");
      })
  };


  render() {

    const product = this.state.pro;
    let BookItem = <div>
      <table className="table table-hover table-dark">
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Name</td>
            <td>{ product.name }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Cost</td>
            <td>{ product.cost }</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Published Date</td>
            <td>{ product.published_date }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Description</td>
            <td>{ product.description }</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="ShowDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/view-product" className="btn btn-outline-warning float-left">
                  Show Product List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Product's Record</h1>
              <p className="lead text-center">
                  View Product's Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { BookItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,product._id)}>Delete Product</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-product/${product._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Product
              </Link>
              <br />
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default ShowDetails;