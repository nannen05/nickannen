import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './store/actions'
import Nav from './components/nav'
import Header from './components/header'
import Services from './components/services'
import Work from './components/work'
import Contact from './components/contact'
import './App.css'
import './Styles.css'

class App extends Component {
  componentDidMount() {
    //this.props.fetchHeader()
    //console.log(this.props)
  }
  render() {
    return (
      <div id="app" className="m-scene">
        <Nav />

        <Header />

        <Services />

        <Work />

        <Contact />
      </div>
    )
  }
}

const mapStateToProps = ({ headerData }) => {
  return {
    headerData
  }
}

export default connect(
  mapStateToProps,
  actions
)(App)
