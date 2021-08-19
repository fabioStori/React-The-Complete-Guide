import Layout from 'components/layout/layout/Layout';
import FavoritesPage from 'pages/favorites/Favorites';
import AllMeetupsPage from 'pages/meetups/AllMeetups';
import NewMeetupPage from 'pages/meetups/NewMeetup';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Layout>
      {/* <MainNavigation></MainNavigation> */}
      <Switch>
        {/* defines that only one route should be rendered */}
        <Route path="/" exact={true}>
          {/* exact defines that the path match should be exact */}
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
