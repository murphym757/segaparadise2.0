"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _reactRouterDom = require("react-router-dom");

var _main = _interopRequireDefault(require("./app/components/main.js"));

var _bootstrapMin = _interopRequireDefault(require("../node_modules/bootstrap/dist/css/bootstrap.min.css"));

var _bootstrapGridMin = _interopRequireDefault(require("../node_modules/bootstrap/dist/css/bootstrap-grid.min.css"));

var _bootstrapMin2 = _interopRequireDefault(require("../node_modules/bootstrap/dist/js/bootstrap.min.js"));

require("./app/assets/styles/styles.scss");

var _fonts = _interopRequireDefault(require("./app/assets/styles/fonts.scss"));

var _grid = _interopRequireDefault(require("./app/assets/styles/grid.scss"));

var _aladdin = _interopRequireDefault(require("./app/components/games/aladdin.js"));

var _lionKing = _interopRequireDefault(require("./app/components/games/lionKing.js"));

var _sonic = _interopRequireDefault(require("./app/components/games/sonic1.js"));

var _streetsOfRage = _interopRequireDefault(require("./app/components/games/streetsOfRage2.js"));

var _sonic2 = _interopRequireDefault(require("./app/components/games/sonic2.js"));

var _mortalKombat = _interopRequireDefault(require("./app/components/games/mortalKombat.js"));

var _pocahontas = _interopRequireDefault(require("./app/components/games/pocahontas.js"));

var _mjMoonwalker = _interopRequireDefault(require("./app/components/games/mjMoonwalker.js"));

var _sonicNKnuckles = _interopRequireDefault(require("./app/components/games/sonicNKnuckles.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* import toejamNEarlGamePage from './app/components/games/toejamNEarl.js';*/

/* import kidChameleonGamePage from './app/components/games/kidChameleon.js';*/

/* import ecco1GamePage from './app/components/games/ecco1.js';*/

/* import castleMickeyGamePage from './app/components/games/castleMickey.js';*/

/* import streetFighter2GamePage from './app/components/games/streetFighter2.js';*/

/* import tinyToonsGamePage from './app/components/games/tinyToons.js';*/

/* import tmntHyperStoneHeistGamePage from './app/components/games/tmntHyperStoneHeist.js';*/
(0, _reactDom.render)(_react.default.createElement(_reactRouterDom.BrowserRouter, null, _react.default.createElement(_reactRouterDom.Switch, null, _react.default.createElement(_reactRouterDom.Route, {
  exact: true,
  path: "/",
  component: _main.default
}), _react.default.createElement(_reactRouterDom.Route, {
  exact: true,
  path: "/games/1",
  component: _aladdin.default
}), _react.default.createElement(_reactRouterDom.Route, {
  exact: true,
  path: "/games/2",
  component: _lionKing.default
}), _react.default.createElement(_reactRouterDom.Route, {
  exact: true,
  path: "/games/3",
  component: _sonic.default
}), _react.default.createElement(_reactRouterDom.Route, {
  exact: true,
  path: "/games/4",
  component: _streetsOfRage.default
}), _react.default.createElement(_reactRouterDom.Route, {
  exact: true,
  path: "/games/5",
  component: _sonic2.default
}), _react.default.createElement(_reactRouterDom.Route, {
  exact: true,
  path: "/games/6",
  component: _mortalKombat.default
}), _react.default.createElement(_reactRouterDom.Route, {
  exact: true,
  path: "/games/7",
  component: _pocahontas.default
}), _react.default.createElement(_reactRouterDom.Route, {
  exact: true,
  path: "/games/8",
  component: _mjMoonwalker.default
}), _react.default.createElement(_reactRouterDom.Route, {
  exact: true,
  path: "/games/9",
  component: _sonicNKnuckles.default
}))), document.getElementById("app"));