import React,{ Fragment } from "react";
import Navbar from "../components/navbar"
import "./home.css"

class Home extends React.Component {
    render() {
      return (
        <Fragment>
          <Navbar /><br />
            <h1>Machinelearning Page</h1>
        </Fragment>
      );
    }
  }

export default Home;