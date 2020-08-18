import React, { Component } from 'react'
import {Tab, Tabs} from 'react-bootstrap';
import {BrowserRouter as Router, Link, Route, NavLink} from 'react-router-dom';
import MazeSolverOverview from './mazeSolverOverview'
import MazeSolverReport from './mazeSolverReport'
import './css/mazeSolverProject.css'

export default class MazeSolverProject extends Component {
  render() {
    return (
      <div style={{
        textAlign: "justify"
      }}>
        <h2> Wall3D: Maze Solving Challenge </h2>
        <p align="middle"><i>Team 9: Talia Pelts, Kevin Carlson, Jonathan Samayoa, Susan Ni, Vlad Seremet</i></p>

        <Tabs defaultActiveKey="overview" style={{fontWeight:"bold"}} id="uncontrolled-tab-example">
          <Tab eventKey="overview" title="General Overview">
            <MazeSolverOverview/>
          </Tab>
          <Tab eventKey="report" title="Technical Report">
            <MazeSolverReport />
          </Tab>
        </Tabs>


      </div>
    )
  }
}



