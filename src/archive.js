import React, { Component } from "react";
import Iframe from "react-iframe";
import data from "../data.json";

export default class Archive extends Component {
    constructor(props) {
        super(props);
        this.makeVisible = this.makeVisible.bind(this);
    }
    componentDidMount() {}
    makeVisible(ev) {
        let projects = document.getElementsByClassName("detail");
        for (var i = 0; i < projects.length; i++) {
            if (projects[i].classList.contains("visible")) {
                projects[i].classList.remove("visible");
            }
        }
        let currentProject = document.getElementById(ev.target.classList[0]);
        currentProject.classList.add("visible");
        console.log(currentProject.classList);
    }
    render() {
        let projects = [];
        for (var i = 0; i < data.length; i++) {
            let project = <p>{data[i].name}</p>;
            projects.push(project);
        }

        return (
            <div id="archive" className="page">
                <ul>
                    {data.map(project => (
                        <li key={project.name} className="project">
                            <button
                                className={project.class}
                                onClick={this.makeVisible}
                            >
                                {project.name}
                            </button>
                            <div className="detail" id={project.class}>
                                <div className="detailbox">
                                    <div>
                                        <p>
                                            {" "}
                                            {project.descriptions} <br></br>
                                            <br></br>{" "}
                                        </p>
                                        <ul>
                                            {project.locations.map(location => (
                                                <li
                                                    key={location}
                                                    className="location"
                                                >
                                                    {location}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div id="documentation">
                                        {project.images.map(image => (
                                            <div key={image}>
                                                <img
                                                    key={image}
                                                    alt={image}
                                                    src={image}
                                                ></img>
                                            </div>
                                        ))}
                                        {project.videos.length >= 1 && (
                                            <div>
                                                {project.videos.map(video => (
                                                    <div key={video}>
                                                        <Iframe
                                                            url={video}
                                                            allowFullScreen
                                                        ></Iframe>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
