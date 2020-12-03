import { Component } from 'react' 
import './Projects.css'
import TicTac from './tictac.png'
import GameShare from './GameShare.png'

class Main extends Component {
    render() {
        return(
            <div className="ProjectBox">
                <h1>
                    Recent Projects
                </h1>
                <div className="image-box">
                    <a href='https://github.com/samus94/TicTacSpecial' target='_blank' >
                        <img src={TicTac} className="project-image" ></img>
                    </a>
                    <div className="project-name">
                        <p>Tic-Tac-Special</p>
                    </div>
                </div>
                <div className="image-box">   
                    <a href='https://github.com/samus94/Project-Two' target='_blank'>
                        <img src={GameShare} className="project-image" ></img>
                    </a>
                    <div className="project-name">
                        <p>Gameshare</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main