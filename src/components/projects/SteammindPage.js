import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import '../../styles/projectpage.css';

export default class SteammindPage extends Component{
    render() {
        return (
            <div class="container-grey">
                <NavLink to={`/portfolio`} id="backbtn">↩ projects</NavLink>
                <div className="project-grid">
                    <h1 className="page-left">Steamind</h1>
                    <div className="q-one">
                        <ul className="keywords">
                            <li>Javascript</li>
                            <li>d3</li>
                            <li>Information Visualization</li>
                            <li>API</li>
                            <li>Web Design</li>
                        </ul>
                    </div>
                    <img className="q-one" alt="datatonism" src={require("../../assets/projects/steammind/steammind-thumbnail.png")}  width="600" height="450"/>
                    <p>Steamind is a tool for visualizing games from your own Steam library as well as other games from Steam that might suit your interests.
                    </p>
                    <a href="https://vimeo.com/526182623" target="_blank" rel="noreferrer">See demovideo on Vimeo</a>
                </div>
            </div>
        );
    };
}