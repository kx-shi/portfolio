import React, {Component, Fragment} from 'react'
import {BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Project from './components/Project'
import Footer from './components/Footer'
import projects from './db.json'



        export default class App extends Component {
            render() {
                return (
                    <Router>
                        <Fragment>
                            <Navbar />
                            <Route exact path='/' component={ Home }>Home</Route>
                            <Route exact path='/home' component={ Home }>Home</Route>
                            <Route path='/about' component={ About }>About</Route>
                            <Route path='/contact' component={ Contact }>Contact</Route>
                            <Route exact path='/portfolio' render={ routerProps => {
                                return  <Portfolio {...routerProps} projects={projects} /> }
                            }>Portfolio</Route>
                            <Route path={`/portfolio/:id`} render={ routerProps=> {
                                return <Project {...routerProps} projects={projects} /> }
                            } />
                            <Footer />
                        </Fragment>
                    </Router>
                )
            }
        }
