import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import Moment from 'react-moment';
import { AtomSpinner } from 'react-epic-spinners';

const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const segaGameUrl = "https://www.giantbomb.com/api/game/";
const GiantBombAPI = "/?api_key=7198a87d91743e61f8b82c5a59d616542c2e4a1b";
const dataFormat = "&format=json";
const gameGUID = "3030-19944"; //Aladdin
export default class aladdinGameLink extends Component {
    constructor(props) {
        super(props);
        this.state = {
            game: {},
            gameRating: null,
            dataAPILink: null,
            isLoading: true
        };
    }
    componentDidMount = (e) => {
        setTimeout(() => this.setState({isLoading: false}), 2018);
    }
    componentWillMount = (e) => {
        this.gameData();
    }
    gameData = (e) => {
        const gameDescription = "The story is based on an Arab folktale by the same name from One Thousand and One Nights (Though many aspects have been changed by Disney). Players control a street urchin by the name of Aladdin who meets a young princess named Jasmine. The Grand Vizier Jafar wants Jasmine for his bride and needs Aladdin to get the magic lamp from the Cave of Wonders for him. Things don't work out the way they were supposed to and Aladdin gets stuck with the lamp, as well as three wishes. Then, more things go wrong and eventually a battle between Jafar and Aladdin occurs. Aladdin comes out victorious, frees the genie, and gets engaged to the princess.";
        const esrbRatingIconE = <img class="esrbRatingIcon" src="../src/app/assets/images/ratingIcons/esrb_e.png" alt="ratingIcon" height="42" width="42" />;
        const esrbRatingIconT = <img class="esrbRatingIcon" src="../src/app/assets/images/ratingIcons/esrb_t.png" alt="ratingIcon" height="42" width="42" />;
        const esrbRatingIconM = <img class="esrbRatingIcon" src="../src/app/assets/images/ratingIcons/esrb_m.png" alt="ratingIcon" height="42" width="42" />;
        //Images
        const image1 = <img class="gridImage" src="https://static.giantbomb.com/uploads/original/0/3715/584486-aladmg022.jpg" alt="imageForGrid" height="100" Width="100" />;
        const image2 = <img class="gridImage" src="https://static.giantbomb.com/uploads/original/0/3715/584483-aladmg024.jpg" alt="imageForGrid" height="100" Width="100" />;
        const image3 = <img class="gridImage" src="https://static.giantbomb.com/uploads/original/0/3715/584477-aladmg030.jpg" alt="imageForGrid" height="100" Width="100" />;
        const image4 = <img class="gridImage" src="https://static.giantbomb.com/uploads/original/0/3715/584479-aladmg028.jpg" alt="imageForGrid" height="100" Width="100" />;
        const image5 = <img class="gridImage" src="https://static.giantbomb.com/uploads/original/0/3715/584476-aladmg031.jpg" alt="imageForGrid" height="100" Width="100" />;
        const image6 = <img class="gridImage" src="https://static.giantbomb.com/uploads/original/0/3715/584475-aladmg032.jpg" alt="imageForGrid" height="100" Width="100" />;
        const image7 = <img class="gridImage" src="https://static.giantbomb.com/uploads/original/0/3715/584469-aladmg021.jpg" alt="imageForGrid" height="100" Width="100" />;
        const modalImage1 = <img class="modalImage" src="https://static.giantbomb.com/uploads/original/0/3715/584486-aladmg022.jpg" alt="imageForModal"/>;
        const modalImage2 = <img class="modalImage" src="https://static.giantbomb.com/uploads/original/0/3715/584483-aladmg024.jpg" alt="imageForModal"/>;
        const modalImage3 = <img class="modalImage" src="https://static.giantbomb.com/uploads/original/0/3715/584477-aladmg030.jpg" alt="imageForModal"/>;
        const modalImage4 = <img class="modalImage" src="https://static.giantbomb.com/uploads/original/0/3715/584479-aladmg028.jpg" alt="imageForModal"/>;
        const modalImage5 = <img class="modalImage" src="https://static.giantbomb.com/uploads/original/0/3715/584476-aladmg031.jpg" alt="imageForModal"/>;
        const modalImage6 = <img class="modalImage" src="https://static.giantbomb.com/uploads/original/0/3715/584475-aladmg032.jpg" alt="imageForModal"/>;
        const modalImage7 = <img class="modalImage" src="https://static.giantbomb.com/uploads/original/0/3715/584469-aladmg021.jpg" alt="imageForModal"/>;
        axios.get(proxyUrl + segaGameUrl + gameGUID + GiantBombAPI + dataFormat)
        .then(res => {
            let gameESRBRating = res.data.results.original_game_rating[0].id;
            if(gameESRBRating === 6)
                this.setState({gameRating: esrbRatingIconE})
            else if(gameESRBRating === 1)
                this.setState({gameRating: esrbRatingIconT})
            else if(gameESRBRating === 16)
                this.setState({gameRating: esrbRatingIconM})
            this.setState({
                game: {
                    gameName: res.data.results.name,
                    gameImage: res.data.results.images[4].super_url,
                    gameStory: gameDescription,
                    gameStoryTitle: "Overview",
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
                    giantBombLink: "https://www.giantbomb.com/disneys-aladdin/" + gameGUID + "/"

                },

            });
            console.log(res.data);
        })
        .catch(e => {
            console.log("error", e);
        });
    }
    
