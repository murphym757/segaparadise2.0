"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _axios = _interopRequireDefault(require("axios"));

var _reactMoment = _interopRequireDefault(require("react-moment"));

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

var aladdinGameLink =
/*#__PURE__*/
function (_Component) {
  _inherits(aladdinGameLink, _Component);

  function aladdinGameLink(props) {
    var _this;

    _classCallCheck(this, aladdinGameLink);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(aladdinGameLink).call(this, props));

    _this.componentDidMount = function (e) {
      _this.gameData();
    };

    _this.gameData = function (e) {
      var gameGUID = "3030-19944"; //Aladdin

      var gameDescription = "The story is based on an Arab folktale by the same name from One Thousand and One Nights (Though many aspects have been changed by Disney). Players control a street urchin by the name of Aladdin who meets a young princess named Jasmine. The Grand Vizier Jafar wants Jasmine for his bride and needs Aladdin to get the magic lamp from the Cave of Wonders for him. Things don't work out the way they were supposed to and Aladdin gets stuck with the lamp, as well as three wishes. Then, more things go wrong and eventually a battle between Jafar and Aladdin occurs. Aladdin comes out victorious, frees the genie, and gets engaged to the princess.";

      _axios.default.get(proxyUrl + segaGameUrl + gameGUID + GiantBombAPI + dataFormat).then(function (res) {
        _this.setState({
          game: {
            gameName: res.data.results.name,
            gameImage: res.data.results.images[4].super_url,
            gameStory: gameDescription,
            //Developer Data
            gameDeveloper1: res.data.results.developers[1].name,
            gameDeveloper2: res.data.results.developers[2].name,
            gameDeveloper3: res.data.results.developers[3].name,
            gameDeveloperSectionHeader: "Developer:",
            //Genre Data
            gameGenre1: res.data.results.genres[0].name,
            gameGenre2: res.data.results.genres[1].name,
            gameGenre3: res.data.results.genres[2].name,
            gameGenreSectionHeader: "Genre:",
            //Release Data
            releaseDate: _react.default.createElement(_reactMoment.default, {
              format: "MMMM Do, YYYY"
            }, res.data.results.original_release_date),
            gameReleaseSectionHeader: "Release Date:",
            //Rating Data (Adjusted to ESRB)
            gameRating: res.data.results.original_game_rating[0].id,
            gameRatingSectionHeader: "Rated:"
          }
        });

        console.log(res.data);
      }).catch(function (e) {
        console.log("error", e);
      });
    };

    _this.state = {
      game: {}
    };
    return _this;
  }

  _createClass(aladdinGameLink, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        class: "container"
      }, _react.default.createElement("div", {
        class: "card bg-transparent pt-2"
      }, _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("div", {
        class: "container"
      }, _react.default.createElement("h1", {
        class: "gameTitle mx-auto"
      }, this.state.game.gameName))), _react.default.createElement("div", {
        class: "row"
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
        class: "table"
      }, _react.default.createElement("tbody", null, _react.default.createElement("tr", null, " ", _react.default.createElement("td", {
        class: "tableHeader"
      }, _react.default.createElement("strong", null, this.state.game.gameDeveloperSectionHeader)), _react.default.createElement("td", {
        class: "gameDataRows"
      }, _react.default.createElement("div", {
        class: "row developerRow"
      }, this.state.game.gameDeveloper1), _react.default.createElement("div", {
        class: "row developerRow"
      }, this.state.game.gameDeveloper2), _react.default.createElement("div", {
        class: "row developerRow"
      }, this.state.game.gameDeveloper3))), _react.default.createElement("tr", null, " ", _react.default.createElement("td", {
        class: "tableHeader"
      }, _react.default.createElement("strong", null, this.state.game.gameGenreSectionHeader)), _react.default.createElement("td", {
        class: "gameDataRows"
      }, _react.default.createElement("div", {
        class: "row genreRow"
      }, this.state.game.gameGenre1), _react.default.createElement("div", {
        class: "row genreRow"
      }, this.state.game.gameGenre2), _react.default.createElement("div", {
        class: "row genreRow"
      }, this.state.game.gameGenre3))), _react.default.createElement("tr", null, " ", _react.default.createElement("td", {
        class: "tableHeader"
      }, _react.default.createElement("strong", null, this.state.game.gameReleaseSectionHeader)), _react.default.createElement("td", {
        class: "gameDataRows"
      }, _react.default.createElement("div", {
        class: "row releaseRow"
      }, this.state.game.releaseDate))), _react.default.createElement("tr", null, " ", _react.default.createElement("td", {
        class: "tableHeader"
      }, _react.default.createElement("strong", null, this.state.game.gameRatingSectionHeader)), _react.default.createElement("td", {
        class: "gameDataRows"
      }, _react.default.createElement("div", {
        class: "row ratingRow"
      }, this.state.game.gameRating))))))), " ", _react.default.createElement("div", {
        class: "col-sm-4 pb-2"
      }, " ", _react.default.createElement("div", {
        class: "container"
      }, _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("h3", {
        class: "gameDescriptionHeading mx-auto"
      }, "Overview")), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("p", {
        class: "gameDescription"
      }, this.state.game.gameStory)))), _react.default.createElement("div", {
        class: "col-sm-4 pb-2"
      }), " "), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("div", {
        class: "mx-auto"
      }, _react.default.createElement("h6", null, "Data Provided Courtesy of GiantBomb (add link)")))), _react.default.createElement("div", {
        class: "row"
      }, _react.default.createElement("div", {
        class: "container-fluid"
      }, _react.default.createElement("div", {
        class: "grid"
      }))));
    }
  }]);

  return aladdinGameLink;
}(_react.Component);

exports.default = aladdinGameLink;