import React, { Component } from "react";
import FifthDimension from "./fifthdimension";
import Startpage from "./startpage";

let images = ["https://www.instagram.com/p/B7a36nlls9v/"];
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { gametoggled: false };
        this.setConditional = this.setConditional.bind(this);
    }

    componentDidMount() {}

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
        return (
            <div id="app">
                <FifthDimension
                    setConditional={this.setConditional}
                    images={images}
                />
                ;
                <Startpage />
            </div>
        );
    }
}
