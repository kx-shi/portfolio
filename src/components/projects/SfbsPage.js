import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/projectpage.css';

export default class SfbsPage extends Component{
    render() {
        return (
            <div class="container-grey">
            <NavLink to={`/portfolio`} id="backbtn">↩ projects</NavLink>
            <div className="project-grid">
                <h1 className="page-left">Sound Forest by The Sea</h1>
                <div className="q-one">
                    <ul className="keywords">
                        <li>Interaction Design</li>
                        <li>Graphical Programming</li>
                        <li>Max/MSP</li>
                        <li>Python</li>
                    </ul>
                </div>
                <img className="q-one" alt="datatonism" src={require("../../assets/projects/sfbs/sfbs.png")}  width="600" height="450"/>
                <p>Sound Forest by The Sea is a course project done in the course DT2300 Sound in Interaction. Equipped with an available physical prototype
                    of a <a href="https://www.kth.se/hct/mid/research/smc/projects/sound-forest-1.897050" target="_blank" rel="noreferrer">Sound Forest</a> string at KTH campus, we set out to explore what kind of interactive plays would be possible. The prototype is an light-emitting, interactive string
                    attached to a vibrating haptic platform.
                    
                </p>
                <p>The result is an interactive beach-inspired soundscape. Sound and distance data from interacting with the string was retrieved through sensors and used to control various parameters
                    for the soundscape generation. Accompanied by a background sound reminiscent to being by a shoreline, the user plucks the string to generate splashing sounds as if they
                    are playing in the water. Depending on where the user plucks the string, the emitted light changes between various shades of blue. If the string is idle for a bit, "birds"
                    will visit the scene. Plucking the string again will then scare of the birds.
                </p>
                <a href="https://vimeo.com/523815674?embedded=true&source=vimeo_logo&owner=75500171" target="_blank" rel="noreferrer">See demovideo on Vimeo</a>
            </div>
            </div>
        );
    };
}