import React, { Component } from 'react'
import LinkedIn from "./LinkedIn.png"
import './Contact.css'

class Contact extends Component {
    render () {
        return (
            <div>
                <h1>Contact</h1>
                <p>Come Visit! The 'Door' is always Open 😎</p>
                <a href='https://www.linkedin.com/in/sam-kuo-3a8ba6154/' target='_blank'>
                    <img src={LinkedIn} className="contact-img"></img>
                </a>
            </div>
        )
    }
}

export default Contact;


