
// src/App.js
import React from 'react';
import Webroutes from './Routes/Webroutes';
import Header from "./Components/Header/Header";
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Webroutes />
      <Footer/>
    </div>
  );
};

export default App;
