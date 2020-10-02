import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar } from './Components/Navbar';
import { ModalCard } from './Components/CreateCard';
import { Cards } from './Components/Card';

function App() {
  return (
    <>
 <NavBar />
 <ModalCard />
 <Cards />
 </>
  );
}

export default App;
