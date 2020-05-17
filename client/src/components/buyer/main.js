import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
 
 
class Main extends Component {
   constructor(props) {
       super(props)
  
       this.state = {
            on:true,
            page:""
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
         .get("http://localhost:8082/buyers/logout", { withCredentials: true })
         .then(response => {
           //this.props.loggedOut();
           this.props.history.push("/");
         })
         .catch(error => {
           console.log("logout error", error);
         });
     }
    
   render() {
       return (
           <div>
               <div className="container-fluid">
               <button className="btn btn-outline-warning" onClick={this.handleClick}>
                  Logout
                </button>
               </div>

               <Link to="/static-view" className="btn btn-outline-warning">
                  View Product
              </Link>

              <Link to="/cart" className="btn btn-outline-warning">
                  Cart
              </Link>
           </div>
       )
   }
}
 
export default Main
 
