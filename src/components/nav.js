import React, { Component } from 'react'
import '../Styles.css'

class Nav extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <button className="hamburger nav-icon nav-1">
            <div />
            <div />
            <div />
          </button>
          <ul id="nav-mobile">
            <li>
              <span id="scroll-services">Services</span>
            </li>
            <li>
              <span id="scroll-work">Work</span>
            </li>
            <li>
              <span id="scroll-contact">Contact</span>
            </li>
          </ul>
        </div>
        <div className="nav__overlay" />
      </nav>
    )
  }
}

export default Nav
