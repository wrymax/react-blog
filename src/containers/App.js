import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import TopNav from '../components/TopNav'
import Footer from '../components/Footer'
// import { browserHistory } from 'react-router'

class App extends Component {
  static propTypes = {
    // Injected by React Redux
    // errorMessage: PropTypes.string,
    // resetErrorMessage: PropTypes.func.isRequired,
    // inputValue: PropTypes.string.isRequired,
    // Injected by React Router
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
