import React from 'react'
import classes from './styles.modules.css';

const Navbar = () => {
  return (
    <div className={classes.NavBar}>
      <nav>
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/#About'>About Me</a></li>
          <li><a href='/#Skills'>Skills</a></li>
          <li><a href='/Certificates'>Certificates</a></li>
          <li><a href='/#Footer'>Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;