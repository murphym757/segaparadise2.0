"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _axios = _interopRequireDefault(require("axios"));

var _reactMoment = _interopRequireDefault(require("react-moment"));

var _reactEpicSpinners = require("react-epic-spinners");

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
var gameGUID = "3030-9716"; //tinyToons

var tinyToonsGamePage =
/*#__PURE__*/
function (_Component) {
  _inherits(tinyToonsGamePage, _Component);

  function tinyToonsGamePage(props) {
    var _this;

    _classCallCheck(this, tinyToonsGamePage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(tinyToonsGamePage).call(this, props));

    _this.componentDidMount = function (e) {
      setTimeout(function () {
        return _this.setState({
          isLoading: false
        });
      }, 2018);
    };

    _this.componentWillMount = function (e) {
      _this.gameData();
    };

    _this.gameData = function (e) {
      var gameDescription = "Buster's Hidden Treasure is based on the widely popular cartoon show; Tiny Toon Adventures, created by Steven Speilberg. The game  is an action platformer where you play as Buster Bunny and try to defeat Montana Max and stop his plan to enslave his friends and getting away with stealing a large amount of treasure. Buster's quest takes him to a large variety of levels, including a forests, caves, factories, volcanoes, and snow covered mountains, He fights quite a large variety of enemies along the way including  Rats, Bats, bears and other cartoon beasts. Bosses usually take the form of one of Buster's many friends who have been brainwashed to fight against him.";

      var esrbRatingIconE = _react.default.createElement("img", {
        class: "esrbRatingIcon",
        src: "../src/app/assets/images/ratingIcons/esrb_e.png",
        alt: "ratingIcon",
        height: "42",
        width: "42"
      });

      var esrbRatingIconT = _react.default.createElement("img", {
        class: "esrbRatingIcon",
        src: "../src/app/assets/images/ratingIcons/esrb_t.png",
        alt: "ratingIcon",
        height: "42",
        width: "42"
      });

      var esrbRatingIconM = _react.default.createElement("img", {
        class: "esrbRatingIcon",
        src: "../src/app/assets/images/ratingIcons/esrb_m.png",
        alt: "ratingIcon",
        height: "42",
        width: "42"
      }); //Images


      var image1 = _react.default.createElement("img", {
        class: "gridImage",
        src: "https://static.giantbomb.com/uploads/original/0/2628/420547-tiny_20toon_20adventures_000_1rl.jpg",
        alt: "imageForGrid",
        height: "100",
        Width: "100"
      });

      var image2 = _react.default.createElement("img", {
        class: "gridImage",
        src: "https://static.giantbomb.com/uploads/original/11/110964/2290546-secret.jpeg",
        alt: "imageForGrid",
        height: "100",
        Width: "100"
      });

      var image3 = _react.default.createElement("img", {
        class: "gridImage",
        src: "https://static.giantbomb.com/uploads/original/11/110964/2290545-levelend.gif",
        alt: "imageForGrid",
        height: "100",
        Width: "100"
      });

      var image4 = _react.default.createElement("img", {
        class: "gridImage",
        src: "https://static.giantbomb.com/uploads/original/11/110964/2290547-sunset.gif",
        alt: "imageForGrid",
        height: "100",
        Width: "100"
      });

      var image5 = _react.default.createElement("img", {
        class: "gridImage",
        src: "https://static.giantbomb.com/uploads/original/0/2628/420423-1231.png",
        alt: "imageForGrid",
        height: "100",
        Width: "100"
      });

      var image6 = _react.default.createElement("img", {
        class: "gridImage",
        src: "https://static.giantbomb.com/uploads/original/11/110964/2290544-bossdizzy.gif",
        alt: "imageForGrid",
        height: "100",
        Width: "100"
      });

      var image7 = _react.default.createElement("img", {
        class: "gridImage",
        src: "https://static.giantbomb.com/uploads/original/11/110964/2290548-worldmpa.png",
        alt: "imageForGrid",
        height: "100",
        Width: "100"
      });

      var modalImage1 = _react.default.createElement("img", {
        class: "modalImage",
        src: "https://static.giantbomb.com/uploads/original/0/2628/420547-tiny_20toon_20adventures_000_1rl.jpg",
        alt: "imageForModal"
      });

      var modalImage2 = _react.default.createElement("img", {
        class: "modalImage",
        src: "https://static.giantbomb.com/uploads/original/11/110964/2290546-secret.jpeg",
        alt: "imageForModal"
      });

      var modalImage3 = _react.default.createElement("img", {
        class: "modalImage",
        src: "https://static.giantbomb.com/uploads/original/11/110964/2290545-levelend.gif",
        alt: "imageForModal"
      });

      var modalImage4 = _react.default.createElement("img", {
        class: "modalImage",
        src: "https://static.giantbomb.com/uploads/original/11/110964/2290547-sunset.gif",
        alt: "imageForModal"
      });

      var modalImage5 = _react.default.createElement("img", {
        class: "modalImage",
        src: "https://static.giantbomb.com/uploads/original/0/2628/420423-1231.png",
        alt: "imageForModal"
      });

      var modalImage6 = _react.default.createElement("img", {
        class: "modalImage",
        src: "https://static.giantbomb.com/uploads/original/11/110964/2290544-bossdizzy.gif",
        alt: "imageForModal"
      });

      var modalImage7 = _react.default.createElement("img", {
        class: "modalImage",
        src: "https://static.giantbomb.com/uploads/original/11/110964/2290548-worldmpa.png",
        alt: "imageForModal"
      });

      _axios.default.get(proxyUrl + segaGameUrl + gameGUID + GiantBombAPI + dataFormat).then(function (res) {
        _this.setState({
          gameRating: "N/A"
        });

        _this.setState({
          game: {
            gameName: res.data.results.name,
            gameImage: res.data.results.images[0].super_url,
            gameStory: gameDescription,
            gameStoryTitle: "Overview",
            //Developer Data
            gameDeveloper1: res.data.results.developers[0].name,
            gameDeveloperSectionHeader: "Developer:",
            //Genre Data
            gameGenre1: res.data.results.genres[0].name,
            gameGenre2: res.data.results.genres[1].name,
            gameGenreSectionHeader: "Genre:",
            //Release Data
            releaseDate: _react.default.createElement(_reactMoment.default, {
              format: "MMMM Do, YYYY"
            }, res.data.results.original_release_date),
            gameReleaseSectionHeader: "Release Date:",
            //Rating Data (Adjusted to ESRB)
            gameRatingSectionHeader: "Rated:",
            // Giant Bomb Footer Logo
            giantBombFooter: "Data provided courtesy of ",
            // Images
            gameImage1: image1,
            gameImage2: image2,
            gameImage3: image3,
            gameImage4: image4,
            gameImage5: image5,
            gameImage6: image6,
            gameImage7: image7,
            gameModalImage1: modalImage1,
            gameModalImage2: modalImage2,
            gameModalImage3: modalImage3,
            gameModalImage4: modalImage4,
            gameModalImage5: modalImage5,
            gameModalImage6: modalImage6,
            gameModalImage7: modalImage7,
            // Link to source material
            giantBombLink: "https://www.giantbomb.com/tiny-toon-adventures-busters-hidden-treasure/" + gameGUID + "/"
          }
        });

        console.log(res.data);
      }).catch(function (e) {
        console.log("error", e);
      });
    };

    _this.state = {
      game: {},
      gameRating: null,
      dataAPILink: null,
      isLoading: true
    };
    return _this;
  }

  _createClass(tinyToonsGamePage, [{
    key: "render",
    value: function render() {
      // Styled Components
      var GamePageHeaderFont = _styledComponents.default.h1.withConfig({
        displayName: "tinyToons__GamePageHeaderFont",
        componentId: "z9199b-0"
      })(["  color:black;-webkit-text-stroke:1px #f25ea4;text-shadow:0 0 4px #f25ea4;font-family:'Roboto-Black';"]);

      var OverviewHeaderFont = _styledComponents.default.h3.withConfig({
        displayName: "tinyToons__OverviewHeaderFont",
        componentId: "z9199b-1"
      })(["  color:#70bac9;font-family:'Roboto-Thin';"]);

      var OverviewBodyFont = _styledComponents.default.p.withConfig({
        displayName: "tinyToons__OverviewBodyFont",
        componentId: "z9199b-2"
      })(["  font-family:'Roboto-Thin';"]);

      var FooterFont = _styledComponents.default.h6.withConfig({
        displayName: "tinyToons__FooterFont",
        componentId: "z9199b-3"
      })(["  font-family:'Roboto-Black';"]);

      var RowHeaderFont = _styledComponents.default.strong.withConfig({
        displayName: "tinyToons__RowHeaderFont",
        componentId: "z9199b-4"
      })(["font-family:'Roboto-Medium';color:#f25ea4;"]);

      var RowContentFont = _styledComponents.default.h6.withConfig({
        displayName: "tinyToons__RowContentFont",
        componentId: "z9199b-5"
      })(["font-family:'Roboto-Medium';"]);

      return this.state.isLoading ? _react.default.createElement("div", null, _react.default.createElement("div", {
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
        src: "../src/app/assets/images/SegaParadise2LogoAlt.svg",
        alt: "imageForGrid"
      }))), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("div", {
        class: "mx-auto pt-5 pb-5"
      }, _react.default.createElement(_reactEpicSpinners.AtomSpinner, {
        color: "#f25ea4"
      })))))), _react.default.createElement("div", {
        class: "container-fluid d-none d-xl-block"
      }, " ", _react.default.createElement("img", {
        class: "logoLargerScreens",
        src: "../src/app/assets/images/SegaParadise2Logo.svg",
        alt: "imageForGrid",
        width: "300"
      }), _react.default.createElement("div", {
        class: "card bg-transparent pt-2"
      }, _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("div", {
        class: "mx-auto pt-5 pb-5"
      }, _react.default.createElement(_reactEpicSpinners.AtomSpinner, {
        color: "#f25ea4"
      }))), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("div", {
        class: "container-fluid"
      }, _react.default.createElement("div", {
        class: "grid"
      })))))) : _react.default.createElement("div", null, _react.default.createElement("div", {
        class: "container-fluid mobileGrid d-xl-none"
      }, " ", _react.default.createElement("div", {
        class: "container-fluid"
      }, _react.default.createElement("div", {
        class: "card cardFrontPage"
      }, _react.default.createElement("div", {
        class: "row"
      }, " ", _react.default.createElement("div", {
        class: "mx-auto"
      }, _react.default.createElement(_reactRouterDom.Link, {
        to: "/"
      }, _react.default.createElement("img", {
        class: "logoSmallerScreens container",
        src: "../src/app/assets/images/SegaParadise2LogoAlt.svg",
        alt: "imageForGrid"
      })))), _react.default.createElement("div", {
        class: "row text-focus-in"
      }, _react.default.createElement("div", {
        class: "container pb-2"
      }, _react.default.createElement(GamePageHeaderFont, null, this.state.game.gameName))), _react.default.createElement("div", {
        class: "row text-focus-in"
      }, _react.default.createElement("div", {
        class: "col-sm-4 pb-2 tableColumn"
      }, _react.default.createElement("div", {
        class: "container"
      }, _react.default.createElement("img", {
        src: this.state.game.gameImage,
        class: "rounded gamePageThumbnail"
      })), _react.default.createElement("div", {
        class: "table-responsive container"
      }, _react.default.createElement("table", {
        class: "table table-borderless"
      }, _react.default.createElement("tbody", null, _react.default.createElement("tr", null, " ", _react.default.createElement("td", {
        class: "tableHeader"
      }, _react.default.createElement(RowHeaderFont, null, this.state.game.gameDeveloperSectionHeader)), _react.default.createElement("td", {
        class: "gameDataRows"
      }, _react.default.createElement("div", {
        class: "row developerRow"
      }, _react.default.createElement(RowContentFont, null, this.state.game.gameDeveloper1)), _react.default.createElement("div", {
        class: "row developerRow"
      }, _react.default.createElement(RowContentFont, null, this.state.game.gameDeveloper2)), _react.default.createElement("div", {
        class: "row developerRow"
      }, _react.default.createElement(RowContentFont, null, this.state.game.gameDeveloper3)))), _react.default.createElement("tr", null, " ", _react.default.createElement("td", {
        class: "tableHeader"
      }, _react.default.createElement(RowHeaderFont, null, this.state.game.gameGenreSectionHeader)), _react.default.createElement("td", {
        class: "gameDataRows"
      }, _react.default.createElement("div", {
        class: "row genreRow"
      }, _react.default.createElement(RowContentFont, null, this.state.game.gameGenre1)), _react.default.createElement("div", {
        class: "row genreRow"
      }, _react.default.createElement(RowContentFont, null, this.state.game.gameGenre2)), _react.default.createElement("div", {
        class: "row genreRow"
      }, _react.default.createElement(RowContentFont, null, this.state.game.gameGenre3)))), _react.default.createElement("tr", null, " ", _react.default.createElement("td", {
        class: "tableHeader"
      }, _react.default.createElement(RowHeaderFont, null, this.state.game.gameReleaseSectionHeader)), _react.default.createElement("td", {
        class: "gameDataRows"
      }, _react.default.createElement("div", {
        class: "row releaseRow"
      }, _react.default.createElement(RowContentFont, null, this.state.game.releaseDate)))), _react.default.createElement("tr", null, " ", _react.default.createElement("td", {
        class: "tableHeader"
      }, _react.default.createElement(RowHeaderFont, null, this.state.game.gameRatingSectionHeader)), _react.default.createElement("td", {
        class: "gameDataRows"
      }, _react.default.createElement("div", {
        class: "row ratingRow"
      }, this.state.gameRating))))))), " ", _react.default.createElement("div", {
        class: "col-sm-4 pb-2 text-focus-in"
      }, " ", _react.default.createElement("div", {
        class: "container"
      }, _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h3", {
        class: "gameDescriptionHeading mx-auto"
      }, _react.default.createElement(OverviewHeaderFont, null, this.state.game.gameStoryTitle))), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("div", {
        class: "my-auto"
      }, _react.default.createElement(OverviewBodyFont, null, this.state.game.gameStory))))), _react.default.createElement("div", {
        class: "col-sm-4 pb-2 text-focus-in"
      }, " ", _react.default.createElement("div", {
        class: "container-fluid"
      }, _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("div", {
        class: "mx-auto"
      }, _react.default.createElement("a", {
        href: "#gameImage1Modal",
        "data-toggle": "modal",
        "data-target": "#gameImage1Modal"
      }, this.state.game.gameImage1), _react.default.createElement("a", {
        href: "#gameImage2Modal",
        class: "pl-1 pr-1",
        "data-toggle": "modal",
        "data-target": "#gameImage2Modal"
      }, this.state.game.gameImage2), _react.default.createElement("a", {
        href: "#gameImage3Modal",
        "data-toggle": "modal",
        "data-target": "#gameImage3Modal"
      }, this.state.game.gameImage3))), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("div", {
        class: "mx-auto pt-1 pb-1"
      }, _react.default.createElement("a", {
        href: "#gameImage4Modal",
        "data-toggle": "modal",
        "data-target": "#gameImage4Modal"
      }, this.state.game.gameImage4), _react.default.createElement("a", {
        href: "#gameImage5Modal",
        class: "pl-1 pr-1",
        "data-toggle": "modal",
        "data-target": "#gameImage5Modal"
      }, this.state.game.gameImage5), _react.default.createElement("a", {
        href: "#gameImage6Modal",
        "data-toggle": "modal",
        "data-target": "#gameImage6Modal"
      }, this.state.game.gameImage6))), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("a", {
        href: "#gameImage7Modal",
        class: "mx-auto",
        "data-toggle": "modal",
        "data-target": "#gameImage7Modal"
      }, this.state.game.gameImage7))))), _react.default.createElement("div", {
        class: "row text-focus-in"
      }, " ", _react.default.createElement("div", {
        class: "mx-auto"
      }, _react.default.createElement(FooterFont, null, "Data provided courtesy of ", _react.default.createElement("a", {
        href: this.state.game.giantBombLink,
        target: "_blank"
      }, _react.default.createElement("img", {
        class: "spGBIcon",
        src: "../src/app/assets/images/SegaParadise2GBLogo.svg",
        alt: "siteLogoIcon",
        height: "42",
        width: "42"
      })))))))), _react.default.createElement("div", {
        class: "container-fluid d-none d-xl-block"
      }, " ", _react.default.createElement(_reactRouterDom.Link, {
        to: "/"
      }, _react.default.createElement("img", {
        class: "logoLargerScreens",
        src: "../src/app/assets/images/SegaParadise2Logo.svg",
        alt: "imageForGrid",
        width: "300"
      })), _react.default.createElement("div", {
        class: "card bg-transparent pt-2"
      }, _react.default.createElement("div", {
        class: "row text-focus-in"
      }, _react.default.createElement("div", {
        class: "container"
      }, _react.default.createElement(GamePageHeaderFont, null, this.state.game.gameName))), _react.default.createElement("div", {
        class: "row text-focus-in"
      }, _react.default.createElement("div", {
        class: "col-sm-4 pb-2"
      }, _react.default.createElement("div", {
        class: "container"
      }, _react.default.createElement("img", {
        src: this.state.game.gameImage,
        class: "rounded gamePageThumbnail"
      })), _react.default.createElement("div", {
        class: "table-responsive container"
      }, _react.default.createElement("table", {
        class: "table table-borderless"
      }, _react.default.createElement("tbody", null, _react.default.createElement("tr", null, " ", _react.default.createElement("td", {
        class: "tableHeader"
      }, _react.default.createElement(RowHeaderFont, null, this.state.game.gameDeveloperSectionHeader)), _react.default.createElement("td", {
        class: "gameDataRows"
      }, _react.default.createElement("div", {
        class: "row developerRow"
      }, _react.default.createElement(RowContentFont, null, this.state.game.gameDeveloper1)), _react.default.createElement("div", {
        class: "row developerRow"
      }, _react.default.createElement(RowContentFont, null, this.state.game.gameDeveloper2)), _react.default.createElement("div", {
        class: "row developerRow"
      }, _react.default.createElement(RowContentFont, null, this.state.game.gameDeveloper3)))), _react.default.createElement("tr", null, " ", _react.default.createElement("td", {
        class: "tableHeader"
      }, _react.default.createElement(RowHeaderFont, null, this.state.game.gameGenreSectionHeader)), _react.default.createElement("td", {
        class: "gameDataRows"
      }, _react.default.createElement("div", {
        class: "row genreRow"
      }, _react.default.createElement(RowContentFont, null, this.state.game.gameGenre1)), _react.default.createElement("div", {
        class: "row genreRow"
      }, _react.default.createElement(RowContentFont, null, this.state.game.gameGenre2)), _react.default.createElement("div", {
        class: "row genreRow"
      }, _react.default.createElement(RowContentFont, null, this.state.game.gameGenre3)))), _react.default.createElement("tr", null, " ", _react.default.createElement("td", {
        class: "tableHeader"
      }, _react.default.createElement(RowHeaderFont, null, this.state.game.gameReleaseSectionHeader)), _react.default.createElement("td", {
        class: "gameDataRows"
      }, _react.default.createElement("div", {
        class: "row releaseRow"
      }, _react.default.createElement(RowContentFont, null, this.state.game.releaseDate)))), _react.default.createElement("tr", null, " ", _react.default.createElement("td", {
        class: "tableHeader"
      }, _react.default.createElement(RowHeaderFont, null, this.state.game.gameRatingSectionHeader)), _react.default.createElement("td", {
        class: "gameDataRows"
      }, _react.default.createElement("div", {
        class: "row ratingRow"
      }, this.state.gameRating))))))), " ", _react.default.createElement("div", {
        class: "col-sm-8 pb-2 text-focus-in"
      }, " ", _react.default.createElement("div", {
        class: "container"
      }, _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h3", {
        class: "gameDescriptionHeading mx-auto"
      }, _react.default.createElement(OverviewHeaderFont, null, this.state.game.gameStoryTitle))), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("div", {
        class: "my-auto pr-2"
      }, _react.default.createElement(OverviewBodyFont, null, this.state.game.gameStory))), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("div", {
        class: "mx-auto"
      }, _react.default.createElement("a", {
        href: "#gameImage1Modal",
        "data-toggle": "modal",
        "data-target": "#gameImage1Modal"
      }, this.state.game.gameImage1), _react.default.createElement("a", {
        href: "#gameImage2Modal",
        class: "pl-1 pr-1",
        "data-toggle": "modal",
        "data-target": "#gameImage2Modal"
      }, this.state.game.gameImage2), _react.default.createElement("a", {
        href: "#gameImage3Modal",
        "data-toggle": "modal",
        "data-target": "#gameImage3Modal"
      }, this.state.game.gameImage3))), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("div", {
        class: "mx-auto pt-1 pb-1"
      }, _react.default.createElement("a", {
        href: "#gameImage4Modal",
        "data-toggle": "modal",
        "data-target": "#gameImage4Modal"
      }, this.state.game.gameImage4), _react.default.createElement("a", {
        href: "#gameImage5Modal",
        class: "pl-1 pr-1",
        "data-toggle": "modal",
        "data-target": "#gameImage5Modal"
      }, this.state.game.gameImage5), _react.default.createElement("a", {
        href: "#gameImage6Modal",
        "data-toggle": "modal",
        "data-target": "#gameImage6Modal"
      }, this.state.game.gameImage6), _react.default.createElement("a", {
        href: "#gameImage7Modal",
        class: "mx-auto",
        "data-toggle": "modal",
        "data-target": "#gameImage7Modal"
      }, this.state.game.gameImage7)))))), _react.default.createElement("div", {
        class: "row text-focus-in"
      }, " ", _react.default.createElement("div", {
        class: "mx-auto"
      }, _react.default.createElement(FooterFont, null, "Data provided courtesy of ", _react.default.createElement("a", {
        href: this.state.game.giantBombLink,
        target: "_blank"
      }, _react.default.createElement("img", {
        class: "spGBIcon",
        src: "../src/app/assets/images/SegaParadise2GBLogo.svg",
        alt: "siteLogoIcon",
        height: "42",
        width: "42"
      })))))), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("div", {
        class: "container-fluid"
      }, _react.default.createElement("div", {
        class: "grid"
      })))), _react.default.createElement("div", {
        class: "modal fade",
        id: "gameImage1Modal",
        tabindex: "-1",
        role: "dialog",
        "aria-labelledby": "gameImage1ModalLabel",
        "aria-hidden": "true"
      }, _react.default.createElement("div", {
        class: "modal-dialog modal-dialog-centered modal-lg",
        role: "document"
      }, _react.default.createElement("div", {
        class: "container-fluid"
      }, _react.default.createElement("div", {
        class: "modal-content"
      }, _react.default.createElement("div", {
        class: "modal-header"
      }, _react.default.createElement("button", {
        type: "button",
        class: "close",
        "data-dismiss": "modal",
        "aria-label": "Close"
      }, _react.default.createElement("span", {
        "aria-hidden": "true"
      }, "\xD7"))), _react.default.createElement("div", {
        class: "modal-body"
      }, this.state.game.gameModalImage1))))), _react.default.createElement("div", {
        class: "modal fade",
        id: "gameImage2Modal",
        tabindex: "-1",
        role: "dialog",
        "aria-labelledby": "gameImage2ModalLabel",
        "aria-hidden": "true"
      }, _react.default.createElement("div", {
        class: "modal-dialog modal-dialog-centered modal-lg",
        role: "document"
      }, _react.default.createElement("div", {
        class: "modal-content"
      }, _react.default.createElement("div", {
        class: "modal-header"
      }, _react.default.createElement("button", {
        type: "button",
        class: "close",
        "data-dismiss": "modal",
        "aria-label": "Close"
      }, _react.default.createElement("span", {
        "aria-hidden": "true"
      }, "\xD7"))), _react.default.createElement("div", {
        class: "modal-body"
      }, this.state.game.gameModalImage2)))), _react.default.createElement("div", {
        class: "modal fade",
        id: "gameImage3Modal",
        tabindex: "-1",
        role: "dialog",
        "aria-labelledby": "gameImage3ModalLabel",
        "aria-hidden": "true"
      }, _react.default.createElement("div", {
        class: "modal-dialog modal-dialog-centered modal-lg",
        role: "document"
      }, _react.default.createElement("div", {
        class: "modal-content"
      }, _react.default.createElement("div", {
        class: "modal-header"
      }, _react.default.createElement("button", {
        type: "button",
        class: "close",
        "data-dismiss": "modal",
        "aria-label": "Close"
      }, _react.default.createElement("span", {
        "aria-hidden": "true"
      }, "\xD7"))), _react.default.createElement("div", {
        class: "modal-body"
      }, this.state.game.gameModalImage3)))), _react.default.createElement("div", {
        class: "modal fade",
        id: "gameImage4Modal",
        tabindex: "-1",
        role: "dialog",
        "aria-labelledby": "gameImage4ModalLabel",
        "aria-hidden": "true"
      }, _react.default.createElement("div", {
        class: "modal-dialog modal-dialog-centered modal-lg",
        role: "document"
      }, _react.default.createElement("div", {
        class: "modal-content"
      }, _react.default.createElement("div", {
        class: "modal-header"
      }, _react.default.createElement("button", {
        type: "button",
        class: "close",
        "data-dismiss": "modal",
        "aria-label": "Close"
      }, _react.default.createElement("span", {
        "aria-hidden": "true"
      }, "\xD7"))), _react.default.createElement("div", {
        class: "modal-body"
      }, this.state.game.gameModalImage4)))), _react.default.createElement("div", {
        class: "modal fade",
        id: "gameImage5Modal",
        tabindex: "-1",
        role: "dialog",
        "aria-labelledby": "gameImage5ModalLabel",
        "aria-hidden": "true"
      }, _react.default.createElement("div", {
        class: "modal-dialog modal-dialog-centered modal-lg",
        role: "document"
      }, _react.default.createElement("div", {
        class: "modal-content"
      }, _react.default.createElement("div", {
        class: "modal-header"
      }, _react.default.createElement("button", {
        type: "button",
        class: "close",
        "data-dismiss": "modal",
        "aria-label": "Close"
      }, _react.default.createElement("span", {
        "aria-hidden": "true"
      }, "\xD7"))), _react.default.createElement("div", {
        class: "modal-body"
      }, this.state.game.gameModalImage5)))), _react.default.createElement("div", {
        class: "modal fade",
        id: "gameImage6Modal",
        tabindex: "-1",
        role: "dialog",
        "aria-labelledby": "gameImage6ModalLabel",
        "aria-hidden": "true"
      }, _react.default.createElement("div", {
        class: "modal-dialog modal-dialog-centered modal-lg",
        role: "document"
      }, _react.default.createElement("div", {
        class: "modal-content"
      }, _react.default.createElement("div", {
        class: "modal-header"
      }, _react.default.createElement("button", {
        type: "button",
        class: "close",
        "data-dismiss": "modal",
        "aria-label": "Close"
      }, _react.default.createElement("span", {
        "aria-hidden": "true"
      }, "\xD7"))), _react.default.createElement("div", {
        class: "modal-body"
      }, this.state.game.gameModalImage6)))), _react.default.createElement("div", {
        class: "modal fade",
        id: "gameImage7Modal",
        tabindex: "-1",
        role: "dialog",
        "aria-labelledby": "gameImage7ModalLabel",
        "aria-hidden": "true"
      }, _react.default.createElement("div", {
        class: "modal-dialog modal-dialog-centered modal-lg",
        role: "document"
      }, _react.default.createElement("div", {
        class: "modal-content"
      }, _react.default.createElement("div", {
        class: "modal-header"
      }, _react.default.createElement("button", {
        type: "button",
        class: "close",
        "data-dismiss": "modal",
        "aria-label": "Close"
      }, _react.default.createElement("span", {
        "aria-hidden": "true"
      }, "\xD7"))), _react.default.createElement("div", {
        class: "modal-body"
      }, this.state.game.gameModalImage7)))));
    }
  }]);

  return tinyToonsGamePage;
}(_react.Component);

exports.default = tinyToonsGamePage;