import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import Moment from 'react-moment';


const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const segaGameUrl = "https://www.giantbomb.com/api/game/";
const GiantBombAPI = "/?api_key=7198a87d91743e61f8b82c5a59d616542c2e4a1b";
const dataFormat = "&format=json";

export default class aladdinGameLink extends Component {
    constructor(props) {
        super(props);
        this.state = {
            game: {},
        };
    }
    componentDidMount = (e) => {
        this.gameData();
    }
    gameData = (e) => {
        const gameGUID = "3030-19944"; //Aladdin
        const gameDescription = "The story is based on an Arab folktale by the same name from One Thousand and One Nights (Though many aspects have been changed by Disney). Players control a street urchin by the name of Aladdin who meets a young princess named Jasmine. The Grand Vizier Jafar wants Jasmine for his bride and needs Aladdin to get the magic lamp from the Cave of Wonders for him. Things don't work out the way they were supposed to and Aladdin gets stuck with the lamp, as well as three wishes. Then, more things go wrong and eventually a battle between Jafar and Aladdin occurs. Aladdin comes out victorious, frees the genie, and gets engaged to the princess.";
        axios.get(proxyUrl + segaGameUrl + gameGUID + GiantBombAPI + dataFormat)
        .then(res => {
            this.setState({
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
                    releaseDate: <Moment format="MMMM Do, YYYY">{res.data.results.original_release_date}</Moment>,
                    gameReleaseSectionHeader: "Release Date:",
                    //Rating Data (Adjusted to ESRB)
                    gameRating: res.data.results.original_game_rating[0].id,
                    gameRatingSectionHeader: "Rated:",
                    
                }
            });
            console.log(res.data);
        })
        .catch(e => {
            console.log("error", e);
        });
    }
    render() {
        return (
            <div class="container">
                <div class="card bg-transparent pt-2">
                    <div class="row">
                        <div class="container">
                            <h1 class="gameTitle mx-auto">{this.state.game.gameName}</h1>
                        </div>
                    </div>
                    <div class="row">
                            <div class="col-sm-4 pb-2">
                                <div class="container">
                                    <img src={this.state.game.gameImage} class="rounded gamePageThumbnail" />
                                </div>
                                <div class="table-responsive container">
                                    <table class="table">
                                        <tbody>
                                            <tr> {/* Developer Row */}
                                                <td class="tableHeader">
                                                    <strong>{this.state.game.gameDeveloperSectionHeader}</strong>
                                                </td>
                                                <td class="gameDataRows">
                                                    <div class="row developerRow">{this.state.game.gameDeveloper1}</div>
                                                    <div class="row developerRow">{this.state.game.gameDeveloper2}</div>
                                                    <div class="row developerRow">{this.state.game.gameDeveloper3}</div>
                                                </td>
                                            </tr> 
                                            <tr> {/* Genre Row */}
                                                <td class="tableHeader">
                                                    <strong>{this.state.game.gameGenreSectionHeader}</strong>
                                                </td>
                                                <td class="gameDataRows">
                                                    <div class="row genreRow">{this.state.game.gameGenre1}</div>
                                                    <div class="row genreRow">{this.state.game.gameGenre2}</div>
                                                    <div class="row genreRow">{this.state.game.gameGenre3}</div>
                                                </td>
                                            </tr> 
                                            <tr> {/* Release Date Row */}
                                                <td class="tableHeader">
                                                    <strong>{this.state.game.gameReleaseSectionHeader}</strong>
                                                </td>
                                                <td class="gameDataRows">
                                                    <div class="row releaseRow">{this.state.game.releaseDate}</div>
                                                </td>
                                            </tr> 
                                            <tr> {/* Rating Row */}
                                                <td class="tableHeader">
                                                    <strong>{this.state.game.gameRatingSectionHeader}</strong>
                                                </td>
                                                <td class="gameDataRows">
                                                    <div class="row ratingRow">{this.state.game.gameRating}</div>
                                                </td>
                                            </tr> 
                                        </tbody>
                                    </table>
                                </div>
                            </div> {/* Game data */}
                            <div class="col-sm-4 pb-2"> {/* Game overview/description */}
                                <div class="container">
                                    <div class="row">
                                        <h3 class="gameDescriptionHeading mx-auto">Overview</h3>
                                    </div>
                                    <div class="row">
                                        <p class="gameDescription">{this.state.game.gameStory}</p>
                                    </div>
                                </div>
                            </div> 
                            <div class="col-sm-4 pb-2"></div> {/* Material image Grid */}
                    </div>
                <div class="row">
                    <div class="mx-auto"><h6>Data Provided Courtesy of GiantBomb (add link)</h6></div>
                </div>
                <div class="row">
                    <div class="container-fluid">
                        <div class="grid"></div>
                    </div>
                </div>
                </div>
                
            </div>
        )}
}