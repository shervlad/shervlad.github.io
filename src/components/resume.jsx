import React, { Component } from 'react'
import * as ReactBootstrap from 'react-bootstrap';
import {BrowserRouter as Router, Link, Route, NavLink} from 'react-router-dom';

export default class Resume extends Component {
  render() {
    return (
      <div style={{verticalAlign:'center'}}>
          <table id="t" width="100%" style={{textAlign:'left', verticalAlign:'center', margin:'20px'}}>
            <tbody>
                <tr>
                    <td><h4>Education</h4></td>
                </tr>
                <tr>
                    <td width="80%">
                        <b>Massachusetts Institute of Technology </b><br/>
                        <div className="subtitle">
                            Relevant Coursework: Robotics: Science and Systems, Performance Engineering of Software Systems*, 
                            Software Systems Engineering*, Computation Structures*, Elements of Software Construction*, 
                            Machine Learning, Fundamentals of Programming, Introduction to Algorithms, 
                            Introduction to Data Science, Mathematics for Computer Science, Computational Sensorimotor Learning*
                            * - project based class
                        </div>
                        
                        </td>
                    <td width="20%" style={{textAlign:"center"}}>Cambridge, MA <br/>
                        2015-2020</td>
                </tr>
                <tr>
                    <td style={{paddingTop:'20px'}}><h4>Experience</h4></td>
                </tr>
                <tr>
                    <td width="80%">
                        <b>
                        MIT D’Arbeloff Laboratory

                        </b>

                        <div className="subtitle">
                        Undergraduate Research Assistant – UROP in robotics
                        </div>
                        
                        </td>
                    <td width="20%" style={{textAlign:"center"}}>Cambridge, MA <br/>
                        Feb.‘19 – May ‘19</td>
                </tr>
                <tr>
                    <ul>
                        <li> Programmed a UR robotic arm as part of an interactive apprenticeship program called TeachBot. </li>
                        <li> Worked with ROS, MoveIt, ReactJs, ExpressJs.</li>
                    </ul>
                </tr>



                <tr>
                    <td width="80%">
                        <b>
                            Amazon Web Services
                        </b>

                        <div className="subtitle">
                            Software Engineering Intern
                        </div>
                        
                        </td>
                    <td width="20%" style={{textAlign:"center"}}>
                        Berlin, Germany
                        <br/>
                        Jun.-Aug. 2017
                        </td>
                </tr>
                <tr>
                    <ul>
                        <li> Improved the refund approval workflow by building a microservice that helps tech assistants review purchase history.</li>
                        <li> Technologies used: AngularJS, ExpressJS, Java, Other internal AWS tools</li>
                    </ul>
                </tr>



                <tr>
                    <td width="80%">
                        <b>
                            MIT Aerospace Controls Lab
                        </b>

                        <div className="subtitle">
                            Undergraduate Research Assistant - UROP in Machine Learning/Robotics
                        </div>
                        
                        </td>
                    <td width="20%" style={{textAlign:"center"}}>
                        Cambridge, MA 
                        <br/>
                        Feb. – May. ‘17
                        </td>
                </tr>
                <tr>
                    <ul>
                        <li> Created a pipeline for automated acquisition, and processing of image datasets. 
</li>
                        <li> Designed and tested algorithms for navigating through crowds while avoiding collisions.
</li>
                    </ul>
                </tr>



                <tr>
                    <td width="80%">
                        <b>
                            MIT
                        </b>

                        <div className="subtitle">
                            Teacher Assistant for 6.009 (fundamentals of programming using Python)
                        </div>
                        
                        </td>
                    <td width="20%" style={{textAlign:"center"}}>
                        Cambridge, MA 
                        <br/>
                        Sep. ‘17 – May ‘18
                        </td>
                </tr>
                <tr>
                    <ul>
                        <li>Helped teachers with assignments and student assistance.
</li>
                        <li>Explained concepts such as iteration, recursion, data structures in python, debugging techniques, writing efficient code, “the pythonic way” etc.
</li>
                    </ul>
                </tr>


                <tr>
                    <td width="80%">
                        <b>
                            OneShore Energy GmbH
                        </b>

                        <div className="subtitle">
                            Software Engineering Intern
                        </div>
                        
                        </td>
                    <td width="20%" style={{textAlign:"center"}}>
                        Berlin, Germany
                        <br/>
                        Summer 2016
                        </td>
                </tr>
                <tr>
                    <ul>
                        <li>Improved the data visualization process by developing a dashboard using Django on the backend and HTML/CSS/JS (jQuery, highcharts) on the frontend. 
</li>
                        <li>Debugged and improved the efficiency of a simulation tool that predicts the performance of the electrical system (replaced and improved some algorithms and data structures used in the simulation and replaced some Python code with C++).
</li>
                    </ul>
                </tr>


                <tr>
                    <td><h4>Leadership</h4></td>
                </tr>
                <tr>
                    <td width="80%">
                        <b>
                            Gordon Engineering Leadership Program
                        </b>

                        <div className="subtitle">
                            Trainee
                        </div>
                        
                        </td>
                    <td width="20%" style={{textAlign:"center"}}>Cambridge, MA <br/>
                        2017</td>
                </tr>
                <tr>
                    <td width="80%">
                        <b>
                            Wave Week Moldova – a leadership program for students

                        </b>

                        <div className="subtitle">
                            Staff member and coach
                        </div>
                        
                        </td>
                    <td width="20%" style={{textAlign:"center"}}>
                        Chisinau, Moldova
                        <br/>
                        2012-2015
                        </td>
                </tr>


                <tr>
                    <td width="80%">
                        <b>
                            English Debate Club at the American Resource Center
                        </b>

                        <div className="subtitle">
                            Moderator and Coach
                        </div>
                        
                        </td>
                    <td width="20%" style={{textAlign:"center"}}>
                        Chisinau, Moldova
                        <br/>
                        2014-2015
                        </td>
                </tr>



            </tbody>
            </table>

          <table id="t" width="100%" style={{textAlign:'left', verticalAlign:'center', margin:'20px'}}>
                <tr>
                    <td><h4>Skills</h4></td>
                </tr>

                <tr>
                    <td width="20%"> <b> Robotics: </b> </td>
                    <td width="80%" > 
                    ROS, Gazebo, Unity ML-Agents, MuJoCo, Pybullet, Fusion 360, Solidworks, Blender
                    </td>
                </tr>
                <tr>
                    <td width="20%"> <b> AI/ML: </b> </td>
                    <td width="80%" > 
                    Pytorch, reverb, CNNs, Autoencoders, Object Instance/Semantic segmentation
                    </td>
                </tr>
                <tr>
                    <td width="20%"> <b> WebDev: </b> </td>
                    <td width="80%" >
                        Django, JQuery, ReactJS, ExpressJS, HTML/CSS/JS
                    </td>
                </tr>
                <tr>
                    <td width="20%"> <b> Other: </b> </td>
                    <td width="80%" >
                        Linux, Docker, Arduino, Adobe Photoshop, git, vim, web scraping, violin, piano, drums
                    </td>
                </tr>
                <tr>
                    <td width="20%"> <b> Languages: </b> </td>
                    <td width="80%" >
                        Romanian (native), Russian (fluent), English (fluent), German (beginner)
                    </td>
                </tr>

          </table>
      </div>
    )
  }
}

