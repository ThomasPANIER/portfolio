//import logo from './logo.svg';
import './App.css';

import Nav from './components/layout/nav/Nav';

import React from "react";
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
        {/* <main className="container fluid">
          <Switch>
            <Route path="/">
              < />
            </Route>
            <Route path="/">
              < />
            </Route>
            <Route path="/">
              <Conditions />
            </>
            <Route path="/news">
              < />
            </Route>
            <Route path="/">
              < />
            </Route>
          </Switch>
        </main> */}
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
