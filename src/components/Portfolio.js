// Compontent listing all projects
// grabs info from db.json

import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/portfolio.css';
import Thumbnail from './Thumbnail';

export default class Portfolio extends Component {
    render () {
        const { projectList } = this.props
        return (
            <Fragment>
                <section id="portfolio">
                    <div class="container-grey">
                        <NavLink to={`/`} id="backbtn">↩ home</NavLink>
                        <div class="gallery">
                            { Object.keys(projectList).map(id=> {
                                return (
                                        <Thumbnail
                                        key={id}
                                        img={projectList[id].imgSource}
                                        name={projectList[id].title}
                                        description={projectList[id].description}
                                        period={projectList[id].period}
                                        tags={projectList[id].tags}
                                        url={`/portfolio/${id}`}
                                        />
                                )
                            }) }
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}
