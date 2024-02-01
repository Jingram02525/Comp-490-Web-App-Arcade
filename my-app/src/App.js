import React from 'react';
import './App.css';
import RepHeader from './components/RepHeader';
import RepMain from './components/RepMain';
import RepFooter from './components/RepFooter';
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
