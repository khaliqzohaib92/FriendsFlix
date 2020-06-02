import React from "react";
import Greeting from "./greeting";
import {Route} from 'react-router-dom'

const App = () => (
  <div>
    <h1>FriendsFlix</h1>
    <Route path='/' component={Greeting}/> 
  </div>
);

export default App;