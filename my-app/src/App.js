import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import {BrowserRouter as MyRouter, Route, Switch} from 'react-router-dom';
import { GbaProvider } from 'react-gbajs'

function App() {
  return (
    <>
      <Navbar/>
      <Main/>
      <GbaProvider >

      </GbaProvider>
      <Footer/>
    </>
  );
}

export default App;
