import React, { Component } from 'react'
import * as ReactBootstrap from 'react-bootstrap';
import {BrowserRouter as Router, Link, Route, NavLink} from 'react-router-dom';

export default class Resume extends Component {
  render() {
    return (
      <div className="video-container">
        <iframe src="https://drive.google.com/file/d/1VVe_UQXAJ0jR7bAX5HILpGXAUZKR6Y2_/preview" className="pdf-frame"></iframe>
      </div>
    )
  }
}

