import React from 'react'
import "./styles.css"

const NavBar = () => {
  return (
    <>
        <div className='navDiv'>
            <nav className='NavBar'>
                <ul className='nav-ul'>
                    <li className='nav-li'><a className='nav-link' href='/'>About Me</a></li>
                    <li className='nav-li'><a className='nav-link' href='/#Skills'>Skills</a></li>
                    <li className='nav-li'><a className='nav-link' href='/#Certificates'>Certificates</a></li>
                    <li className='nav-li'><a className='nav-link' href='/#Footer'>Contact</a></li>
                </ul>
            </nav> 
        </div>
    </>
  )
}

export default NavBar