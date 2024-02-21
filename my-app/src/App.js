import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import {BrowserRouter as MyRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <>
      <RepHeader/>
      <RepMain/>
      <RepFooter/>
    </>
  );
}

export default App;
