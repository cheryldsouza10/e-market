import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../App.css';

import Payment from './payment';

class CartItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            items: {},
            cart: [],

            product: '',
            seller: '',
            quantity: null,
            amount: null
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        let x = this.props.pro.map((id, k) =>{
        console.log(id)
        axios
        .get('http://localhost:8082/products/'+id)
        .then(res => {
          this.setState({
            items: res.data,
            cart: this.state.cart.concat(res.data)
          });
          console.log(this.state.items, this.state.cart);
        })
        .catch(err =>{
          console.log('Error from CartItem');
        });
      }); }

      showModal = e => {
        this.setState({
          show: true
        });
      };

      // onChange = e => {
      //   let {name, value} = e.target;
      //   if(name == 'quan') value = value;
      //   this.setState({
      //     [name]: value,
      //     quantity: this.state.quantity.concat(value)
      //   });
      //   console.log(this.state.quantity)
      // };

      onSubmit = e => {
         e.preventDefault();

        alert("Confirm?");
        let x = this.state.cart.map((id,k) => {
          console.log(id);

          const data = {
            product: id._id,
            seller: id.seller[0],
            quantity: 1,
            amount: id.cost
          };
          axios
            .post('http://localhost:8082/orders/add', data)
            .then(res => {
              this.setState({
                product: '',
                seller: '',
                quantity: null,
                amount: null
              })
              //this.props.history.push('/view-product');
            })
            .catch(err => {
              console.log("Error in placing order!");
            })
        })
        alert("DONE!");
      };

    render(){
        let itemList;
        itemList = this.state.cart.map((item, k) =>
        <div>
      <table className="table table-hover table-dark bg-dark">

        <tbody>
          <tr>
            <th scope="row">1</th>
            <th> { item.name } </th>
            <th> { item.cost } </th>
            {/* <th> <input type="number" name="quan" value={this.state.quan} onChange={this.onChange}/>
                Quantity
            </th> */}
            <th> 1 </th>
          </tr>
        </tbody>
      </table>
    </div>
        );

      return(
        <div className="CartItem">
        <div className="container">
          <div className="row">
            {/* <div className="col-md-10 m-auto">
              <br /> <br />
              <button onClick={this.handleClick} className="btn btn-outline-warning float-left">
                  Show Product List
              </button>
            </div> */}
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Product's Record</h1>
              <p className="lead text-center">
                  View Product's Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div className="table table-hover table-dark">
           <thead>
            <tr>
              <th scope="col">Sn. no.</th>
              <th scope="col"> Name </th>
              <th scope="col"> Cost </th>
              <th scope="col"> Quantity </th>
            </tr>
          </thead>
              { itemList }
              <tr>
                <th> </th>
                <th> </th>
                <th> Total </th>
                <th>   </th>
              </tr>
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="submit" className="btn btn-outline-info btn-lg btn-block" onClick={this.onSubmit}>
                    Place Order
              </button>
              <br />
            </div>

          </div>

        </div>
      </div>
        );

    }

}

export default CartItem;