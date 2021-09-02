import './App.css';
import React from 'react';
import Header from './components/header/Header';
import Container from '../src/components/container/Container';
import Footer from '../src/components/footer/Footer';


function App() {
  return (
    <React.Fragment>
      <Header/>
      <Container/>
      <Footer/>
      </React.Fragment>
  );
}

export default App;
