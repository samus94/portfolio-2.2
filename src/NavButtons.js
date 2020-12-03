import React, { Component } from 'react'
import {
    Route,
    Link,
    BrowserRouter as Router, 
    Switch
} from 'react-router-dom'
import About from "./About"
import Contact from "./Contact"
import Resume from "./Resume"
import Home from "./Home"
import './NavButtons.css'



class NavButton extends Component {



    render() {
        return (
            
            <Router>
                <aside className="NavBar">

                <div className="NavButton"><Link to="/home"><span>Home</span></Link></div>
                <div className="NavButton"><Link to="/about"><span>About</span></Link></div>
                <div className="NavButton"><Link to="/contact"><span>Contact</span></Link></div>
                <div className="NavButton"><Link to="/resume"><span>Resume</span></Link></div> 

                </aside>
                <div className="content">
              
                    <Switch>
                        <Route exact path="#/" component={Home}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/contact" component={Contact}/>
                        <Route exact path="/resume" component={Resume}/>
                    </Switch>
                
                
                </div>
            </Router>
            
        )
    }
}

export default NavButton;