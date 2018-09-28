import React, { Component } from 'react'
import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../Styles.css'
import portfolio1 from '../assets/img/portfolio-1.png'
import portfolio2 from '../assets/img/portfolio-2.png'
import portfolio3 from '../assets/img/portfolio-3.png'
import portfolio4 from '../assets/img/portfolio-4.png'
import portfolio5 from '../assets/img/portfolio-5.png'
import portfolio6 from '../assets/img/portfolio-6.png'
import portfolio7 from '../assets/img/portfolio-7.png'
import portfolio8 from '../assets/img/portfolio-8.png'

import { Transition } from 'react-transition-group'
import VisibilitySensor from 'react-visibility-sensor'

class Work extends Component {
  constructor(props) {
    super(props)

    this.state = {}

    this.controller = new ScrollMagic.Controller()
  }
  componentDidMount() {}
  render() {
    return (
      <section id="work">
        <div className="view-portfolio view">
          <div className="container">
            <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={500} transitionLeaveTimeout={300} transitionEnter={true}>
              <VisibilitySensor>
                {({ isVisible }) => (
                  <div className={isVisible ? 'view-portfolio__image fade-in' : 'view-portfolio__image fade-out'}>
                    <div className="view-portfolio__image-wrapper">
                      <img src={portfolio1} alt="" />
                    </div>
                  </div>
                )}
              </VisibilitySensor>

              <VisibilitySensor>
                {({ isVisible }) => (
                  <div className={isVisible ? 'view-portfolio__image visible' : 'view-portfolio__image invisible'}>
                    <div className="view-portfolio__image-wrapper">
                      <img src={portfolio5} alt="" />
                    </div>
                  </div>
                )}
              </VisibilitySensor>

              <div className="view-portfolio__image tall-image">
                <div className="view-portfolio__image-wrapper">
                  <img src={portfolio5} alt="" />
                </div>
              </div>

              <div className="view-portfolio__image">
                <div className="view-portfolio__image-wrapper">
                  <img src={portfolio6} alt="" />
                </div>
              </div>

              <div className="view-portfolio__image wide-image">
                <div className="view-portfolio__image-wrapper">
                  <img src={portfolio4} alt="" />
                </div>
              </div>

              <div className="view-portfolio__image ">
                <div className="view-portfolio__image-wrapper">
                  <img src={portfolio8} alt="" />
                </div>
              </div>

              <div className="view-portfolio__image tall-image">
                <div className="view-portfolio__image-wrapper">
                  <img src={portfolio2} alt="" />
                </div>
              </div>

              <div className="view-portfolio__image">
                <div className="view-portfolio__image-wrapper">
                  <img src={portfolio4} alt="" />
                </div>
              </div>

              <div className="view-portfolio__image wide-image">
                <div className="view-portfolio__image-wrapper">
                  <img src="../assets/img/portfolio-7.png" alt="" />
                </div>
              </div>
            </ReactCSSTransitionGroup>
          </div>
        </div>
      </section>
    )
  }
}

export default Work
