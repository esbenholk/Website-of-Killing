import React, { Component } from "react";
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
                                            <br></br>
                                            <br></br>
                                            <br></br>
                                            {project.locations.map(location => (
                                                <ul
                                                    key={location}
                                                    className="location"
                                                >
                                                    {location}
                                                </ul>
                                            ))}
                                        </p>
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
