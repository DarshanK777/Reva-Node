import React from 'react';
import HomePage from './pages/homePage/homePage';
import Header from './components/headerComponent/headerComponent'

import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <HomePage/>
    </React.Fragment>
  )
}

export default App;