    render() {
        // Styled Components
        const GamePageHeaderFont = styled.h1` /* Game Header */
            color: black;
            -webkit-text-stroke: 1px #f25ea4;
            text-shadow: 0 0 4px #f25ea4;
            font-family: 'Roboto-Black';
        `;
        const OverviewHeaderFont = styled.h3` /* Overview Header */
            color: #70bac9;
            font-family: 'Roboto-Thin';
        `;
        const OverviewBodyFont = styled.p` /* Overview Body */
            font-family: 'Roboto-Thin';
        `;
        const FooterFont = styled.h6` /* Footer */
            font-family: 'Roboto-Black';
        `;
        const RowHeaderFont = styled.strong`
            font-family: 'Roboto-Medium';
            color: #f25ea4;
        `;
        const RowContentFont = styled.h6`
            font-family: 'Roboto-Medium';
        `;

        return (
            this.state.isLoading ? 
            <div>            
                <div class="container-fluid mobileGrid d-xl-none"> {/* For sceens smaller than "Large" */}
                    <div class="container-fluid">
                        <div class="card cardFrontPage">
                            <div class="row"> {/* Logo Section */}
                                <div class="mx-auto"><img class="logoSmallerScreens container" src="../src/app/assets/images/SegaParadise2LogoAlt.svg" alt="imageForGrid" /></div>
                            </div>
                            <div class="row">
                                <div class="mx-auto pt-5 pb-5">
                                    <AtomSpinner color="#f25ea4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-fluid d-none d-xl-block"> {/* For larger Sceens */}
                    <img class="logoLargerScreens" src="../src/app/assets/images/SegaParadise2Logo.svg" alt="imageForGrid" width="300" />
                    <div class="card bg-transparent pt-2">
                        <div class="row">
                            <div class="mx-auto pt-5 pb-5">
                                <AtomSpinner color="#f25ea4" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="container-fluid">
                                <div class="grid"></div>
                            </div>
                        </div> 
                        </div>
                    </div>
            </div>:
            <div>
                <div class="container-fluid mobileGrid d-xl-none"> {/* For sceens smaller than "Large" */}
                    <div class="container-fluid">
                        <div class="card cardFrontPage">
                            <div class="row"> {/* Logo Section */}
                                <div class="mx-auto"><Link to="/"><img class="logoSmallerScreens container" src="../src/app/assets/images/SegaParadise2LogoAlt.svg" alt="imageForGrid" /></Link></div>
                            </div>
                            <div class="row text-focus-in">
                                <div class="container pb-2">
                                    <GamePageHeaderFont>
                                        {this.state.game.gameName}
                                    </GamePageHeaderFont>
                                </div>
                            </div>
                            <div class="row text-focus-in">
                                <div class="col-sm-4 pb-2 tableColumn">
                                    <div class="container">
                                        <img src={this.state.game.gameImage} class="rounded gamePageThumbnail" />
                                    </div>
                                    <div class="table-responsive container">
                                        <table class="table table-borderless">
                                            <tbody>
                                                <tr> {/* Developer Row */}
                                                    <td class="tableHeader">
                                                        <RowHeaderFont>{this.state.game.gameDeveloperSectionHeader}</RowHeaderFont>
                                                    </td>
                                                    <td class="gameDataRows">
                                                        <div class="row developerRow"><RowContentFont>{this.state.game.gameDeveloper1}</RowContentFont></div>
                                                        <div class="row developerRow"><RowContentFont>{this.state.game.gameDeveloper2}</RowContentFont></div>
                                                        <div class="row developerRow"><RowContentFont>{this.state.game.gameDeveloper3}</RowContentFont></div>
                                                    </td>
                                                </tr> 
                                                <tr> {/* Genre Row */}
                                                    <td class="tableHeader">
                                                        <RowHeaderFont>{this.state.game.gameGenreSectionHeader}</RowHeaderFont>
                                                    </td>
                                                    <td class="gameDataRows">
                                                        <div class="row genreRow"><RowContentFont>{this.state.game.gameGenre1}</RowContentFont></div>
                                                        <div class="row genreRow"><RowContentFont>{this.state.game.gameGenre2}</RowContentFont></div>
                                                        <div class="row genreRow"><RowContentFont>{this.state.game.gameGenre3}</RowContentFont></div>
                                                    </td>
                                                </tr> 
                                                <tr> {/* Release Date Row */}
                                                    <td class="tableHeader">
                                                        <RowHeaderFont>{this.state.game.gameReleaseSectionHeader}</RowHeaderFont>
                                                    </td>
                                                    <td class="gameDataRows">
                                                        <div class="row releaseRow"><RowContentFont>{this.state.game.releaseDate}</RowContentFont></div>
                                                    </td>
                                                </tr> 
                                                <tr> {/* Rating Row */}
                                                    <td class="tableHeader">
                                                        <RowHeaderFont>{this.state.game.gameRatingSectionHeader}</RowHeaderFont>
                                                    </td>
                                                    <td class="gameDataRows">
                                                        <div class="row ratingRow">{this.state.gameRating}</div>
                                                    </td>
                                                </tr> 
                                            </tbody>
                                        </table>
                                    </div>
                                </div> {/* Game data */}
                                <div class="col-sm-4 pb-2 text-focus-in"> {/* Game overview/description */}
                                    <div class="container">
                                        <div class="row">
                                            <h3 class="gameDescriptionHeading mx-auto"><OverviewHeaderFont>{this.state.game.gameStoryTitle}</OverviewHeaderFont></h3>
                                        </div>
                                        <div class="row">
                                            <div class="my-auto"><OverviewBodyFont>{this.state.game.gameStory}</OverviewBodyFont></div>
                                        </div>
                                    </div>
                                </div> 
                                <div class="col-sm-4 pb-2 text-focus-in"> {/* Material image Grid */}
                                    <div class="container-fluid">
                                        <div class="row">
                                            <div class="mx-auto">
                                                <a href="#gameImage1Modal" data-toggle="modal" data-target="#gameImage1Modal">
                                                    {this.state.game.gameImage1}
                                                </a>
                                                <a href="#gameImage2Modal" class="pl-1 pr-1" data-toggle="modal" data-target="#gameImage2Modal">
                                                    {this.state.game.gameImage2}
                                                </a>
                                                <a href="#gameImage3Modal" data-toggle="modal" data-target="#gameImage3Modal">
                                                    {this.state.game.gameImage3}
                                                </a>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="mx-auto pt-1 pb-1">
                                                <a href="#gameImage4Modal" data-toggle="modal" data-target="#gameImage4Modal">
                                                    {this.state.game.gameImage4}
                                                </a>
                                                <a href="#gameImage5Modal" class="pl-1 pr-1" data-toggle="modal" data-target="#gameImage5Modal">
                                                    {this.state.game.gameImage5}
                                                </a>
                                                <a href="#gameImage6Modal"  data-toggle="modal" data-target="#gameImage6Modal">
                                                    {this.state.game.gameImage6}
                                                </a>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <a href="#gameImage7Modal" class="mx-auto" data-toggle="modal" data-target="#gameImage7Modal">
                                                {this.state.game.gameImage7}
                                            </a>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                            <div class="row text-focus-in"> {/* Footer Row */}
                                <div class="mx-auto">
                                    <FooterFont>
                                        Data provided courtesy of <a href={this.state.game.giantBombLink} target="_blank"><img class="spGBIcon" src="../src/app/assets/images/SegaParadise2GBLogo.png" alt="siteLogoIcon" height="42" width="42" /></a> 
                                    </FooterFont>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-fluid d-none d-xl-block"> {/* For larger Sceens */}
                    <img class="logoLargerScreens" src="../src/app/assets/images/SegaParadise2Logo.svg" alt="imageForGrid" width="300" />
                    <div class="card bg-transparent pt-2">
                        <div class="row text-focus-in">
                            <div class="container">
                                <GamePageHeaderFont>
                                    {this.state.game.gameName}
                                </GamePageHeaderFont>
                            </div>
                        </div>
                        <div class="row text-focus-in">
                                <div class="col-sm-4 pb-2">
                                    <div class="container">
                                        <img src={this.state.game.gameImage} class="rounded gamePageThumbnail" />
                                    </div>
                                    <div class="table-responsive container">
                                        <table class="table table-borderless">
                                            <tbody>
                                                <tr> {/* Developer Row */}
                                                    <td class="tableHeader">
                                                        <RowHeaderFont>{this.state.game.gameDeveloperSectionHeader}</RowHeaderFont>
                                                    </td>
                                                    <td class="gameDataRows">
                                                        <div class="row developerRow"><RowContentFont>{this.state.game.gameDeveloper1}</RowContentFont></div>
                                                        <div class="row developerRow"><RowContentFont>{this.state.game.gameDeveloper2}</RowContentFont></div>
                                                        <div class="row developerRow"><RowContentFont>{this.state.game.gameDeveloper3}</RowContentFont></div>
                                                    </td>
                                                </tr> 
                                                <tr> {/* Genre Row */}
                                                    <td class="tableHeader">
                                                        <RowHeaderFont>{this.state.game.gameGenreSectionHeader}</RowHeaderFont>
                                                    </td>
                                                    <td class="gameDataRows">
                                                        <div class="row genreRow"><RowContentFont>{this.state.game.gameGenre1}</RowContentFont></div>
                                                        <div class="row genreRow"><RowContentFont>{this.state.game.gameGenre2}</RowContentFont></div>
                                                        <div class="row genreRow"><RowContentFont>{this.state.game.gameGenre3}</RowContentFont></div>
                                                    </td>
                                                </tr> 
                                                <tr> {/* Release Date Row */}
                                                    <td class="tableHeader">
                                                        <RowHeaderFont>{this.state.game.gameReleaseSectionHeader}</RowHeaderFont>
                                                    </td>
                                                    <td class="gameDataRows">
                                                        <div class="row releaseRow"><RowContentFont>{this.state.game.releaseDate}</RowContentFont></div>
                                                    </td>
                                                </tr> 
                                                <tr> {/* Rating Row */}
                                                    <td class="tableHeader">
                                                        <RowHeaderFont>{this.state.game.gameRatingSectionHeader}</RowHeaderFont>
                                                    </td>
                                                    <td class="gameDataRows">
                                                        <div class="row ratingRow">{this.state.gameRating}</div>
                                                    </td>
                                                </tr> 
                                            </tbody>
                                        </table>
                                    </div>
                                </div> {/* Game data */}
                                <div class="col-sm-8 pb-2 text-focus-in"> {/* Game overview/description */}
                                    <div class="container">
                                        <div class="row">
                                            <h3 class="gameDescriptionHeading mx-auto"><OverviewHeaderFont>{this.state.game.gameStoryTitle}</OverviewHeaderFont></h3>
                                        </div>
                                        <div class="row">
                                            <div class="my-auto pr-2"><OverviewBodyFont>{this.state.game.gameStory}</OverviewBodyFont></div>
                                        </div>
                                        <div class="row">
                                            <div class="mx-auto">
                                                <a href="#gameImage1Modal" data-toggle="modal" data-target="#gameImage1Modal">
                                                    {this.state.game.gameImage1}
                                                </a>
                                                <a href="#gameImage2Modal" class="pl-1 pr-1" data-toggle="modal" data-target="#gameImage2Modal">
                                                    {this.state.game.gameImage2}
                                                </a>
                                                <a href="#gameImage3Modal" data-toggle="modal" data-target="#gameImage3Modal">
                                                    {this.state.game.gameImage3}
                                                </a>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="mx-auto pt-1 pb-1">
                                                <a href="#gameImage4Modal" data-toggle="modal" data-target="#gameImage4Modal">
                                                    {this.state.game.gameImage4}
                                                </a>
                                                <a href="#gameImage5Modal" class="pl-1 pr-1" data-toggle="modal" data-target="#gameImage5Modal">
                                                    {this.state.game.gameImage5}
                                                </a>
                                                <a href="#gameImage6Modal"  data-toggle="modal" data-target="#gameImage6Modal">
                                                    {this.state.game.gameImage6}
                                                </a>
                                                <a href="#gameImage7Modal" class="mx-auto" data-toggle="modal" data-target="#gameImage7Modal">
                                                    {this.state.game.gameImage7}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                        </div>
                    <div class="row text-focus-in"> {/* Footer Row */}
                        <div class="mx-auto">
                            <FooterFont>
                                Data provided courtesy of <a href={this.state.game.giantBombLink} target="_blank"><img class="spGBIcon" src="../src/app/assets/images/SegaParadise2GBLogo.png" alt="siteLogoIcon" height="42" width="42" /></a> 
                            </FooterFont>
                        </div>
                    </div>
                    </div>
                    <div class="row">
                        <div class="container-fluid">
                            <div class="grid"></div>
                        </div>
                    </div> 
                </div>
                {/* Image 1 Modal */}
                    <div class="modal fade" id="gameImage1Modal" tabindex="-1" role="dialog" aria-labelledby="gameImage1ModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                            <div class="container-fluid">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        {this.state.game.gameModalImage1}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* Image 2 Modal */}
                    <div class="modal fade" id="gameImage2Modal" tabindex="-1" role="dialog" aria-labelledby="gameImage2ModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    {this.state.game.gameModalImage2}
                                </div>
                            </div>
                        </div>
                    </div>
                {/* Image 3 Modal */}
                    <div class="modal fade" id="gameImage3Modal" tabindex="-1" role="dialog" aria-labelledby="gameImage3ModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    {this.state.game.gameModalImage3}
                                </div>
                            </div>
                        </div>
                    </div>
                {/* Image 4 Modal */}
                    <div class="modal fade" id="gameImage4Modal" tabindex="-1" role="dialog" aria-labelledby="gameImage4ModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    {this.state.game.gameModalImage4}
                                </div>
                            </div>
                        </div>
                    </div>
                {/* Image 5 Modal */}
                    <div class="modal fade" id="gameImage5Modal" tabindex="-1" role="dialog" aria-labelledby="gameImage5ModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    {this.state.game.gameModalImage5}
                                </div>
                            </div>
                        </div>
                    </div>
                {/* Image 6 Modal */}
                    <div class="modal fade" id="gameImage6Modal" tabindex="-1" role="dialog" aria-labelledby="gameImage6ModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    {this.state.game.gameModalImage6}
                                </div>
                            </div>
                        </div>
                    </div>
                {/* Image 7 Modal */}
                    <div class="modal fade" id="gameImage7Modal" tabindex="-1" role="dialog" aria-labelledby="gameImage7ModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    {this.state.game.gameModalImage7}
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )}
}