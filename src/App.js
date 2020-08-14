import React from 'react';
import './App.css';
// import Navbar from './components/navbar';
import Projects from './components/projects';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootstrap from 'react-bootstrap';
function App() {
  return (
    <Router>
      <div className="App">
      <ReactBootstrap.Navbar bg="light" expand="sm" sticky="top">
        <ReactBootstrap.Navbar.Brand href="home">Vlad Seremet</ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootstrap.Nav className="ml-auto">
            <ReactBootstrap.Nav.Link href="resume" className="link">Resume</ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link href="blog">Blog</ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link href="projects">Projects</ReactBootstrap.Nav.Link>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Navbar>
      <Route path='/projects' component={Projects}/>
      </div>
    </Router>
  );
}


export default App;
