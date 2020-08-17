import React, { Component } from 'react'
import {Tab, Col, Row, Nav} from 'react-bootstrap';
import {BrowserRouter as Router, Link, Route, NavLink} from 'react-router-dom';
import MazeSolverProject from './mazeSolverProject';
import HarvestRProject from './harvestRProject';
export default class Projects extends Component {
  render() {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col lg={3}>
                <Nav variant="tabs" className="flex-column">
                    <Nav.Item>
                        <NavLink   to="/projects" className="navlink navlink-left"
                                   activeStyle={{
                                        border: '1px solid black', 
                                        padding: '2px',
                                        borderRadius: '10px'
                                        }}
                                    exact>
                                    Maze Solver
                                    
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink   to="/projects/harvestr" className="navlink navlink-left"
                                   activeStyle={{
                                        border: '1px solid black', 
                                        padding: '2px',
                                        borderRadius: '10px'
                                        }}
                                    exact>
                        HarvestR
                        </NavLink>
                    </Nav.Item>
                </Nav>
                </Col>
                <Col lg={9}>
                <Tab.Content>
                    <Route path="/projects/" component={MazeSolverProject} exact/>
                    <Route path="/projects/harvestr" component={HarvestRProject} exact/>
                </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    )
  }
}



