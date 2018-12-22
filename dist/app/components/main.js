"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _axios = _interopRequireDefault(require("axios"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var proxyUrl = "https://cors-anywhere.herokuapp.com/";
var segaGameUrl = "https://www.giantbomb.com/api/game/";
var GiantBombAPI = "/?api_key=7198a87d91743e61f8b82c5a59d616542c2e4a1b";
var dataFormat = "&format=json";

var MainSource =
/*#__PURE__*/
function (_Component) {
  _inherits(MainSource, _Component);

  function MainSource(props) {
    var _this;

    _classCallCheck(this, MainSource);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MainSource).call(this, props));

    _this.componentDidMount = function (e) {
      _this.aladdinGameLink();

      _this.lionKingGameLink();

      _this.sonic1GameLink();

      _this.streetsOfRage2GameLink();

      _this.sonic2GameLink();

      _this.mortalKombatGameLink();

      _this.pocahontasGameLink();

      _this.mjMoonwalkerGameLink();

      _this.sonicNKnucklesGameLink();

      _this.toejamNEarlGameLink();

      _this.kidChameleonGameLink();

      _this.ecco1GameLink();

      _this.castleMickeyGameLink();

      _this.streetFighter2GameLink();

      _this.tinyToonsGameLink();

      _this.tmntHyperStoneHeistGameLink();
    };

    _this.aladdinGameLink = function (e) {
      var aladdinGUID = "3030-19944";

      _axios.default.get(proxyUrl + segaGameUrl + aladdinGUID + GiantBombAPI + dataFormat).then(function (res) {
        _this.setState({
          aladdin: {
            gameName: res.data.results.name,
            gameImage: res.data.results.images[4].super_url
          }
        });

        console.log(res.data);
      }).catch(function (e) {
        console.log("error", e);
      });
    };

    _this.lionKingGameLink = function (e) {
      var lionKingGUID = "3030-9186";

      _axios.default.get(proxyUrl + segaGameUrl + lionKingGUID + GiantBombAPI + dataFormat).then(function (res) {
        _this.setState({
          lionKing: {
            gameName: res.data.results.name,
            gameImage: res.data.results.images[11].super_url
          }
        });

        console.log(res.data);
      }).catch(function (e) {
        console.log("error", e);
      });
    };

    _this.sonic1GameLink = function (e) {
      var sonic1GUID = "3030-2465";

      _axios.default.get(proxyUrl + segaGameUrl + sonic1GUID + GiantBombAPI + dataFormat).then(function (res) {
        _this.setState({
          sonic1: {
            gameName: res.data.results.name,
            gameImage: res.data.results.images[8].super_url
          }
        });

        console.log(res.data);
      }).catch(function (e) {
        console.log("error", e);
      });
    };

    _this.streetsOfRage2GameLink = function (e) {
      var SOR2SuperIMG = "https://static.giantbomb.com/uploads/scale_super/9/93770/2374569-genesis_streetsofrage2.jpg";
      var streetsOfRage2GUID = "3030-18122";

      _axios.default.get(proxyUrl + segaGameUrl + streetsOfRage2GUID + GiantBombAPI + dataFormat).then(function (res) {
        _this.setState({
          streetsOfRage2: {
            gameName: res.data.results.name,
            gameImage: SOR2SuperIMG
          }
        });

        console.log(res.data);
      }).catch(function (e) {
        console.log("error", e);
      });
    };

    _this.sonic2GameLink = function (e) {
      var sonic2SuperIMG = "https://static.giantbomb.com/uploads/scale_super/9/93770/2374503-genesis_sonicthehedgehog2.jpg";
      var sonic2GUID = "3030-1662";

      _axios.default.get(proxyUrl + segaGameUrl + sonic2GUID + GiantBombAPI + dataFormat).then(function (res) {
        _this.setState({
          sonic2: {
            gameName: res.data.results.name,
            gameImage: sonic2SuperIMG
          }
        });

        console.log(res.data);
      }).catch(function (e) {
        console.log("error", e);
      });
    };

    _this.mortalKombatGameLink = function (e) {
      var mortalKombatGUID = "3030-15743";

      _axios.default.get(proxyUrl + segaGameUrl + mortalKombatGUID + GiantBombAPI + dataFormat).then(function (res) {
        _this.setState({
          mortalKombat: {
            gameName: res.data.results.name,
            gameImage: res.data.results.images[5].super_url
          }
        });

        console.log(res.data);
      }).catch(function (e) {
        console.log("error", e);
      });
    };

    _this.pocahontasGameLink = function (e) {
      var pocahontasGUID = "3030-15489";

      _axios.default.get(proxyUrl + segaGameUrl + pocahontasGUID + GiantBombAPI + dataFormat).then(function (res) {
        _this.setState({
          pocahontas: {
            gameName: res.data.results.name,
            gameImage: res.data.results.images[1].super_url
          }
        });

        console.log(res.data);
      }).catch(function (e) {
        console.log("error", e);
      });
    };

    _this.mjMoonwalkerGameLink = function (e) {
      var mjMoonwalkerGUID = "3030-21182";

      _axios.default.get(proxyUrl + segaGameUrl + mjMoonwalkerGUID + GiantBombAPI + dataFormat).then(function (res) {
        _this.setState({
          mjMoonwalker: {
            gameName: res.data.results.name,
            gameImage: res.data.results.images[4].super_url
          }
        });

        console.log(res.data);
      }).catch(function (e) {
        console.log("error", e);
      });
    };

    _this.sonicNKnucklesGameLink = function (e) {
      var sonicNKnucklesGUID = "3030-18115";

      _axios.default.get(proxyUrl + segaGameUrl + sonicNKnucklesGUID + GiantBombAPI + dataFormat).then(function (res) {
        _this.setState({
          sonicNKnuckles: {
            gameName: res.data.results.name,
            gameImage: res.data.results.images[7].super_url
          }
        });

        console.log(res.data);
      }).catch(function (e) {
        console.log("error", e);
      });
    };

    _this.toejamNEarlGameLink = function (e) {
      var toejamNEarlGUID = "3030-13306";

      _axios.default.get(proxyUrl + segaGameUrl + toejamNEarlGUID + GiantBombAPI + dataFormat).then(function (res) {
        _this.setState({
          toejamNEarl: {
            gameName: res.data.results.name,
            gameImage: res.data.results.images[7].super_url
          }
        });

        console.log(res.data);
      }).catch(function (e) {
        console.log("error", e);
      });
    };

    _this.kidChameleonGameLink = function (e) {
      var kidChameleonGUID = "3030-11175";

      _axios.default.get(proxyUrl + segaGameUrl + kidChameleonGUID + GiantBombAPI + dataFormat).then(function (res) {
        _this.setState({
          kidChameleon: {
            gameName: res.data.results.name,
            gameImage: res.data.results.images[2].super_url
          }
        });

        console.log(res.data);
      }).catch(function (e) {
        console.log("error", e);
      });
    };

    _this.ecco1GameLink = function (e) {
      var ecco1GUID = "3030-9286";

      _axios.default.get(proxyUrl + segaGameUrl + ecco1GUID + GiantBombAPI + dataFormat).then(function (res) {
        _this.setState({
          ecco1: {
            gameName: res.data.results.name,
            gameImage: res.data.results.images[3].super_url
          }
        });

        console.log(res.data);
      }).catch(function (e) {
        console.log("error", e);
      });
    };

    _this.castleMickeyGameLink = function (e) {
      var castleMickeyGUID = "3030-9513";

      _axios.default.get(proxyUrl + segaGameUrl + castleMickeyGUID + GiantBombAPI + dataFormat).then(function (res) {
        _this.setState({
          castleMickey: {
            gameName: res.data.results.name,
            gameImage: res.data.results.images[10].super_url
          }
        });

        console.log(res.data);
      }).catch(function (e) {
        console.log("error", e);
      });
    };

    _this.streetFighter2GameLink = function (e) {
      var streetFighter2GUID = "3030-1096";

      _axios.default.get(proxyUrl + segaGameUrl + streetFighter2GUID + GiantBombAPI + dataFormat).then(function (res) {
        _this.setState({
          streetFighter2: {
            gameName: res.data.results.name,
            gameImage: res.data.results.images[8].super_url
          }
        });

        console.log(res.data);
      }).catch(function (e) {
        console.log("error", e);
      });
    };

    _this.tinyToonsGameLink = function (e) {
      var tinyToonsGUID = "3030-9716";

      _axios.default.get(proxyUrl + segaGameUrl + tinyToonsGUID + GiantBombAPI + dataFormat).then(function (res) {
        _this.setState({
          tinyToons: {
            gameName: res.data.results.name,
            gameImage: res.data.results.images[0].super_url
          }
        });

        console.log(res.data);
      }).catch(function (e) {
        console.log("error", e);
      });
    };

    _this.tmntHyperStoneHeistGameLink = function (e) {
      var tmntHyperStoneHeistGUID = "3030-11404";

      _axios.default.get(proxyUrl + segaGameUrl + tmntHyperStoneHeistGUID + GiantBombAPI + dataFormat).then(function (res) {
        _this.setState({
          tmntHyperStoneHeist: {
            gameName: res.data.results.name,
            gameImage: res.data.results.images[1].super_url
          }
        });

        console.log(res.data);
      }).catch(function (e) {
        console.log("error", e);
      });
    };

    _this.state = {
      aladdin: {},
      lionKing: {},
      sonic1: {},
      streetsOfRage2: {},
      sonic2: {},
      mortalKombat: {},
      pocahontas: {},
      mjMoonwalker: {},
      sonicNKnuckles: {},
      toejamNEarl: {},
      kidChameleon: {},
      ecco1: {},
      castleMickey: {},
      streetFighter2: {},
      //GUID = 3030-1096
      tinyToons: {},
      //GUID = 3030-9716 KEEP
      tmntHyperStoneHeist: {} //GUID = 3030-11404

    };
    return _this;
  }

  _createClass(MainSource, [{
    key: "render",
    value: function render() {
      var FooterFont = _styledComponents.default.h6.withConfig({
        displayName: "main__FooterFont",
        componentId: "sc-1ucehs2-0"
      })(["  font-family:'Roboto-Black';"]);

      return _react.default.createElement("div", null, _react.default.createElement("div", {
        class: "container-fluid d-none d-xl-block"
      }, " ", _react.default.createElement("img", {
        class: "logoLargerScreens",
        src: "../src/app/assets/images/SegaParadise2Logo.svg",
        alt: "imageForGrid",
        width: "300"
      }), _react.default.createElement("div", {
        class: "row pt-2 pb-2"
      }, " ", _react.default.createElement("div", {
        class: "container"
      }, _react.default.createElement(_reactRouterDom.Link, {
        class: "homeLink",
        to: "/games/1"
      }, _react.default.createElement("img", {
        src: this.state.aladdin.gameImage,
        class: "rounded homepageThumbnail col-3"
      })), _react.default.createElement("img", {
        src: this.state.lionKing.gameImage,
        class: "rounded homepageThumbnail col-3"
      }), _react.default.createElement("img", {
        src: this.state.sonic1.gameImage,
        class: "rounded homepageThumbnail col-3"
      }), _react.default.createElement("img", {
        src: this.state.streetsOfRage2.gameImage,
        class: "rounded homepageThumbnail col-3"
      }))), _react.default.createElement("div", {
        class: "row pt-2 pb-2"
      }, " ", _react.default.createElement("div", {
        class: "container"
      }, _react.default.createElement("img", {
        src: this.state.sonic2.gameImage,
        class: "homepageThumbnail image-container col-3"
      }), _react.default.createElement("img", {
        src: this.state.mortalKombat.gameImage,
        class: "rounded image-container homepageThumbnail col-3"
      }), _react.default.createElement("img", {
        src: this.state.pocahontas.gameImage,
        class: "rounded homepageThumbnail col-3"
      }), _react.default.createElement("img", {
        src: this.state.mjMoonwalker.gameImage,
        class: "rounded homepageThumbnail col-3"
      }))), _react.default.createElement("div", {
        class: "row pt-2 pb-2"
      }, " ", _react.default.createElement("div", {
        class: "container"
      }, _react.default.createElement("img", {
        src: this.state.sonicNKnuckles.gameImage,
        class: "rounded homepageThumbnail col-3"
      }), _react.default.createElement("img", {
        src: this.state.toejamNEarl.gameImage,
        class: "rounded homepageThumbnail col-3"
      }), _react.default.createElement("img", {
        src: this.state.kidChameleon.gameImage,
        class: "rounded homepageThumbnail col-3"
      }), _react.default.createElement("img", {
        src: this.state.ecco1.gameImage,
        class: "rounded homepageThumbnail col-3"
      }))), _react.default.createElement("div", {
        class: "row pt-2 pb-2"
      }, " ", _react.default.createElement("div", {
        class: "container"
      }, _react.default.createElement("img", {
        src: this.state.castleMickey.gameImage,
        class: "rounded homepageThumbnail col-3"
      }), _react.default.createElement("img", {
        src: this.state.streetFighter2.gameImage,
        class: "rounded homepageThumbnail col-3"
      }), _react.default.createElement("img", {
        src: this.state.tinyToons.gameImage,
        class: "rounded homepageThumbnail col-3"
      }), _react.default.createElement("img", {
        src: this.state.tmntHyperStoneHeist.gameImage,
        class: "rounded homepageThumbnail col-3"
      }))), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("div", {
        class: "container-fluid"
      }, _react.default.createElement("div", {
        class: "grid"
      }), _react.default.createElement("div", {
        class: "mx-auto"
      }, _react.default.createElement(FooterFont, null, "Data provided courtesy of ", _react.default.createElement("img", {
        class: "spGBIcon",
        src: "../src/app/assets/images/segaParadise2GBLogo.png",
        alt: "siteLogoIcon",
        height: "42",
        width: "42"
      })))))), _react.default.createElement("div", {
        class: "container-fluid mobileGrid d-xl-none"
      }, " ", _react.default.createElement("div", {
        class: "container-fluid"
      }, _react.default.createElement("div", {
        class: "card cardFrontPage"
      }, _react.default.createElement("div", {
        class: "row"
      }, " ", _react.default.createElement("div", {
        class: "mx-auto"
      }, _react.default.createElement("img", {
        class: "logoSmallerScreens container",
        src: "../src/app/assets/images/SegaParadise2Logo.svg",
        alt: "imageForGrid"
      }))), _react.default.createElement("div", {
        class: "row"
      }, " ", _react.default.createElement("div", {
        class: "row pt-2 pb-2 mx-auto"
      }, " ", _react.default.createElement("div", {
        class: "container-fluid"
      }, _react.default.createElement(_reactRouterDom.Link, {
        class: "homeLink",
        to: "/games/1"
      }, _react.default.createElement("img", {
        src: this.state.aladdin.gameImage,
        class: "rounded p-0 img-thumbnail homepageThumbnail-mobile col-3"
      })), _react.default.createElement(_reactRouterDom.Link, {
        class: "homeLink pl-2 pr-1",
        to: "/games/1"
      }, _react.default.createElement("img", {
        src: this.state.lionKing.gameImage,
        class: "rounded p-0 img-thumbnail homepageThumbnail-mobile col-3"
      })), _react.default.createElement(_reactRouterDom.Link, {
        class: "homeLink pl-1 pr-2",
        to: "/games/1"
      }, _react.default.createElement("img", {
        src: this.state.sonic1.gameImage,
        class: "rounded p-0 img-thumbnail homepageThumbnail-mobile col-3"
      })), _react.default.createElement(_reactRouterDom.Link, {
        class: "homeLink",
        to: "/games/1"
      }, _react.default.createElement("img", {
        src: this.state.streetsOfRage2.gameImage,
        class: "rounded p-0 img-thumbnail homepageThumbnail-mobile col-3"
      })))), _react.default.createElement("div", {
        class: "row pt-2 pb-2 mx-auto"
      }, " ", _react.default.createElement("div", {
        class: "container-fluid"
      }, _react.default.createElement(_reactRouterDom.Link, {
        class: "homeLink",
        to: "/games/1"
      }, _react.default.createElement("img", {
        src: this.state.sonic2.gameImage,
        class: "rounded p-0 img-thumbnail homepageThumbnail-mobile col-3"
      })), _react.default.createElement(_reactRouterDom.Link, {
        class: "homeLink pl-2 pr-1",
        to: "/games/1"
      }, _react.default.createElement("img", {
        src: this.state.mortalKombat.gameImage,
        class: "rounded p-0 img-thumbnail homepageThumbnail-mobile col-3"
      })), _react.default.createElement(_reactRouterDom.Link, {
        class: "homeLink pl-1 pr-2",
        to: "/games/1"
      }, _react.default.createElement("img", {
        src: this.state.pocahontas.gameImage,
        class: "rounded p-0 img-thumbnail homepageThumbnail-mobile col-3"
      })), _react.default.createElement(_reactRouterDom.Link, {
        class: "homeLink",
        to: "/games/1"
      }, _react.default.createElement("img", {
        src: this.state.mjMoonwalker.gameImage,
        class: "rounded p-0 img-thumbnail homepageThumbnail-mobile col-3"
      })))), _react.default.createElement("div", {
        class: "row pt-2 pb-2 mx-auto"
      }, " ", _react.default.createElement("div", {
        class: "container-fluid"
      }, _react.default.createElement(_reactRouterDom.Link, {
        class: "homeLink",
        to: "/games/1"
      }, _react.default.createElement("img", {
        src: this.state.sonicNKnuckles.gameImage,
        class: "rounded p-0 img-thumbnail homepageThumbnail-mobile col-3"
      })), _react.default.createElement(_reactRouterDom.Link, {
        class: "homeLink pl-2 pr-1",
        to: "/games/1"
      }, _react.default.createElement("img", {
        src: this.state.toejamNEarl.gameImage,
        class: "rounded p-0 img-thumbnail homepageThumbnail-mobile col-3"
      })), _react.default.createElement(_reactRouterDom.Link, {
        class: "homeLink pr-2 pl-1",
        to: "/games/1"
      }, _react.default.createElement("img", {
        src: this.state.kidChameleon.gameImage,
        class: "rounded p-0 img-thumbnail homepageThumbnail-mobile col-3"
      })), _react.default.createElement(_reactRouterDom.Link, {
        class: "homeLink",
        to: "/games/1"
      }, _react.default.createElement("img", {
        src: this.state.ecco1.gameImage,
        class: "rounded p-0 img-thumbnail homepageThumbnail-mobile col-3"
      })))), _react.default.createElement("div", {
        class: "row pt-2 pb-2 mx-auto"
      }, " ", _react.default.createElement("div", {
        class: "container-fluid"
      }, _react.default.createElement(_reactRouterDom.Link, {
        class: "homeLink",
        to: "/games/1"
      }, _react.default.createElement("img", {
        src: this.state.castleMickey.gameImage,
        class: "rounded p-0 img-thumbnail homepageThumbnail-mobile col-3"
      })), _react.default.createElement(_reactRouterDom.Link, {
        class: "homeLink pl-2 pr-1",
        to: "/games/1"
      }, _react.default.createElement("img", {
        src: this.state.streetFighter2.gameImage,
        class: "rounded p-0 img-thumbnail homepageThumbnail-mobile col-3"
      })), _react.default.createElement(_reactRouterDom.Link, {
        class: "homeLink pr-2 pl-1",
        to: "/games/1"
      }, _react.default.createElement("img", {
        src: this.state.tinyToons.gameImage,
        class: "rounded p-0 img-thumbnail homepageThumbnail-mobile col-3"
      })), _react.default.createElement(_reactRouterDom.Link, {
        class: "homeLink",
        to: "/games/1"
      }, _react.default.createElement("img", {
        src: this.state.tmntHyperStoneHeist.gameImage,
        class: "rounded p-0 img-thumbnail homepageThumbnail-mobile col-3"
      }))))), _react.default.createElement("div", {
        class: "row"
      }, " ", _react.default.createElement("div", {
        class: "mx-auto"
      }, _react.default.createElement(FooterFont, null, "Data provided courtesy of ", _react.default.createElement("img", {
        class: "spGBIcon",
        src: "../src/app/assets/images/segaParadise2GBLogo.png",
        alt: "siteLogoIcon",
        height: "42",
        width: "42"
      }))))))));
    }
  }]);

  return MainSource;
}(_react.Component);

exports.default = MainSource;