import React, { Component } from "react";
import data from "../data.json";

export default class Archive extends Component {
    constructor(props) {
        super(props);
        this.makeVisible = this.makeVisible.bind(this);
    }
    componentDidMount() {
        // let projects = document.getElementsByClassName("project");
        // for (var i = 0; i < projects.length; i++) {
        //     projects[i].addEventListener(
        //         "click",
        //         this.makeVisible(projects[i].name)
        //     );
        // }
    }
    makeVisible(ev) {
        console.log("before add class", ev.target);
        let projects = document.getElementsByClassName("detail");
        for (var i = 0; i < projects.length; i++) {
            if (projects[i].classList.contains("visible")) {
                projects[i].classList.remove("visible");
            }
        }
        let currentProject = document.getElementById(ev.target.classList[0]);
        if (currentProject.classList.contains("visible")) {
            currentProject.classList.remove("visible");
        } else {
            currentProject.classList.add("visible");
        }
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
                                <p>{project.descriptions}</p>
                                {project.images.map(image => (
                                    <div id="documentation">
                                        <img
                                            key={image}
                                            alt={image}
                                            src={image}
                                        ></img>
                                    </div>
                                ))}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
