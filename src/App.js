import React, {Component, Fragment} from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import projects from './db.json'
import Project from './components/Project'

/*                         <Route path='/portfolio' element={ routerProps => {
                            return  <Portfolio {...routerProps} projects={projects} /> }
                        }>Portfolio</Route>
                        <Route path={`/portfolio/:id`} render={ routerProps=> {
                            return <Project {...routerProps} projects={projects} /> }
                        } />
            <Route path={`/portfolio/:id`} element={ <Test projectList={projects} /> }></Route>
                        */


export default class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={ <Home /> }>Home</Route>
                        <Route path='/home' element={ <Home /> }>Home</Route>
                        <Route path='/about' element={ <About /> }>About</Route>
                        <Route path='/contact' element={ <Contact /> }>Contact</Route>
                        <Route path='/portfolio' element={ <Portfolio projectList={projects} /> }>Portfolio</Route>
                        <Route path="/portfolio/:id" element={<Project />} />
                    </Routes>
                    <Footer />
                </Fragment>
            </Router>
        )
    }
}
