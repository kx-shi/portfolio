import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom'
import '../styles/about.css';

export default class About extends Component {
    render () {
        return (
            <Fragment>
                <section id="about">
                    <div class="container-grey">
                    <NavLink to={`/`} id="backbtn">↩ home</NavLink>
                        <div class="gallery">
                            <img src={require("../assets/about-small-bg.png")} alt="me" class="about-img"></img>
                        </div>
                        <div class="about-flex">
                            <div class="about-left">
                                <h2>Education</h2>
                                    <div class="about-container">
                                        <h3>M.Sc. Interactive Media Technology</h3>
                                        <h4>KTH Royal Institute of Technology, Stockholm, Sweden</h4>
                                        <h4 class="cv-period">2020 - 2023</h4>
                                        <p>The program addresses the design, development, and evaluation of interactive products and
                                            media. I chose to focus on sonic media which includes sound processing, music informatics,
                                            audio programming, and sound design.</p>
                                    </div>
                                    <div class="about-container">
                                        <h3>B.Sc. Computer Science</h3>
                                        <h4>KTH Royal Institute of Technology, Stockholm, Sweden</h4>
                                        <h4 class="cv-period">2017 - 2020</h4>
                                        <p>The program focuses on programming – programming paradigms, algorithms, data structures,
                                            algorithmic, complexity, databases, etc.
                                        </p>
                                    </div>
                            </div>
                            <div class="about-right">
                                <h2>Work</h2>
                                <div class="about-container">
                                    <h3 class="cv-topic">Course developer</h3>
                                    <h3 class="cv-place">KTH Royal Institute of Technology, Stockholm, Sweden</h3>
                                    <h3 class="cv-period">April 2022 - October 2022</h3>
                                    <p class="cv-description">Developing a course in Computer Safety for the employees of a
                                     public Swedish authority. The course is developed based on Question Based Learning (QBL).</p>
                                </div>
                                <div class="about-container">
                                    <h3 class="cv-topic">IT Support</h3>
                                    <h3 class="cv-place">KTH Royal Institute of Technology, Stockholm, Sweden</h3>
                                    <h3 class="cv-period">April 2021 - April 2022</h3>
                                    <p class="cv-description">Belonging to the first line support, I answered calls and e-mails
                                    regarding IT questions from the students and employees of KTH.</p>
                                </div>
                                <div class="about-container">
                                    <h3 class="cv-topic">Teaching Assistant</h3>
                                    <h3 class="cv-place">KTH Royal Institute of Technology, Stockholm, Sweden</h3>
                                    <h3 class="cv-period">September 2020 - April 2022</h3>
                                    <p class="cv-description">I have been teaching assistant in the following courses:</p>
                                    <ul class="about-list">
                                        <li>DD1337 Programming</li>
                                        <li>DM1595 Program Development for Interactive Media</li>
                                        <li>DT2212 Music Acoustics</li>
                                        <li>DM2624 Human Centered Technology for Disabilities</li>
                                    </ul>
                                    <p>In these my work has mainly consisted of
                                    supporting students in programming assignments, holding laboratory sessions, and creating study content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    };
};
