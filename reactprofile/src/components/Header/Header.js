import React from 'react'

const Header = (props) => {
  return (
    <div className="cont">
        <hr className="hr" />
        <h1>{props.title}</h1>
    </div>
  )
}

export default Header