import React from 'react';
import './App.css';
import RepHeader from './components/RepHeader';
import RepMain from './components/RepMain';
import RepFooter from './components/RepFooter';
import {BrowserRouter as MyRouter, Route, Switch} from 'react-router-dom';
import { GbaProvider } from 'react-gbajs'

function App() {
  return (
    <>
      <RepHeader/>
      <RepMain/>
      <GbaProvider >

      </GbaProvider>
      <RepFooter/>
    </>
  );
}

export default App;
