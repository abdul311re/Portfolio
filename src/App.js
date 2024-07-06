import React from "react";
import Heropage from "./Pages/Hero/Heropage";
import Header from "./Components/Header/Header";
import './App.css';
import Mission from "./Components/Mission/Mission";

function App() {
  return (<>
    <div className="App">
      <Header/>
      <Heropage/>
      <Mission />
    </div>
  </>);
}

export default App;
