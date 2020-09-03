import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import './style/index.scss';

import routes from './routes/index.example';

const App = () => {
  return (
    <div>
      <Router>
        <nav>
          <ul>
            {
              routes.map(route => (
                <li key={route.to}>
                  <NavLink to={route.to} exact={route.exact}>{route.title}</NavLink>
                </li>
              ))
            }
          </ul>
        </nav>
        <div className="content">
          <Switch>
            {
              routes.map(route => (
                <Route key={route.title} path={route.to} exact={route.exact} component={route.component}/>
              ))
            }
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
