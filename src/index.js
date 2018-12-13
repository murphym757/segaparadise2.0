import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import MainSource from './app/components/main.js';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import bootstrapGrid from '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import bootstrapJs from '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './app/assets/styles/styles.scss';
import fontStyles from './app/assets/styles/fonts.scss';

render(
    <Router>
     <Switch>
      <Route exact path="/" component={MainSource} />
     </Switch>
    </Router>,
    document.getElementById("app")
   );