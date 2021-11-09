import React from "react";
import "./login.css"
import logo from "../assets/ml.jpg"
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Login extends React.Component{

  constructor() {
    super();
    this.state = { email: "", password : "", redirect : false };
    this.onInputchange = this.onInputchange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onInputchange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmitForm = async (event) => {
    event.preventDefault();

      await axios.post(["http://localhost:8000/api/token/"], {
        "username" : this.state.email,
        "password" : this.state.password
      })
      .then(response => {
        if (response.data) { 
          localStorage.setItem("user", JSON.stringify(response.data)); 
          this.setState({ redirect: true })
        }
      });
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/home' />
    }
  }

  render() {
    return (
      <div className="bgimage">
          <div className="wrapper fadeInDown">
          <div id="formContent">
            <br />

              <div className="fadeIn first">
                <img src={logo} id="icon" alt="User Icon" width="20px" height="150px" />
              </div>
            <br />
              <form onSubmit={this.onSubmitForm}>
                  <input type="text" id="email" className="fadeIn second" name="email"  value={this.state.email}
                    onChange={this.onInputchange} placeholder="email" />
                  <input type="text" id="password" className="fadeIn third" name="password"  value={this.state.password}
                    onChange={this.onInputchange} placeholder="password" />
                    {this.renderRedirect()}
                  <input type="submit" className="fadeIn fourth" value="Log In" />
              </form>

              <div id="formFooter">
                <a className="underlineHover" href="/Signup">Sign Up</a>
              </div>

          </div>
          </div>
      </div>
    );
  }
}

export default Login;