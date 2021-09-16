import './App.css';
import React from 'react';
import Header from './components/header/header';
import Container from '../src/components/container/Container';
import Footer from '../src/components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


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
