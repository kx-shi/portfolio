import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import '../../styles/projectpage.css';

export default class DatatonismPage extends Component{
    render() {
        return (
            <div class="container-grey">
                <NavLink to={`/portfolio`} id="backbtn">↩ projects</NavLink>
                <div className="project-grid">
                    <h1 className="page-left">Datatonism</h1>
                    <div className="q-one">
                        <ul className="keywords">
                            <li>Graphical Programming</li>
                            <li>DSP</li>
                            <li>Pure Data</li>
                            <li>User Tests</li>
                            <li>Software</li>
                        </ul>
                    </div>
                    <img className="q-one" alt="datatonism" src={require("../../assets/projects/datatonism/IMG_8946-r.png")}  width="600" height="450"/>
                    <p>
                        Datatonism is the result of a course project done in the course DT2213 Musical Communication and Music Technology. It is a digital emulation of the Dataton System 3000
                        designed by Björn Sandlund in the 1970's. The Dataton System is a modular synthesizer made up of rectangular modular that slot together sideways like LEGO pieces. The 
                        The project was an interesting insight about the fundamental differences between digital and analog systems.
                        Apart from that, it was also a great exercise in learning more digital signal processing.
                    </p>
                    <img className="q-one" alt="datatonism screenshot" src={require("../../assets/projects/datatonism/datatonism-screenshot.png")}  width="600" height="450"/>
                    <p>
                    The final presentation was held at Scenkonstmuseet and the project itself served as a basis for the paper "Datatonism: Historically Informed Sound Synthesis As A Pedagogic Exercise" which was accepted and presented at the Nordic SMC 2021. 
                    </p>
                    <img className="q-one" alt="datatonism presentation" src={require("../../assets/projects/datatonism/DSC_0043.jpg")}  width="600" height="450"/>
                    <p>
                    The result is a open-source software available on GitHub that one can download and play around with.
                    </p>
                    <a href="https://github.com/kx-shi/Datatonism" target="_blank" rel="noreferrer">Datatonism on GitHub</a>
                </div>
            </div>
        );
    }
}