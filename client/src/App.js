import React from 'react';
import HomePage from './pages/homePage/homePage';
import ProfilePage from './pages/profilePage/profilePage'
import FeedPage from './pages/feedPage/feedPage'
import SettingsPage from './pages/settingsPage/settingsPage'
import PostDropPage from './pages/postPage/postDropPage.jsx'
import DetailsPage from './pages/detailsPage/detailsPage'
import NotificationPage from './pages/notificationPage/notificationPage.jsx'
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/headerComponent/headerComponent'
// import PrivateRoute from './utils/privateRouteComponent/privateRouteComponent.jsx'
import './App.scss';

function App() {
  return (
    <React.Fragment>
      <div id="bg"></div>
      
      <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/profile' component={ProfilePage} />
          <Route exact path='/feed' component={FeedPage} />
          <Route exact path='/settings' component={SettingsPage} />
          <Route exact path='/post' component={PostDropPage} />
          <Route exact path='/details' component={DetailsPage} />
          <Route exact path='/Notifications' component={NotificationPage} />
        </Switch>
    </React.Fragment>
  )
}

export default App;
