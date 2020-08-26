import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import './style/index.scss';

import HomeExample from './routes/home.example';
import ButtonExample from './routes/button.example';
import IconExample from './routes/icon.example';

const App = () => {
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li>
              <NavLink exact={true} to="/">
                首页
              </NavLink>
            </li>
            <li>
              <NavLink exact={true} to="/button">
                button
              </NavLink>
            </li>
            <li>
              <NavLink exact={true} to="/icon">
                icon
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="content">
          <Switch>
            <Route exact={true} path="/" component={HomeExample} />
            <Route exact={true} path="/button" component={ButtonExample} />
            <Route exact={true} path="/icon" component={IconExample} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
