import React from 'react';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Home/Home';
import About from './About/About';
import Navigation from './Navigation/Navigation'

import { Container } from 'reactstrap';
import './App.scss';

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path='/about' component={About} />
          <Route path="/:pageNumber" component={Home} />
          <Route path={'/' || '/1'} component={Home} />
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default App;
