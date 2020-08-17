import React, { Component } from 'react'
import * as ReactBootstrap from 'react-bootstrap';
import {BrowserRouter as Router, Link, Route, NavLink} from 'react-router-dom';

export default class MazeSolverProject extends Component {
  render() {
    return (
      <div>
        <h2> Wall3D: Maze Solving Challenge </h2>
        <div className="video-wrapper">
          <iframe className="video-frame" src="https://www.youtube.com/embed/PrP86YrPoR0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>


        <div className="video-wrapper">
          <iframe className="video-frame" src="https://docs.google.com/presentation/d/e/2PACX-1vTqXaYhTXgwJ_DPO3bpJjTPzB6wHcrB4mNkEAurd-2MHXkMApfmxKwZkfwkg2wChygbciwCbMuz_3Cd/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

        </div>
      </div>
    )
  }
}



