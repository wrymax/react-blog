import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import TopNav from '../components/TopNav'
import Footer from '../components/Footer'
// import { browserHistory } from 'react-router'

import styles from '../stylesheets/share.css'

class App extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        <TopNav></TopNav>

        <div className="main-container">
          {children}
        </div>

        <Footer></Footer>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
})

export default connect(mapStateToProps, {})(App)
