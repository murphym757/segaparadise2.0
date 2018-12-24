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

var _toejamNEarl = _interopRequireDefault(require("./app/components/games/toejamNEarl.js"));

var _kidChameleon = _interopRequireDefault(require("./app/components/games/kidChameleon.js"));

var _ecco = _interopRequireDefault(require("./app/components/games/ecco1.js"));

var _castleMickey = _interopRequireDefault(require("./app/components/games/castleMickey.js"));

var _streetFighter = _interopRequireDefault(require("./app/components/games/streetFighter2.js"));

var _tinyToons = _interopRequireDefault(require("./app/components/games/tinyToons.js"));

var _tmntHyperStoneHeist = _interopRequireDefault(require("./app/components/games/tmntHyperStoneHeist.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
}), _react.default.createElement(_reactRouterDom.Route, {
  exact: true,
  path: "/games/10",
  component: _toejamNEarl.default
}), _react.default.createElement(_reactRouterDom.Route, {
  exact: true,
  path: "/games/11",
  component: _kidChameleon.default
}), _react.default.createElement(_reactRouterDom.Route, {
  exact: true,
  path: "/games/12",
  component: _ecco.default
}), _react.default.createElement(_reactRouterDom.Route, {
  exact: true,
  path: "/games/13",
  component: _castleMickey.default
}), _react.default.createElement(_reactRouterDom.Route, {
  exact: true,
  path: "/games/14",
  component: _streetFighter.default
}), _react.default.createElement(_reactRouterDom.Route, {
  exact: true,
  path: "/games/15",
  component: _tinyToons.default
}), _react.default.createElement(_reactRouterDom.Route, {
  exact: true,
  path: "/games/16",
  component: _tmntHyperStoneHeist.default
}))), document.getElementById("app"));