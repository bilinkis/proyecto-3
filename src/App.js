import './App.css';
import Header from '../src/components/header/Header';
import Tarjeta from '../src/components/tarjeta/Tarjeta';
import Footer from '../src/components/footer/Footer';
import React from 'react';

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
