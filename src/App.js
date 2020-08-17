import React from 'react';
import './App.css';
// import Navbar from './components/navbar';
import Projects from './components/projects';
import Resume from './components/resume';
import {BrowserRouter as Router, Link, Route, NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootstrap from 'react-bootstrap';
function App() {
  var activelink=0;
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App main-container">
        <div className="navbar">
        <div className="left">
          <h2>Vlad Seremet</h2>
        </div>
        <div className="right">
              <div className="navlink-container"> 
              <NavLink to="/" className="navlink" activeStyle={{borderBottom: '1px solid black', padding: '2px'}} exact> 
                Resume 
              </NavLink>
              </div>
              <div className="navlink-container"> 
              <NavLink to="/projects" className="navlink" activeStyle={{borderBottom: 'solid 1px black', padding: '2px'}} > 
              Projects
              </NavLink>
              </div>
              <div className="navlink-container"> 
              <NavLink to="/blog" className="navlink" activeStyle={{borderBottom: 'solid 1px black', padding: '2px'}}> 
                Blog
              </NavLink>
              </div>

        </div>

        </div>
          <Route path='/'   component={Resume} exact/>
          <Route path='/projects' component={Projects}/>
      </div>
    </Router>
  );
}


export default App;
