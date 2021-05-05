
import React from "react";
//import logo from './logo.svg';
import './App.css';

import Nav from './components/layout/nav/Nav';
import Biographie from './components/biographie/Biographie';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Router>
        <Nav />
        <main className="container fluid">
          <Switch>
            <Route path="/biographie">
              <Biographie />
            </Route>
            {/* <Route path="/">
              < />
            </Route> */}
            {/* <Route path="/">
              < />
            </Route> */}
            {/* <Route path="/">
              < />
            </Route> */}
            {/* <Route path="/">
              < />
            </Route> */}
          </Switch>
        </main>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
