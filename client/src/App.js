import React from 'react';
// import HomePage from './pages/homePage/homePage';
// import ProfilePage from './pages/profilePage/profilePage'
// import FeedPage from './pages/feedPage/feedPage'
// import SettingsPage from './pages/settingsPage/settingsPage'
// import PostDropPage from './pages/postPage/postDropPage.jsx'
// import DetailsPage from './pages/detailsPage/detailsPage'
import NotificationPage from './pages/notificationPage/notificationPage.jsx'
import Header from './components/headerComponent/headerComponent'

import './App.scss';

function App() {
  return (
    <React.Fragment>
      <div id="bg"></div>
      
      <Header/>
      {/* <HomePage/> */}
      {/* <FeedPage/> */}
      {/* <ProfilePage/> */}
      {/* <SettingsPage/> */}
      {/* <PostDropPage/> */}
      {/* <DetailsPage/> */}
      <NotificationPage/>
    </React.Fragment>
  )
}

export default App;
