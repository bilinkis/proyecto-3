import './App.css';
import React from 'react';
import Header from './components/header/Header';
import Tarjeta from '../src/components/tarjeta/Tarjeta';
import Footer from '../src/components/footer/Footer';


function App() {
  return (
    <React.Fragment>
      <Header/>
      <Tarjeta/>
      <Footer/>
      </React.Fragment>
  );
}

export default App;
