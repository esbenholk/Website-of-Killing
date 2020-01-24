import React, { Component } from "react";
import FifthDimension from "./fifthdimension";
import Startpage from "./startpage";

let images = [
    "https://houseofkillingwebsite.s3.us-east-1.amazonaws.com/anistonemperor.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDGV1LWNlbnRyYWwtMSJHMEUCIFYLewx7zV75KSvsUeqOTMqzAEcJUAFzKlGC%2B49BLGz4AiEA2Y%2BeJ9ekVGnWc8%2FNM1F5jU2HbiESSBiXx4jtShtSSIQqjQIIYxAAGgw1NTQ5NTg2MjcxMTYiDBZxfOLAZNn%2BWF3NhSrqAWXBWMVzAGbGTqgJH8JY5FG3LXNjhnVa4fHLQvbYwqTZ4iyZD3fFmzt2KnHJnaKeOI1p29Krh8QcKoPfGokKBy%2FOVgO2QaEbP5tAeHW2%2FVkxPIqtD3T0YASJ2nLgCy20MQSqnXX1FUs4ffk5EThAMSkQsORZvhM1Be3PtTCotpMpO3F1aqOuVUSwMANItIJKAUzdvU4StKHG5bJrPr51sOlz4Wv185GBCn5d4KY8sl4YQxv43uYKgcfOfZcMpXwS0GP8zP05BJ5Y6%2FLPwKlz8PyVes8%2BCSlOZvkLi41%2BZg1lx8T4qfDBL9%2BTBjCb26zxBTqCAxvLBXXdd68q9UJxNoUcYpEw1Fif%2FGs7b84%2FQV9t5%2BgM20BUVjLSWfBd%2Bfj1BG9TZuEbkjkZTVdpFSOLw0NMn83Wao3CiU3%2B8hPjGIWZGZwzKL6q%2BMC6%2FOb9oqFvqjZG2t6AywJ5aPSEd8tZLKKN6V2UmMFk3fPYh%2B6l8Y4LuZjpbE0S1c7HS7TRtV8terxNr%2BI5WxqtoIXvaXQppb5snXmV5fgDgFHQTbF%2Bl06BkmxejotHqE9xlSrz8P59UCEiwF8NYJTakj6DE7udyvRK3pBw8sODfxkXqDK7PD4lKeKEoE4th3KI5GtsBnB4W2ErNMFgBMb08LN88RmaAojX24RNC22y6TC0x9xMvHA5VSoqVcCV5Jz2%2BW3yuK7EuIXPHq5zYpM%2BYHxNisjYf7hCfdiGgcg2wq%2FVl44XgJsZg1hJTNYACVo%2F7K%2FR9nhTI3h%2BBypYcZuq6soItTsTJY%2FsHPlaU8VyVj%2FJNkEQzSXt7qn1jugpwMFl1IxWHcqjLONPFirQ&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200124T175405Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAYCNQ4UEWDNXB3Y55%2F20200124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3449a3a8f5819bac8765c519d78f5cf002d7f9bb9134479699d8e2e805cffd02",
    "https://houseofkillingwebsite.s3.us-east-1.amazonaws.com/anistonempress.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDGV1LWNlbnRyYWwtMSJHMEUCIFYLewx7zV75KSvsUeqOTMqzAEcJUAFzKlGC%2B49BLGz4AiEA2Y%2BeJ9ekVGnWc8%2FNM1F5jU2HbiESSBiXx4jtShtSSIQqjQIIYxAAGgw1NTQ5NTg2MjcxMTYiDBZxfOLAZNn%2BWF3NhSrqAWXBWMVzAGbGTqgJH8JY5FG3LXNjhnVa4fHLQvbYwqTZ4iyZD3fFmzt2KnHJnaKeOI1p29Krh8QcKoPfGokKBy%2FOVgO2QaEbP5tAeHW2%2FVkxPIqtD3T0YASJ2nLgCy20MQSqnXX1FUs4ffk5EThAMSkQsORZvhM1Be3PtTCotpMpO3F1aqOuVUSwMANItIJKAUzdvU4StKHG5bJrPr51sOlz4Wv185GBCn5d4KY8sl4YQxv43uYKgcfOfZcMpXwS0GP8zP05BJ5Y6%2FLPwKlz8PyVes8%2BCSlOZvkLi41%2BZg1lx8T4qfDBL9%2BTBjCb26zxBTqCAxvLBXXdd68q9UJxNoUcYpEw1Fif%2FGs7b84%2FQV9t5%2BgM20BUVjLSWfBd%2Bfj1BG9TZuEbkjkZTVdpFSOLw0NMn83Wao3CiU3%2B8hPjGIWZGZwzKL6q%2BMC6%2FOb9oqFvqjZG2t6AywJ5aPSEd8tZLKKN6V2UmMFk3fPYh%2B6l8Y4LuZjpbE0S1c7HS7TRtV8terxNr%2BI5WxqtoIXvaXQppb5snXmV5fgDgFHQTbF%2Bl06BkmxejotHqE9xlSrz8P59UCEiwF8NYJTakj6DE7udyvRK3pBw8sODfxkXqDK7PD4lKeKEoE4th3KI5GtsBnB4W2ErNMFgBMb08LN88RmaAojX24RNC22y6TC0x9xMvHA5VSoqVcCV5Jz2%2BW3yuK7EuIXPHq5zYpM%2BYHxNisjYf7hCfdiGgcg2wq%2FVl44XgJsZg1hJTNYACVo%2F7K%2FR9nhTI3h%2BBypYcZuq6soItTsTJY%2FsHPlaU8VyVj%2FJNkEQzSXt7qn1jugpwMFl1IxWHcqjLONPFirQ&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200124T175432Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAYCNQ4UEWDNXB3Y55%2F20200124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e6fbdfacf3bee67ecc356ba3c81418541aa94e097d8641ca19213b22e93470f8",
    "https://houseofkillingwebsite.s3.amazonaws.com/socialmediapic.jpg"
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
