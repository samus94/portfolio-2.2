import React, { Component } from 'react'
import SamCVfinal from './SamCVfinal.png'

class Resume extends Component {
    render () {
        return (
            <div>
                <h1>Resume</h1>
                <img src={SamCVfinal} className="project-image" ></img>
            </div>
        )
    }
}

export default Resume;