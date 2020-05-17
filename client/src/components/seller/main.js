import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
 
 
class Main extends Component {
   constructor(props) {
       super(props)
  
       this.state = {
            on:true,
            page:"",

            orders: []
       }
       this.handleClick = this.handleClick.bind(this);
       this.changeview= this.changeview.bind(this);
       this.view= this.view.bind(this);
   }
  
   changeview()
   {
       this.setState({ on: false });
       console.log("hello");
   }
   view()
   {
       this.setState({ on: false });
       console.log("hello 2");
   }
   handleClick() {
      
       axios
         .get("http://localhost:8082/sellers/logout", { withCredentials: true })
         .then(response => {
           //this.props.loggedOut();
           this.props.history.push("/");
         })
         .catch(error => {
           console.log("logout error", error);
         });
     }

     componentDidMount() {
        axios
          .get('http://localhost:8082/orders')
          .then(res => {
            this.setState({
              orders: res.data
            })
            console.log(this.state.orders);
          })
          .catch(err =>{
            console.log('Error from Main (seller)');
          })
      };
    
   render() {
       return (
           <div>
               <div className="container-fluid">
               <button className="btn btn-outline-warning" onClick={this.handleClick}>
                  Logout
                </button>
               </div>

               <Link to="/add-product" className="btn btn-outline-warning">
                  Add Product
              </Link>

              <Link to="/view-product" className="btn btn-outline-warning">
                  View Product
              </Link>
           </div>
       )
   }
}
 
export default Main
 
