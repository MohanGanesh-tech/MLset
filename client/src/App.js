import { Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import Login from "./user/auth/login";
import Signup from "./user/auth/signup";
import Home from "./user/home/home";
import Admin from "./admin/auth/admin";
import Machinelearning from "./user/home/machinelearning";

class App extends Component {
  render() {
   return (
     <div>
       <Switch>
         <Route exact path="/"><Login /></Route>
         <Route exact path="/signup"><Signup /></Route>
          <Route exact path="/home"><Home /></Route>
         <Route exact path="/machinelearning"><Machinelearning /></Route>
         <Route exact path="/admin"><Admin /></Route>
       </Switch>
     </div>
   );
 }
}

export default App;


