import { Component } from 'react' 
import './Main.css'

class Main extends Component {
    render() {
        return(
            <div className="ImgBox">
                <div className="tidBitDiv">
                    <div className="tidBitOne">
                        <h1 className="tidOneHead">Full Stack </h1>
                        <p className="tidOneP"> 
                            Web developter, designing applications for mobile phones and desktop using CSS, HTML, Node, React, and Ruby. 
                        </p>
                    </div>
                    <div className="tidBitTwo">
                        <h1 className="tidTwoHead">Aspiring Game Designer</h1>
                        <p className="tidTwoP">
                            My goal is to put the skills I've learned as a full-stack web developer and bring it to the gaming industry by becoming a full-fledged game developer. As a gamer of many years, I have learned from game designs that have succeeded, and more imporantly those that have failed. 
                        </p>
                    </div>
                </div>

            </div>
        )
    }
}

export default Main