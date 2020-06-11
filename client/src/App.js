import React from 'react';
// import HomePage from './pages/homePage/homePage';
import FeedPage from './pages/feedPage/feedPage'
import Header from './components/headerComponent/headerComponent'

import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header/>
      {/* <HomePage/> */}
      <FeedPage/>
    </React.Fragment>
  )
}

export default App;
