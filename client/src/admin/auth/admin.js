import React from "react";
import "./login.css"
import logo from "../assets/ml.jpg"

class Login extends React.Component {

  async onSubmitForm(e) {
    e.preventDefault();
  
    try {
      const data = {
        "email": e.target.elements.email.value,
        "password": e.target.elements.password.value,
    }
      const response = await fetch("http://192.168.43.93:8000/adminlogin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      console.log(response);
      window.location = "/home";

    } catch (err) {
      console.error(err.message);
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

                <h3>Admin Login</h3>

                <form onSubmit={this.onSubmitForm}>
                    <input type="text" id="email" className="fadeIn second" name="email" placeholder="email" />
                    <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
                    <input type="submit" className="fadeIn fourth" value="Log In" />
                </form>

            </div>
            </div>
        </div>
      );
    }
  }

  export default Login;