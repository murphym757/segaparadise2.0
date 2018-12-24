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
import lionKingGamePage from './app/components/games/lionKing.js';
import sonic1GamePage from './app/components/games/sonic1.js';
import streetsOfRage2GamePage from './app/components/games/streetsOfRage2.js';
import sonic2GamePage from './app/components/games/sonic2.js';
import mortalKombatGamePage from './app/components/games/mortalKombat.js';
import pocahontasGamePage from './app/components/games/pocahontas.js';
import mjMoonwalkerGamePage from './app/components/games/mjMoonwalker.js';
import sonicNKnucklesGamePage from './app/components/games/sonicNKnuckles.js';
import toejamNEarlGamePage from './app/components/games/toejamNEarl.js';
import kidChameleonGamePage from './app/components/games/kidChameleon.js';
import ecco1GamePage from './app/components/games/ecco1.js';
import castleMickeyGamePage from './app/components/games/castleMickey.js';
import streetFighter2GamePage from './app/components/games/streetFighter2.js';
import tinyToonsGamePage from './app/components/games/tinyToons.js';
import tmntHyperStoneHeistGamePage from './app/components/games/tmntHyperStoneHeist.js';


render(
    <Router>
        <Switch>
            <Route exact path="/" component={MainSource} />
            <Route exact path="/games/1" component={aladdinGamePage} />
            <Route exact path="/games/2" component={lionKingGamePage} />
            <Route exact path="/games/3" component={sonic1GamePage} />
            <Route exact path="/games/4" component={streetsOfRage2GamePage} />
            <Route exact path="/games/5" component={sonic2GamePage} />
            <Route exact path="/games/6" component={mortalKombatGamePage} />
            <Route exact path="/games/7" component={pocahontasGamePage} />
            <Route exact path="/games/8" component={mjMoonwalkerGamePage} />
            <Route exact path="/games/9" component={sonicNKnucklesGamePage} />
            <Route exact path="/games/10" component={toejamNEarlGamePage} />
            <Route exact path="/games/11" component={kidChameleonGamePage} />
            <Route exact path="/games/12" component={ecco1GamePage} />
            <Route exact path="/games/13" component={castleMickeyGamePage} />
            <Route exact path="/games/14" component={streetFighter2GamePage} />
            <Route exact path="/games/15" component={tinyToonsGamePage} />
            <Route exact path="/games/16" component={tmntHyperStoneHeistGamePage} />
        </Switch>
    </Router>,
    document.getElementById("app")
   );