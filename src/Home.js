import React, { Component } from 'react'
import NavBar from './NavBar'
import Main from './Main'
import Projects from './Projects'

class Home extends Component {
    render () {
        return (
            <div className="homeDiv">
                <NavBar /> 
                <div className="MainDiv">
                    <Main />
                </div>
                <div className="ProjectDiv">
                    <Projects />
                 </div>
            </div>
        )
    }

}

export default Home
