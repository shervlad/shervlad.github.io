import React from 'react';
import './App.css';
// import Navbar from './components/navbar';
import Projects from './components/projects';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootstrap from 'react-bootstrap';
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
      <ReactBootstrap.Navbar bg="light" expand="sm" sticky="top">
        <ReactBootstrap.Navbar.Brand href='https://www.shervlad.github.io/'>Vlad Seremet</ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootstrap.Nav className="ml-auto">
            <Link to="resume" className="link">Resume</Link>
            <Link to="blog">Blog</Link>
            <Link to="projects">Projects</Link>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Navbar>
      <Route path='/projects' component={Projects}/>
      </div>
    </Router>
  );
}


export default App;
