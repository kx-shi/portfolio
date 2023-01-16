import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import '../../styles/projectpage.css';

export default class SpirPage extends Component{
    render() {
        return (
            <div class="container-grey">
                <NavLink to={`/portfolio`} id="backbtn">↩ projects</NavLink>
                <div className="project-grid">
                    <h1 className="page-left">Spir: Take A Breather With A Smart Coaster</h1>
                    <div className="q-one">
                        <ul className="keywords">
                            <li>Physical Interaction</li>
                            <li>Protoyping</li>
                            <li>Arudino</li>
                            <li>User Tests</li>
                            <li>Microprocessor</li>
                        </ul>
                    </div>
                    <img className="q-one" alt="Spir: Screenshot from demo-video" src={require("../../assets/projects/spir/spir-4.png")}  width="600" height="450"/>
                    <p>This project was done in the course DM2601 Media Technology and Interaction Design. Prompted by the theme "Pandemic Media", my project team focused our attention on the fact
                        that many spent this time at home due to isolation recommendations. In a situation where the separation between life and work is more and more blurred, what kind of challenges
                        present themselves?
                    </p>
                    <p>To find out how people used their spaces and to gain an insight of how one's home changes throughout the day, a photo safari was done. Results showed how homes,
                        especially smaller homes, were treated as multispaces. One's home were not only a place for sleep, food, and relaxation; it also acted as an work office, hobby lounge,
                        and sometimes a gym. Furthermore, we noticed that as remote working became more mainstream, it became increasingly important to find micro-opportunities for pauses and
                        physical- and mental recovery.
                    </p>
                    <p>As we explored this problem space further, we found that the natural breaks one takes during meals could be used for this purpose. Many of the participants from the photo
                        safari lived in smaller spaces and oftentimes the kitchen table was also the office desk, which meant that these natural breaks were interrupted as people work and eat
                        simultaenously.
                    </p>
                    <img className="q-one" alt="alt" src={require("../../assets/projects/spir/spir-3.JPG")}  width="600" height="450"/>
                    <p>We wanted to re-introduce meals as a relaxing and mindful break from an otherwise hectic life. After many iterations of brainstorming and prototyping, we developed Spir -
                        a smart coaster. The idea is simple - as you place your meal on the coaster it lights up and prompts you to do a short breathing exercise. The breathing exercise is
                        supported by a slowly pulsating light emanating from the coaster. After a couple of deep breaths, you can begin with your meal, hopefully with a more relaxed and aware
                        mind.
                    </p>
                    <img className="q-one" alt="Top-down view of the materials used for Spir" src={require("../../assets/projects/spir/spir-wip.JPG")}  width="600" height="450"/>
                    <p>My main contributions to this project was 3D modelling the coaster base, and programming the LED-lights. The coaster base was modelled using SolidWorks, and the LED-lights were programmed using an Arduino UNO and Neopixels. </p>
                    <p>The final prototype was well recieved, with comments such as "It helps me feel better when I take a deep breath" and "Even just looking at the video of the prototype calmed me down. I breathed with the light without even thinking much about it. The interaction was really inviting". </p>
                    <a href="https://www.behance.net/gallery/106377691/spir-Take-a-Breather-with-a-Smart-Coaster" target="_blank" rel="noreferrer">Spir on Behance</a>
                </div>
            </div>
        );
    };
}