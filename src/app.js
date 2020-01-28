import React, { Component } from "react";
import FifthDimension from "./fifthdimension";
import Startpage from "./startpage";

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
