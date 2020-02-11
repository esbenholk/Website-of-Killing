import React, { Component } from "react";
import FifthDimension from "./fifthdimension";
import Startpage from "./startpage";
import Archive from "./archive.js";
import About from "./aboutpage.js";
import data from "../data.json";
console.log("hej baby");

let game = true;
let images = [];

let imagearrays = [];
for (var i = 0; i < data.length; i++) {
    imagearrays.push(data[i].images);
}
imagearrays.forEach(array => {
    images.push(array[0]);
});
console.log(images);

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gametoggled: false,
            archive: "closed"
        };
        this.changeToArchive = this.changeToArchive.bind(this);
        this.openabout = this.openabout.bind(this);
    }

    componentDidMount() {
        document.addEventListener("click", function() {
            let canvases = document.getElementsByTagName("canvas");
            if (canvases.length > 1) {
                canvases[0].parentNode.removeChild(canvases[1]);
            }
        });
    }
    changeToArchive() {
        if (this.state.archive == "closed" || this.state.archive == "about") {
            this.setState({
                archive: "open"
            });
        } else {
            this.setState({
                archive: "closed"
            });
        }
    }

    openabout() {
        console.log("about");
        if (this.state.archive == "closed" || this.state.archive == "open") {
            this.setState({
                archive: "about"
            });
        } else {
            this.setState({
                archive: "closed"
            });
        }
    }
    render() {
        let archivecomponenet;
        if (this.state.archive == "closed") {
            archivecomponenet = <Startpage />;
        } else if (this.state.archive == "open") {
            archivecomponenet = <Archive />;
        } else if (this.state.archive == "about") {
            archivecomponenet = <About />;
        }

        return (
            <div id="app">
                <div id="interaction">
                    <FifthDimension images={images} />
                </div>
                <div id="flex-organiser">
                    <div className="information">
                        <p>
                            💕🌈presented by HOUSE OF KILLING 💥 feat Esben Holk
                            💦🍕/ press R to begin and end interaction, use
                            MOUSE and WASD to move 🔥🌈💕
                        </p>
                        <button
                            className="gameOrArchiveToggler"
                            onClick={this.changeToArchive}
                        >
                            {" "}
                            💕projects 🌈🏙💾{" "}
                        </button>
                        <button onClick={this.openabout}> 💦 about 🎉💕</button>
                    </div>

                    {archivecomponenet}
                </div>
            </div>
        );
    }
}
// {gameorarchivecomponenet}
