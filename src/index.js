import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import MainSource from './app/components/main.js';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import bootstrapGrid from '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import bootstrapJs from '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './app/assets/styles/styles.scss';
import fontStyles from './app/assets/styles/fonts.scss';
import gridStyles from './app/assets/styles/grid.scss';

import aladdinGamePage from './app/components/games/aladdin.js';

render(
    <Router>
     <Switch>
      <Route exact path="/" component={MainSource} />
      <Route exact path="/games/1" component={aladdinGamePage} />
     </Switch>
    </Router>,
    document.getElementById("app")
   );