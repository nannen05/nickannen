import React, { Component } from 'react'
import '../Styles.css'

class Header extends Component {
  render() {
    return (
      <section>
        <div className="view-header">
          <div className="view-header__revel scene_element scene_element--slideOutLeft" />
          <div id="particles-js" />

          <div className="view-header__content">
            <div className="view-header__eyebrow scene_element scene_element--fadeinup">
              <h2>Nick Annen</h2>
            </div>
            <div className="view-header__headline scene_element scene_element--fadeinup">
              <h1>
                Front End Developer &amp;
                <br /> Web Designer
              </h1>
            </div>
          </div>

          <div className="view-header__scroll scene_element scene_element--fadeinup">
            <i className="fa fa-angle-double-down pulseing" aria-hidden="true" id="scroll-next" />
          </div>
        </div>
      </section>
    )
  }
}

export default Header
