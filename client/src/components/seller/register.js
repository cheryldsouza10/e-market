import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      phone: null,
      email:"",
      password: "",
      password_confirmation: "",
      registrationErrors: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
      
    const { username, phone, email, password, password_confirmation} = this.state;

    axios
        .post('http://localhost:8082/sellers/add', 
            {
                "name":username,
                "phone": phone,
                "email":email,
                "password":password,
                "repass":password_confirmation
            },
        { withCredentials: true }
      )
      .then(response => {
        if (response.status === 200) {
            //this.props.handleLogin(response.data);
            this.props.history.push("/seller-main");           
        }
       
        console.log(response.data)
      })
      .catch(error => {
        console.log("Registration error", error);
        if(error.response.status===420)
        this.setState({
            registrationErrors:"Enter correct Password!"
          });
      });
    event.preventDefault();
  }

  render() {
    return (
      <div className="container" style={{}}>
        <Link to="/seller-login" className="btn btn-outline-warning float-right">
                  Login
        </Link>
        <br/><br/><br/><br/>
        
        <div className="row" style={{color:"#4a4538",backgroundColor:"#edebe6",fontSize:"30px",fontWeight:"lighter"}}>
          
          <div className="col-md-2"></div>
          <div className="col-md-8"><br/>
          
            <div className="display-4">Registration Form</div><br/>
            
        <form className="mx-auto d-block" onSubmit={this.handleSubmit}>
        <div className="form-group">
        <label>Username:</label>
          <input
            type="text"
            name="username"
            className="form-control"
            placeholder="Enter username"
            value={this.state.username}
            onChange={this.handleChange}
            required
          />
          </div>

          <div className="form-group">
          <label>Phone number:</label>
          <input
            type="text"
            name="phone"
            className="form-control"
            placeholder="Enter phone number"
            value={this.state.phone}
            onChange={this.handleChange}
            required
          />
          </div>

          <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            name="email"
            className="form-control"
            placeholder="Enter email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          </div>


          <div className="form-group">
            <label>Password:</label>
          <input
            type="text"
            name="password"
            className="form-control"
            placeholder="Enter password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          </div>

          <div className="form-group">
            <label>Password confirmation:</label>
          <input
            type="text"
            name="password_confirmation"
            className="form-control"
            placeholder="Re-enter password"
            value={this.state.password_confirmation}
            onChange={this.handleChange}
            required
          />
          </div>

          <button className="btn btn-primary" type="submit">Register</button><br/>

          <h2><span className="badge badge-secondary">{this.state.registrationErrors}</span></h2>
          <br/>

        </form>
        </div>
        </div>
        
      </div>
    );
  }
}