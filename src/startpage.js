import React, { Component } from "react";
import * as THREE from "three";

var camera, scene, renderer, cube;
export default class Startpage extends Component {
    constructor(props) {
        super(props);
        this.animate = this.animate.bind(this);
        this.init = this.init.bind(this);
        this.onWindowResize = this.onWindowResize.bind(this);
    }
    componentDidMount() {
        var text = [
            "HOUSE OF KILLING",
            "does art",
            "welcome to the internet",
            "u r soft",
            "i like u",
            "PSYCEDELIC SPIRITUAL POP ART",
            "R U LOST?",
            "ULTRA SOFT",
            "techno",
            "soft core",
            "ultra ponce",
            "JENNIFER ANISTON SUPERFANS",
            "HOUSE OF KILLING",
            "[undefined]"
        ];
        let headlines = document.getElementsByClassName("headline");
        document.addEventListener("mousemove", function(e) {
            var y = e.pageY;

            for (var i = 0; i < headlines.length; i++) {
                // console.log(headlines[i].val());
                headlines[i].innerText = text[Math.round(y / 50)];
                // headlines[i].val(text[Math.round(y / 50)]);
            }
        });

        this.init();
    }
    init() {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        renderer = new THREE.WebGLRenderer(
            { alpha: true },
            { antialias: true }
        );
        renderer.setSize(window.innerWidth, window.innerHeight);
        window.addEventListener("resize", this.onWindowResize);

        console.log("cube build");
        const geometry = new THREE.SphereGeometry(2, 300, 300);
        const textureLoader = new THREE.TextureLoader();
        textureLoader.crossOrigin = "Anonymous";
        const material = new THREE.MeshBasicMaterial({
            map: textureLoader.load("./artcv.jpg")
        });
        cube = new THREE.Mesh(geometry, material, 100, 100, 100);

        scene.add(cube);

        camera.position.z = 10;
        document.body.appendChild(renderer.domElement);

        this.animate();
    }
    onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
    animate() {
        requestAnimationFrame(this.animate);

        cube.rotation.y += 0.005;
        renderer.render(scene, camera);
    }
    render() {
        return (
            <div id="startpage">
                <a href="/">
                    <h1 id="top" className="headline">
                        HOUSE OF KILLING
                    </h1>
                    <h1 id="bottom" className="headline">
                        HOUSE OF KILLING
                    </h1>
                    <h1 id="left" className="headline">
                        HOUSE OF KILLING
                    </h1>
                    <h1 id="right" className="headline">
                        HOUSE OF KILLING
                    </h1>
                </a>
            </div>
        );
    }
}
