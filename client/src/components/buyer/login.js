import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      password: "",
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
      
    const { user, password } = this.state;

    axios
        .post('http://localhost:8082/buyers/login', 
            {
                "username":user,
                "pass":password
            }
			,
        { withCredentials: true }
      )
      .then(response => {
        if (response.status === 200 ) {
          //this.props.handleLogin(response.data);
            this.props.history.push("/buyer-main");
        }
       
        console.log(response.data)
      })
      .catch(error => {
        console.log("registration error", error);
        //if(error.response.status===420)
        this.setState({
            registrationErrors:"Enter correct Password!"
          });
      });
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <br/><br/><br/><br/>

      <div  className="row" style={{color:"#4a4538",backgroundColor:"#edebe6",fontSize:"30px",fontWeight:"lighter"}}>
      <div className="col-md-2"></div>
      <div className="col-md-8"><br/>
        
            <div className="display-4">Login Form</div><br/>
        
                <form className="mx-auto d-block" onSubmit={this.handleSubmit}>
        <div className="form-group">
        <label>Username:</label>
          <input
            type="text"
            name="user"
            placeholder="Enter username (email)"
            className="form-control"
            value={this.state.user}
            onChange={this.handleChange}
            required
          />
          </div><br/>
        <div className="form-group">
        <label>Password:</label>
          <input
            type="text"
            name="password"
            placeholder="Enter password"
            className="form-control"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          </div><br/>
       

        <button className="btn btn-primary" type="submit">Login</button><br/>

        <h2><span className="badge badge-secondary">{this.state.registrationErrors}</span></h2>
        </form>
        <br/>
      </div>
      </div>
      
      </div>
    );
  }
}