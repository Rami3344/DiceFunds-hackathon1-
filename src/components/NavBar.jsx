import React from 'react'
import Logo from "./Content/Logo.png"
function NavBar(props) {
  return (
    <div className='navbar'>
        <img className='logo' src={Logo}alt="" />
        <div className="nav-list">
            <ul>
                <li><a href={props.home}>Home</a></li>
                <li><a href={props.about}>About Us</a></li>
                <li><a href={props.activities}>Activities</a></li>
                <li><a href={props.donation}>Donation</a></li>
                <li><a href={props.contact}>Contact Us</a></li>
            </ul>
        </div>
        <div className='register'>
            <button className='su'>Sign Up</button>
            <button className='si' >Sign In</button>
        </div>
    </div>
  )
}

export default NavBar