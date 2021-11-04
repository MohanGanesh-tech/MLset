import React from "react";
import "./login.css"
import logo from "../assets/ml.jpg"

class Signup extends React.Component {

  async onSubmitForm(e) {
    e.preventDefault();
    
  if(String(e.target.elements.password.value) === String(e.target.elements.confirm_password.value)){
    try {
      const data = {
        "username" : e.target.elements.email.value,
        "first_name" : e.target.elements.firstname.value,
        "last_name" : e.target.elements.lastname.value,
        "email" : e.target.elements.email.value,
        "password": e.target.elements.password.value,
   }

      await fetch("http://localhost/accounts/user_signup/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
      .then(response=>response.json())
      .then(data=>{ console.log(data); })
      ;

      // window.location = "/";

    } catch (err) {
      console.error(err.message);
    }
  }
  else{
    console.log("Confirm Password is not matching")
  }
  }

    render() {
      return (
        <div className="bgimage2">
            <div className="wrapper fadeInDown">
            <div id="formContent">
              <br />

                <div className="fadeIn first">
                  <img src={logo} id="icon" alt="User Icon" width="20px" height="150px" />
                </div>
              <br />


                <form onSubmit={this.onSubmitForm}>
                    <input type="text" id="firstname" className="fadeIn second" name="firstname" placeholder="firstname" />
                    <input type="text" id="lastname" className="fadeIn second" name="lastname" placeholder="lastname" />
                    <input type="text" id="email" className="fadeIn second" name="email" placeholder="email" />
                    {/* <input type="text" id="phone" className="fadeIn second" name="phone" placeholder="phone" /> */}
                    <input type="text" id="password" className="fadeIn third" name="password" placeholder="password" />
                    <input type="text" id="confirm password" className="fadeIn third" name="confirm_password" placeholder="confirm password" />
                    <input type="submit" className="fadeIn fourth" value="Sign In" />
                </form>

                <div id="formFooter">
                 <a className="underlineHover" href="/">Login</a>
                </div>

            </div>
            </div>
        </div>
      );
    }
  }

  export default Signup;