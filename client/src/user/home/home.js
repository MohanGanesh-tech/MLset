import React,{ Fragment } from "react";
import Navbar from "../components/navbar"
import "./home.css"

class Home extends React.Component {
    render() {
      return (
        <Fragment>
          <Navbar /><br />
          <div className="homeimage">
            <h1 className="landingtxt">not Super</h1>
            <button className="btncenter1">Getting Started</button>
          </div>
        </Fragment>
      );
    }
  }

export default Home;