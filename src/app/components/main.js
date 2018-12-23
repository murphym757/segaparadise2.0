import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { AtomSpinner } from 'react-epic-spinners';

const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const segaGameUrl = "https://www.giantbomb.com/api/game/";
const GiantBombAPI = "/?api_key=7198a87d91743e61f8b82c5a59d616542c2e4a1b";
const dataFormat = "&format=json";

export default class MainSource extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
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
            streetFighter2: {}, //GUID = 3030-1096
            tinyToons: {}, //GUID = 3030-9716 KEEP
            tmntHyperStoneHeist: {}  //GUID = 3030-11404
        };
    }

    componentDidMount = (e) => {
        setTimeout(() => this.setState({isLoading: false}), 2018);
    }
    componentWillMount = (e) => {
        this.aladdinGameLink();
        this.lionKingGameLink();
        this.sonic1GameLink();
        this.streetsOfRage2GameLink();
        this.sonic2GameLink();
        this.mortalKombatGameLink();
        this.pocahontasGameLink();
        this.mjMoonwalkerGameLink();
        this.sonicNKnucklesGameLink();
        this.toejamNEarlGameLink();
        this.kidChameleonGameLink();
        this.ecco1GameLink();
        this.castleMickeyGameLink();
        this.streetFighter2GameLink();
        this.tinyToonsGameLink();
        this.tmntHyperStoneHeistGameLink();
        
      }
      // Game 1
    aladdinGameLink = (e) => {
        const aladdinGUID = "3030-19944";
        axios.get(proxyUrl + segaGameUrl + aladdinGUID + GiantBombAPI + dataFormat)
        .then(res => {
            this.setState({
                aladdin: {
                    gameName: res.data.results.name,
                    gameImage: res.data.results.images[4].super_url
                }
            });
            console.log(res.data);
        })
        .catch(e => {
            console.log("error", e);
        });
    }
    // Game 2
    lionKingGameLink = (e) => {
        const lionKingGUID = "3030-9186";
        axios.get(proxyUrl + segaGameUrl + lionKingGUID + GiantBombAPI + dataFormat)
        .then(res => {
            this.setState({
                lionKing: {
                    gameName: res.data.results.name,
                    gameImage: res.data.results.images[11].super_url
                }
            });
            console.log(res.data);
        })
        .catch(e => {
            console.log("error", e);
        });
    }
    // Game 3
    sonic1GameLink = (e) => {
        const sonic1GUID = "3030-2465";
        axios.get(proxyUrl + segaGameUrl + sonic1GUID + GiantBombAPI + dataFormat)
        .then(res => {
            this.setState({
                sonic1: {
                    gameName: res.data.results.name,
                    gameImage: res.data.results.images[8].super_url
                }
            });
            console.log(res.data);
        })
        .catch(e => {
            console.log("error", e);
        });
    }
    // Game 4
    streetsOfRage2GameLink = (e) => {
        const SOR2SuperIMG = "https://static.giantbomb.com/uploads/scale_super/9/93770/2374569-genesis_streetsofrage2.jpg";
        const streetsOfRage2GUID = "3030-18122";
        axios.get(proxyUrl + segaGameUrl + streetsOfRage2GUID + GiantBombAPI + dataFormat)
        .then(res => {
            this.setState({
                streetsOfRage2: {
                    gameName: res.data.results.name,
                    gameImage: SOR2SuperIMG
                }
            });
            console.log(res.data);
        })
        .catch(e => {
            console.log("error", e);
        });
    }
    // Game 5
    sonic2GameLink = (e) => {
        const sonic2SuperIMG = "https://static.giantbomb.com/uploads/scale_super/9/93770/2374503-genesis_sonicthehedgehog2.jpg";
        const sonic2GUID = "3030-1662";
        axios.get(proxyUrl + segaGameUrl + sonic2GUID + GiantBombAPI + dataFormat)
        .then(res => {
            this.setState({
                sonic2: {
                    gameName: res.data.results.name,
                    gameImage: sonic2SuperIMG
                }
            });
            console.log(res.data);
        })
        .catch(e => {
            console.log("error", e);
        });
    }
    // Game 6
    mortalKombatGameLink = (e) => {
        const mortalKombatGUID = "3030-15743";
        axios.get(proxyUrl + segaGameUrl + mortalKombatGUID + GiantBombAPI + dataFormat)
        .then(res => {
            this.setState({
                mortalKombat: {
                    gameName: res.data.results.name,
                    gameImage: res.data.results.images[5].super_url
                }
            });
            console.log(res.data);
        })
        .catch(e => {
            console.log("error", e);
        });
    }
    // Game 7
    pocahontasGameLink = (e) => {
        const pocahontasGUID = "3030-15489";
        axios.get(proxyUrl + segaGameUrl + pocahontasGUID + GiantBombAPI + dataFormat)
        .then(res => {
            this.setState({
                pocahontas: {
                    gameName: res.data.results.name,
                    gameImage: res.data.results.images[1].super_url
                }
            });
            console.log(res.data);
        })
        .catch(e => {
            console.log("error", e);
        });
    }
    // Game 8
    mjMoonwalkerGameLink = (e) => {
        const mjMoonwalkerGUID = "3030-21182";
        axios.get(proxyUrl + segaGameUrl + mjMoonwalkerGUID + GiantBombAPI + dataFormat)
        .then(res => {
            this.setState({
                mjMoonwalker: {
                    gameName: res.data.results.name,
                    gameImage: res.data.results.images[4].super_url
                }
            });
            console.log(res.data);
        })
        .catch(e => {
            console.log("error", e);
        });
    }
    // Game 9
    sonicNKnucklesGameLink = (e) => {
        const sonicNKnucklesGUID = "3030-18115";
        axios.get(proxyUrl + segaGameUrl + sonicNKnucklesGUID + GiantBombAPI + dataFormat)
        .then(res => {
            this.setState({
                sonicNKnuckles: {
                    gameName: res.data.results.name,
                    gameImage: res.data.results.images[7].super_url
                }
            });
            console.log(res.data);
        })
        .catch(e => {
            console.log("error", e);
        });
    }
    // Game 10
    toejamNEarlGameLink = (e) => {
        const toejamNEarlGUID = "3030-13306";
        axios.get(proxyUrl + segaGameUrl + toejamNEarlGUID + GiantBombAPI + dataFormat)
        .then(res => {
            this.setState({
                toejamNEarl: {
                    gameName: res.data.results.name,
                    gameImage: res.data.results.images[7].super_url
                }
            });
            console.log(res.data);
        })
        .catch(e => {
            console.log("error", e);
        });
    }
    // Game 11
    kidChameleonGameLink = (e) => {
        const kidChameleonGUID = "3030-11175";
        axios.get(proxyUrl + segaGameUrl + kidChameleonGUID + GiantBombAPI + dataFormat)
        .then(res => {
            this.setState({
                kidChameleon: {
                    gameName: res.data.results.name,
                    gameImage: res.data.results.images[2].super_url
                }
            });
            console.log(res.data);
        })
        .catch(e => {
            console.log("error", e);
        });
    }
    // Game 12
    ecco1GameLink = (e) => {
        const ecco1GUID = "3030-9286";
        axios.get(proxyUrl + segaGameUrl + ecco1GUID + GiantBombAPI + dataFormat)
        .then(res => {
            this.setState({
                ecco1: {
                    gameName: res.data.results.name,
                    gameImage: res.data.results.images[3].super_url
                }
            });
            console.log(res.data);
        })
        .catch(e => {
            console.log("error", e);
        });
    }
    // Game 13
    castleMickeyGameLink = (e) => {
        const castleMickeyGUID = "3030-9513";
        axios.get(proxyUrl + segaGameUrl + castleMickeyGUID + GiantBombAPI + dataFormat)
        .then(res => {
            this.setState({
                castleMickey: {
                    gameName: res.data.results.name,
                    gameImage: res.data.results.images[10].super_url
                }
            });
            console.log(res.data);
        })
        .catch(e => {
            console.log("error", e);
        });
    }
    // Game 14
    streetFighter2GameLink = (e) => {
        const streetFighter2GUID = "3030-1096";
        axios.get(proxyUrl + segaGameUrl + streetFighter2GUID + GiantBombAPI + dataFormat)
        .then(res => {
            this.setState({
                streetFighter2: {
                    gameName: res.data.results.name,
                    gameImage: res.data.results.images[8].super_url
                }
            });
            console.log(res.data);
        })
        .catch(e => {
            console.log("error", e);
        });
    }
    // Game 15
    tinyToonsGameLink = (e) => {
        const tinyToonsGUID = "3030-9716";
        axios.get(proxyUrl + segaGameUrl + tinyToonsGUID + GiantBombAPI + dataFormat)
        .then(res => {
            this.setState({
                tinyToons: {
                    gameName: res.data.results.name,
                    gameImage: res.data.results.images[0].super_url
                }
            });
            console.log(res.data);
        })
        .catch(e => {
            console.log("error", e);
        });
    }
    // Game 16
    tmntHyperStoneHeistGameLink = (e) => {
        const tmntHyperStoneHeistGUID = "3030-11404";
        axios.get(proxyUrl + segaGameUrl + tmntHyperStoneHeistGUID + GiantBombAPI + dataFormat)
        .then(res => {
            this.setState({
                tmntHyperStoneHeist: {
                    gameName: res.data.results.name,
                    gameImage: res.data.results.images[1].super_url
                }
            });
            console.log(res.data);
        })
        .catch(e => {
            console.log("error", e);
        });
    }

    render() {
        const FooterFont = styled.h6` /* Footer */
            font-family: 'Roboto-Black';
        `;
        return (
            this.state.isLoading ? 
            <div>            
                <div class="container-fluid d-none d-xl-block"> {/* For larger Sceens */}
                    <img class="logoLargerScreens text-focus-in-home" src="../src/app/assets/images/SegaParadise2Logo.svg" alt="imageForGrid" width="300" />
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
                <div class="container-fluid mobileGrid d-xl-none"> {/* For sceens smaller than "Large" */}
                    <div class="container-fluid">
                        <div class="card cardFrontPage">
                            <div class="row"> {/* Logo Section */}
                                <div class="mx-auto"><img class="logoSmallerScreens container text-focus-in-home" src="../src/app/assets/images/SegaParadise2Logo.svg" alt="imageForGrid" /></div>
                            </div>
                            <div class="row">
                                <div class="mx-auto pt-5 pb-5">
                                    <AtomSpinner color="#f25ea4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>:
            <div>
                <div class="container-fluid d-none d-xl-block"> {/* For larger Sceens */}
                <Link to="/"><img class="logoLargerScreens" src="../src/app/assets/images/SegaParadise2Logo.svg" alt="imageForGrid" width="300" /></Link>
                    <div class="row text-focus-in">
                        <div class="mx-auto">
                            <div class="row pt-2 pb-2"> {/* Row 1 */}
                                <div class="container">
                                <Link class="homeLink" to="/games/1"><img src={this.state.aladdin.gameImage} class="rounded homepageThumbnail col-3" /></Link>
                                    <img src={this.state.lionKing.gameImage} class="rounded homepageThumbnail col-3" /> 
                                    <img src={this.state.sonic1.gameImage} class="rounded homepageThumbnail col-3" />
                                    <img src={this.state.streetsOfRage2.gameImage} class="rounded homepageThumbnail col-3" />
                                </div>
                            </div>
                            <div class="row pt-2 pb-2"> {/* Row 2 */}
                                <div class="container">
                                    <img src={this.state.sonic2.gameImage} class="homepageThumbnail image-container col-3" />
                                    <img src={this.state.mortalKombat.gameImage} class="rounded image-container homepageThumbnail col-3" /> 
                                    <img src={this.state.pocahontas.gameImage} class="rounded homepageThumbnail col-3" />
                                    <img src={this.state.mjMoonwalker.gameImage} class="rounded homepageThumbnail col-3" />
                                </div>
                            </div>
                            <div class="row pt-2 pb-2"> {/* Row 3 */}
                                <div class="container">
                                    <img src={this.state.sonicNKnuckles.gameImage} class="rounded homepageThumbnail col-3" />
                                    <img src={this.state.toejamNEarl.gameImage} class="rounded homepageThumbnail col-3" /> 
                                    <img src={this.state.kidChameleon.gameImage} class="rounded homepageThumbnail col-3" />
                                    <img src={this.state.ecco1.gameImage} class="rounded homepageThumbnail col-3" />
                                </div>
                            </div>
                            <div class="row pt-2 pb-2"> {/* Row 4 */}
                                <div class="container">
                                    <img src={this.state.castleMickey.gameImage} class="rounded homepageThumbnail col-3" />
                                    <img src={this.state.streetFighter2.gameImage} class="rounded homepageThumbnail col-3" /> 
                                    <img src={this.state.tinyToons.gameImage} class="rounded homepageThumbnail col-3" />
                                    <img src={this.state.tmntHyperStoneHeist.gameImage} class="rounded homepageThumbnail col-3" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="container-fluid">
                            <div class="grid"></div>
                            <div class="mx-auto text-focus-in">
                                <FooterFont>
                                    Data provided courtesy of <img class="spGBIcon" src="../src/app/assets/images/SegaParadise2GBLogo.png" alt="siteLogoIcon" height="42" width="42" /> 
                                </FooterFont>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-fluid mobileGrid d-xl-none"> {/* For sceens smaller than "Large" */}
                    <div class="container-fluid">
                        <div class="card cardFrontPage">
                            <div class="row"> {/* Logo Section */}
                                <div class="mx-auto"><img class="logoSmallerScreens container" src="../src/app/assets/images/SegaParadise2Logo.svg" alt="imageForGrid" /></div>
                            </div>
                            <div class="row text-focus-in"> {/* Games Section */}
                                <div class="row pt-2 pb-2 mx-auto"> {/* Row 1 */}
                                    <div class="container-fluid">
                                        <Link class="homeLink" to="/games/1"><img src={this.state.aladdin.gameImage} class="rounded p-0 img-thumbnail homepageThumbnail-mobile col-3" /></Link>
                                        <Link class="homeLink pl-2 pr-1" to="/games/1"><img src={this.state.lionKing.gameImage} class="rounded p-0 img-thumbnail homepageThumbnail-mobile col-3" /></Link> 
                                        <Link class="homeLink pl-1 pr-2" to="/games/1"><img src={this.state.sonic1.gameImage} class="rounded p-0 img-thumbnail homepageThumbnail-mobile col-3" /></Link>
                                        <Link class="homeLink" to="/games/1"><img src={this.state.streetsOfRage2.gameImage} class="rounded p-0 img-thumbnail homepageThumbnail-mobile col-3" /></Link>
                                    </div>
                                </div>
                                <div class="row pt-2 pb-2 mx-auto"> {/* Row 2 */}
                                    <div class="container-fluid">
                                        <Link class="homeLink" to="/games/1"><img src={this.state.sonic2.gameImage} class="rounded p-0 img-thumbnail homepageThumbnail-mobile col-3" /></Link>
                                        <Link class="homeLink pl-2 pr-1" to="/games/1"><img src={this.state.mortalKombat.gameImage} class="rounded p-0 img-thumbnail homepageThumbnail-mobile col-3" /></Link> 
                                        <Link class="homeLink pl-1 pr-2" to="/games/1"><img src={this.state.pocahontas.gameImage} class="rounded p-0 img-thumbnail homepageThumbnail-mobile col-3" /></Link>
                                        <Link class="homeLink" to="/games/1"><img src={this.state.mjMoonwalker.gameImage} class="rounded p-0 img-thumbnail homepageThumbnail-mobile col-3" /></Link>
                                    </div>
                                </div>
                                <div class="row pt-2 pb-2 mx-auto"> {/* Row 3 */}
                                    <div class="container-fluid">
                                        <Link class="homeLink" to="/games/1"><img src={this.state.sonicNKnuckles.gameImage} class="rounded p-0 img-thumbnail homepageThumbnail-mobile col-3" /></Link>
                                        <Link class="homeLink pl-2 pr-1" to="/games/1"><img src={this.state.toejamNEarl.gameImage} class="rounded p-0 img-thumbnail homepageThumbnail-mobile col-3" /></Link> 
                                        <Link class="homeLink pr-2 pl-1" to="/games/1"><img src={this.state.kidChameleon.gameImage} class="rounded p-0 img-thumbnail homepageThumbnail-mobile col-3" /></Link>
                                        <Link class="homeLink" to="/games/1"><img src={this.state.ecco1.gameImage} class="rounded p-0 img-thumbnail homepageThumbnail-mobile col-3" /></Link>
                                    </div>
                                </div>
                                <div class="row pt-2 pb-2 mx-auto"> {/* Row 4 */}
                                <div class="container-fluid">
                                    <Link class="homeLink" to="/games/1"><img src={this.state.castleMickey.gameImage} class="rounded p-0 img-thumbnail homepageThumbnail-mobile col-3" /></Link>
                                    <Link class="homeLink pl-2 pr-1" to="/games/1"><img src={this.state.streetFighter2.gameImage} class="rounded p-0 img-thumbnail homepageThumbnail-mobile col-3" /></Link> 
                                    <Link class="homeLink pr-2 pl-1" to="/games/1"><img src={this.state.tinyToons.gameImage} class="rounded p-0 img-thumbnail homepageThumbnail-mobile col-3" /></Link>
                                    <Link class="homeLink" to="/games/1"><img src={this.state.tmntHyperStoneHeist.gameImage} class="rounded p-0 img-thumbnail homepageThumbnail-mobile col-3" /></Link>
                                </div>
                            </div>
                        </div>
                            <div class="row"> {/* Source Section */}
                                <div class="mx-auto text-focus-in">
                                    <FooterFont>
                                        Data provided courtesy of <img class="spGBIcon" src="../src/app/assets/images/SegaParadise2GBLogo.png" alt="siteLogoIcon" height="42" width="42" /> 
                                    </FooterFont>
                                </div>
                            </div> 
                        </div> 
                    </div>
                </div>
            </div>
          );
      }
}



  