import React, { Component } from 'react'
import MyPhoto from './MyPhoto.jpg'
import './About.css'

class About extends Component {
    render () {
        return (
            <div>
                <h1>Hi It's Me, Sam!</h1>
                <img src={MyPhoto} className="MyImage"></img>
                <div>
                    <p>
                        The decision to become a web-developer was a major turning point in my life. In college I took two different courses, begining with political science, then transitioning to psychology, then finally settling on Public Relations. The jobs I have taken, ironically, have had nothing to do with what I studied. I have worked as a line cook, as a door-to-door salesman, as a Paralegal, and serving in the Taiwanese army as an infantryman. It was during my time in the army that I decided I wanted to take my interest in gaming and make it a career to make games of my own. It was this decision that allowed me to take the first step and learn how to code in order to gain a better understanding of what making a video game entails.
                    </p>
                </div>
              
            </div>
        )
    }
}

export default About