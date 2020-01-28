import React, { Component } from "react";
import FifthDimension from "./fifthdimension";
import Startpage from "./startpage";
import Archive from "./archive.js";

let game = true;
let images = [
    "./artcv.jpg",
    "./projects/fanficballhaus.jpg",
    "https://houseofkillingimageboard.s3.amazonaws.com/-LF7DPGgC0j7VcDKwl0cufQsSlvlgy_x.jpg",
    "https://houseofkillingwebsite.s3.amazonaws.com/socialmediapic.jpg",
    "https://houseofkillingimageboard.s3.amazonaws.com/0ma9eX_sSANWXxo_jqOTTQzlznDhS8-y.png"
];
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gametoggled: false,
            gameOrArchive: "game",
            buttontext: "change to archive view"
        };
        this.changeToArchiveOrGame = this.changeToArchiveOrGame.bind(this);
        this.setConditional = this.setConditional.bind(this);
    }

    componentDidMount() {
        console.log(this.state);
    }
    changeToArchiveOrGame() {
        if (this.state.gameOrArchive == "game") {
            this.setState({
                gameOrArchive: "archive",
                buttontext: "change to game"
            });
        } else {
            this.setState({
                gameOrArchive: "game",
                buttontext: "change to archive view"
            });
        }
    }
    setConditional() {
        if (this.state.gametoggled == false) {
            this.setState({ gametoggled: true });
            let canvases = document.getElementsByTagName("canvas");
            if (canvases.length > 1) {
                canvases[0].parentNode.removeChild(canvases[1]);
            }
        } else {
            this.setState({ gametoggled: false });
        }
    }

    render() {
        const gameOrArchive = this.state.gameOrArchive;
        let gameorarchivecomponenet;
        if (gameOrArchive == "game") {
            gameorarchivecomponenet = (
                <button
                    className="gameOrArchiveToggler"
                    onClick={this.changeToArchiveOrGame}
                >
                    {" "}
                    {this.state.buttontext}{" "}
                </button>
            );
        } else if (gameOrArchive == "archive") {
            gameorarchivecomponenet = <Archive />;
        }
        return (
            <div id="app">
                <FifthDimension
                    setConditional={this.setConditional}
                    images={images}
                />
                <Startpage />
                {gameorarchivecomponenet}
            </div>
        );
    }
}
