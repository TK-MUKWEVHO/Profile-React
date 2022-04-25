import React from 'react'
import binary from "../../images/Binary-Globe.svg"
import "./styles.css"

const AboutMe = () => {
  return (
    <div className='aboutDiv'>
        <div className="name">
            <h1>Welcome to Takalani Maxwell Mukwevho Profile</h1>
            <p>I am a self-motivated graduate of IT: Software Development at Tshwane University of Technology. I am aiming
            to use the knowledge that I have acquired from my coursework as well as self-study to fulfill my role in your organisation . I am also open to learning skills and Technologies. I am able to work independently in a busy
            environment and also within a team setting.
            </p>
        </div>
        <img className="image" src={binary} alt="World"/>
    </div>
  )
}

export default AboutMe