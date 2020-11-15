import React from 'react';
import { HashRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import './style/index.scss';

import routes from './routes';

const App = () => {
  const pageRouteList = routes.map((group) => group.children).flat(1);
  return (
    <div className="app">
      <Router>
        <div id="header">
          <div className="logo">react-axis</div>
        </div>
        <div id="wrapper">
          <nav id="nav">
            {routes.map((group) => (
              <div className="group" key={group.title}>
                <div className="header">
                  <h3>{group.title}</h3>
                </div>
                <div className="children">
                  {group.children.map((route) => (
                    <NavLink key={route.to} className="link" to={route.to} exact={route.exact}>
                      <span className="item">
                        <span className="title-en">{route.titleEn}</span>
                        <span className="title">{route.title}</span>
                      </span>
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
          </nav>
          <div id="content">
            <Switch>
              {pageRouteList.map((route) => (
                <Route key={route.title} path={route.to} exact={route.exact} component={route.component} />
              ))}
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
