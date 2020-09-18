import React from 'react';
import './App.css';

import { GlobalProvider } from "./context/GlobalState";

import { Home } from "./components/pages/home";

function App() {
  return (

    <GlobalProvider>
      <div className="App">
        <Home />
      </div>
    </GlobalProvider>


  );
}

export default App;
