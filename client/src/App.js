import React from 'react';
// import HomePage from './pages/homePage/homePage';
import ProfilePage from './pages/profilePage/profilePage'
// import FeedPage from './pages/feedPage/feedPage'
import Header from './components/headerComponent/headerComponent'

import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header/>
      {/* <HomePage/> */}
      {/* <FeedPage/> */}
      <ProfilePage/>
    </React.Fragment>
  )
}

export default App;
