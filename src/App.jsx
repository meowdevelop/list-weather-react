import * as React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import {
  WeatherComponent,
} from './pages';

const App = ({ store }) => (
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={WeatherComponent} />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>
);

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
