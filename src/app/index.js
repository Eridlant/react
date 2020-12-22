import React from 'react';
// import router from '~s/router.js';
import {observer} from 'mobx-react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import routes from '~/routes';

import Aside from '~c/aside';

import { routesMap } from '~/routes';
import { Link } from 'react-router-dom';

import styles from './app.module.css';

@observer
export default class App extends React.Component{
  render(){
    let routesComponents = routes.map((route) => {
      return <Route path={route.url}
                    component={route.component}
                    exact={route.exact} 
                    key={route.url}
              />;
    });
    return (
      <Router>
        <div className={styles.container}>
          <div className={styles.links}>
            <Aside/>
          </div>
          <Switch>
            {routesComponents}
          </Switch>
        </div>
      </Router>
    )
  }
}


