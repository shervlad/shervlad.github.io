import React from 'react';
import './App.css';
// import Navbar from './components/navbar';
import Projects from './components/projects';
import Resume from './components/resume';
import Greeting from './components/greeting';
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
          <NavLink to="/" exact style={
            {
              color: 'black',
              textDecoration: 'none'
            }
          }>
            <h2>Vlad Seremet</h2>
          </NavLink>
        </div>
        <div className="right" style={{fontSize:'20'}}>
              <NavLink to="/resume" className="navlink" activeStyle={{borderBottom: '1px solid black'}} exact> 
                Resume 
              </NavLink>
              <NavLink to="/projects" className="navlink" activeStyle={{borderBottom: 'solid 1px black'}}> 
              Projects
              </NavLink>
              <NavLink to="/blog" className="navlink" activeStyle={{borderBottom: 'solid 1px black'}}> 
                Blog
              </NavLink>

        </div>

        </div>
          <Route path='/' component={Greeting} exact/>
          <Route path='/resume'   component={Resume} exact/>
          <Route path='/projects' component={Projects}/>
      </div>
    </Router>
  );
}


export default App;
