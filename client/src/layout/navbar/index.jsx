import React from 'react'
import './index.scss'
import { Link, NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div id='navbar'>
      <div className="dev">
        <div className="title">
          <h2>Pulse</h2>
        </div>
        <div className="links">
          <NavLink className={"link"} to={'/'}>HOME</NavLink>
          <Link className={"link"} >about</Link>
          <Link className={"link"} >contact</Link>
          <NavLink className={"link"} to={'/add'}>ADD</NavLink>
          <NavLink className={"link"} to={'/wish'}>WISH</NavLink>
          <NavLink className={"link"} to={'/basket'}>BASKET</NavLink>

        </div>
      </div>
    </div>
  )
}

export default Navbar