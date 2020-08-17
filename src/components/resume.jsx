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
                            Relevant Coursework: 
                            &nbsp;
                            <a href="https://mc.ai/6-141-robotics-science-systems-a-review/" target="_blank">
                                Robotics: Science and Systems, 
                            </a>
                            &nbsp;
                            
                            <a href="https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-172-performance-engineering-of-software-systems-fall-2018/" target="_blank">
                                Performance Engineering of Software Systems*, 
                            </a>
                            &nbsp;
                            <a href="http://web.mit.edu/6.033/www/general.shtml" target="_blank">
                            Computer Systems Engineering*, 
                            </a>
                            &nbsp;
                            <a href="https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-005-software-construction-spring-2016/" target="_blank">
                            Elements of Software Construction*, 
                            </a>
                            &nbsp;
                            <a href="http://courses.csail.mit.edu/6.036/" target="_blank">
                            Machine Learning, 
                            </a>
                            &nbsp;
                            <a href="https://py.mit.edu/fall20" target="_blank">
                            Fundamentals of Programming,
                            </a>
                            &nbsp;
                            <a href="https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/" target="_blank">
                            Introduction to Algorithms, 
                            </a>
                            &nbsp;
                            <a href="https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0002-introduction-to-computational-thinking-and-data-science-fall-2016/" target="_blank">
                            Introduction to Data Science, 
                            </a>
                            &nbsp;
                            <a href="https://courses.csail.mit.edu/6.042/spring18/classinfo.shtml" target="_blank">
                            Mathematics for Computer Science, 
                            </a>
                            &nbsp;
                            <a href="https://www.eecs.mit.edu/academics-admissions/academic-information/subject-updates-spring-2020/6884" target="_blank">
                            Computational Sensorimotor Learning*
                            </a>
                            &nbsp;
                            <a href="https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-004-computation-structures-spring-2017/" target="_blank">
                            Computation Structures*, 
                            </a>
                            <br/>
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
                            <a href="http://darbelofflab.mit.edu/" target="_blank">
                                MIT D’Arbeloff Laboratory
                            </a>
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
                        <li> Programmed a UR robotic arm as part of &nbsp;
                            <a href="http://www.mit.edu/~nselby/teachbot.html" target="_blank">
                                TeachBot - an interactive apprenticeship program.
                            </a>
                            </li>
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
                            <a href="http://acl.mit.edu/" target="_blank">
                                MIT Aerospace Controls Lab
                            </a>
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
                        <li> Designed and tested algorithms for 
                            &nbsp;
                            <a href="http://acl.mit.edu/projects/socially-acceptable-navigation" target="_blank">
                                navigating through crowds while avoiding collisions.
                            </a>
                        </li>
                    </ul>
                </tr>



                <tr>
                    <td width="80%">
                        <b>
                            MIT
                        </b>

                        <div className="subtitle">
                            Teacher Assistant for  &nbsp;
                            <a href="https://py.mit.edu/fall20" target="_blank">
                                6.009 (fundamentals of programming using Python)
                            </a>
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
                            <a href="https://oneshore.com/" target="_blank">
                                OneShore Energy GmbH
                            </a>
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
                            <a href="https://gelp.mit.edu/" target="_blank">
                                Gordon Engineering Leadership Program
                            </a>
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
                            <a href="https://waveweekmoldova.wordpress.com/" target="_blank">
                                Wave Week Moldova – a leadership program for students
                            </a>

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
                            English Debate Club at the 
                            &nbsp;
                            <a href="https://americahouse.md/" target="_blank">
                                American Resource Center
                            </a>
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

