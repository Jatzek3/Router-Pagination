import React from 'react';
import './App.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

import AboutUs from './Components/AboutUs/AboutUs'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'



function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <hr></hr>
      <AboutUs />
    </div>
  );
}

export default App;
