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
    <Router>
      <div className="App main-container">
        <div className="navbar">
        <div className="left">
          <NavLink to={process.env.PUBLIC_URL + "/"} exact style={
            {
              color: 'black',
              textDecoration: 'none'
            }
          }>
            <h2>Vlad Seremet</h2>
          </NavLink>
        </div>
        <div className="right" style={{fontSize:'20'}}>
              <NavLink to={process.env.PUBLIC_URL + "/resume"} className="navlink" activeStyle={{borderBottom: '1px solid black'}} exact> 
                Resume 
              </NavLink>
              <NavLink to={process.env.PUBLIC_URL + "/projects"} className="navlink" activeStyle={{borderBottom: 'solid 1px black'}}> 
              Projects
              </NavLink>
              <NavLink to={process.env.PUBLIC_URL + "/blog"} className="navlink" activeStyle={{borderBottom: 'solid 1px black'}}> 
                Blog
              </NavLink>

        </div>

        </div>
          <Route path={process.env.PUBLIC_URL + '/'}         component={Greeting} exact/>
          <Route path={process.env.PUBLIC_URL + '/resume'}   component={Resume} exact/>
          <Route path={process.env.PUBLIC_URL + '/projects'} component={Projects}/>
      </div>
    </Router>
  );
}


export default App;
