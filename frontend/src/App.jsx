import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/templates/Header';
import Logo from './components/templates/Logo';
import Nav from './components/templates/Nav';
import Rotas from './main/Rotas';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './styles/App.css';
import './styles/Calculadora.css'
import './styles/Header.css'
import './styles/Nav.css'
import './styles/Logo.css'
import './styles/UserCrud.css'
import './styles/Home.css'

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <Logo />
        <Nav />
        <Rotas />        
      </div>
    </BrowserRouter>

  );
}

export default App;
