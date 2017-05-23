import React, {Component} from 'react';

import styles from '../stylesheets/topNav.css'
import avatar from '../images/share/avatar.jpg'

export default class TopNav extends Component {
  render() {
    return (
      <nav className="topNav">
        <div className="main-container">
          <div className="text-center">
            <img src={avatar} className="avatar" />
          </div>
        </div>
      </nav>
    )
  }
}
