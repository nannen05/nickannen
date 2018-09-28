import React, { Component } from 'react'
import '../Styles.css'

class Services extends Component {
  render() {
    return (
      <section id="services">
        <div className="view-services view light-grey-bg">
          <div className="container">
            <div className="row">
              <div className="view-services__item col s12 m6 l4 fadeInUpSmall">
                <div className="view-services__image">
                  <img src="../assets/img/front-end.png" alt="" />
                </div>
                <div className="view-services__header">
                  <h3>Front End Development</h3>
                </div>
                <div className="view-services__description">
                  <p>Responsive front-end development delivering a high quality, lean HTML/CSS and Javascript code.</p>
                </div>
              </div>

              <div className="view-services__item col s12 m6 l4 fadeInUpSmall">
                <div className="view-services__image">
                  <img src="../assets/img/wordpress.png" alt="" />
                </div>
                <div className="view-services__header">
                  <h3>Wordpress Development</h3>
                </div>
                <div className="view-services__description">
                  <p>I build websites using WordPress, which makes editing your website as easy as editing a Word document.</p>
                </div>
              </div>

              <div className="view-services__item col s12 m6 l4 fadeInUpSmall">
                <div className="view-services__image">
                  <img src="../assets/img/craft.png" alt="" />
                </div>
                <div className="view-services__header">
                  <h3>Craft CMS Development</h3>
                </div>
                <div className="view-services__description">
                  <p>
                    If Wordpress doesnt meet your needs and need something more custom but still need a CMS, Craft CMS is very flexiable and still
                    easy to use
                  </p>
                </div>
              </div>

              <div className="view-services__item col s12 m6 l4 fadeInUpSmall">
                <div className="view-services__image">
                  <img src="../assets/img/design.png" alt="" />
                </div>
                <div className="view-services__header">
                  <h3>Web Design</h3>
                </div>
                <div className="view-services__description">
                  <p>
                    I will work with you to create a design that looks great, is optimized across all devices, and converts visitors into customers.
                  </p>
                </div>
              </div>

              <div className="view-services__item col s12 m6 l4 fadeInUpSmall">
                <div className="view-services__image">
                  <img src="../assets/img/ux.png" alt="" />
                </div>
                <div className="view-services__header">
                  <h3>UX/UI Design</h3>
                </div>
                <div className="view-services__description">
                  <p>Onboarding and employment contracts with a few clicks. Say goodbye to paper chaos.</p>
                </div>
              </div>

              <div className="view-services__item col s12 m6 l4 fadeInUpSmall">
                <div className="view-services__image">
                  <img src="../assets/img/backend.png" alt="" />
                </div>
                <div className="view-services__header">
                  <h3>Back End Development</h3>
                </div>
                <div className="view-services__description">
                  <p>I also can handle the back-end development of websites as an additional service if that is needed.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Services
