import React from "react";
import logo from  "../assets/ml.jpg"

class Navbar extends React.Component {
    render() {
      return (
        <div>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="/home">
          <img src={logo} width="30" height="30" class="d-inline-block align-top" alt="" style={{marginLeft: 20 + 'px'}}/> MLset</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="/home">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/machinelearning">Machine Learning</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">Docs</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">About Us</a>
                </li>
                {/* <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown link
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </li> */}
              </ul>
            </div>
          </nav>
        </div>
      );
    }
  }

  export default Navbar;