import React, { Component } from 'react'
import * as ReactBootstrap from 'react-bootstrap';

export default class Projects extends Component {
  render() {
    return (
        <ReactBootstrap.Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <ReactBootstrap.Row>
            <ReactBootstrap.Col sm={3}>
            <ReactBootstrap.Nav variant="tabs" className="flex-column">
                <ReactBootstrap.Nav.Item>
                <ReactBootstrap.Nav.Link eventKey="first">Maze Solver</ReactBootstrap.Nav.Link>
                </ReactBootstrap.Nav.Item>
                <ReactBootstrap.Nav.Item>
                <ReactBootstrap.Nav.Link eventKey="second">HarvestR</ReactBootstrap.Nav.Link>
                </ReactBootstrap.Nav.Item>
            </ReactBootstrap.Nav>
            </ReactBootstrap.Col>
            <ReactBootstrap.Col sm={9}>
            <ReactBootstrap.Tab.Content>
                <ReactBootstrap.Tab.Pane eventKey="first">
                    Hello1
                </ReactBootstrap.Tab.Pane>
                <ReactBootstrap.Tab.Pane eventKey="second">
                    Hello2
                </ReactBootstrap.Tab.Pane>
            </ReactBootstrap.Tab.Content>
            </ReactBootstrap.Col>
        </ReactBootstrap.Row>
        </ReactBootstrap.Tab.Container>
    )
  }
}



