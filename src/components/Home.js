import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom';

export default class Home extends Component {
    render () {
        return (
            <Fragment>
                <section id="main">
                    <div class="container">
                        <div class="left">
                            <div class="content">
                                <h1><>&#x1F4BB;</> Hello – I’m Karo Shi.<br />I'm a software developer with an interest in audio technology.</h1>
                                <p>
                                    I love to be creative and find solutions to problems through the combination of programming and design.
                                    My interests include embedded systems development, digital signal processing, music information retrieval,
                                    environmental sound analysis, and UX/UI design.
                                    On my free time I like to rock climb, paint, and compose music.
                                </p>
                                <p>Feel free to look through my <NavLink to={`/portfolio/`}>projects</NavLink>, read more <NavLink to={`/about/`}> about me</NavLink>, or <a href = "mailto: karolina.shi@outlook.com">send me a message!</a></p>
                            </div>
                        </div>
                        <div class="right"></div>
                    </div>
                </section>
            </Fragment>
        )
    }
}
