import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Home/Home';
import About from './About/About';
import Navigation from './Navigation/Navigation'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path='/about' component={About} />
        <Route path="/:pageNumber" component={Home} />
        <Route path={'/' || '/1'} component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
