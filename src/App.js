
import React from 'react';

import './App.css';
import './customheader.css';
import './customcontact.css';
import './customproject.css';

import Logo from './Logo';
import Header from './components/layout/header/Header';
import Nav from './components/layout/nav/Nav';
import Biographie from './components/biographie/Biographie';
import Apprentissages from './components/apprentissages/Apprentissages';
import Mesprojets from './components/mesprojets/Mesprojets';
//import Chifoumi from './components/mesprojets/projet/chifoumi/Chifoumi';
import Contact from './components/contact/Contact';
import Footer from './components/layout/footer/Footer';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Nav />
        <Header />
        <main className="container-fluid">
          <Switch>
            <Route path='/biographie'>
              <Biographie />
            </Route>
            <Route path='/apprentissages'>
              <Apprentissages />
            </Route>
            <Route path='/mesprojets'>
              <Mesprojets />
            </Route>
              {/* <Switch>
                <Route path='/mesprojets/chifoumi'>
                  <Chifoumi />
                </Route>
              </Switch> */}
            {/* <Route path='/'>
              < />
            </Route> */}
            <Route path='/'>
              <Logo />
            </Route>
          </Switch>
        </main>
      </Router>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
