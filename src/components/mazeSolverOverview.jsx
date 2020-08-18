
import React, { Component } from 'react'
import * as ReactBootstrap from 'react-bootstrap';
import {BrowserRouter as Router, Link, Route, NavLink} from 'react-router-dom';

export default class MazeSolverOverview extends Component {
  render() {
    return (
        <div>

        <img style={
          {
            width:"50%",
            float: 'right'
          }
        }  src={'/maze_solver/wall3d.png'}/>

        <p>
          The Maze Challenge was the cultimation of the "Robotics: Science and Systems" class.
          The challenge is to program Wall3d (the robot in the image) to get out of an unexplored maze as fast as possible while minimizing collisions.
        </p>
        <p>
          To accomplish this task, Wall3D uses SLAM, path planning, trajectory following, safety controllers, and frontier exploration.
        </p>
        <p> 
          Our robot got the best score in the Maze Challenge. Most other approaches relied on some variation of wall following.</p>
        <p>
          Here is a video that goes through the high level explanation of how our robot works:
        </p>

        <div className="video-wrapper">
          <iframe className="video-frame" 
                  src="https://www.youtube.com/embed/PrP86YrPoR0" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen>
          </iframe>
        </div>

        <p>
          The sildes for more details on how we use Google Cartografer for SLAM and how we process the map 
          in order to be able to perform A*, and subsequently trajectory following, efficiently:
        </p>
        <div className="video-wrapper">
          <iframe className="video-frame" 
                  src="https://docs.google.com/presentation/d/e/2PACX-1vTqXaYhTXgwJ_DPO3bpJjTPzB6wHcrB4mNkEAurd-2MHXkMApfmxKwZkfwkg2wChygbciwCbMuz_3Cd/embed?start=false&loop=false&delayms=3000" 
                  frameborder="0" 
                  width="960" 
                  height="569" 
                  allowfullscreen="true" 
                  mozallowfullscreen="true" 
                  webkitallowfullscreen="true">
          </iframe>
        </div>

        <p>
            One very important thing we learned in this class is that a robot is a complex system, and it can fail in many unexpected ways, as seen in this video:
        </p>
        <div className="video-wrapper">
          <iframe className="video-frame" 
                  src="https://www.youtube.com/embed/bDDuAJvdg-M" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen>
          </iframe>
        </div>

        <p>
            Nevertheless, after dozens of hours of relentless tweaking, we got pretty good results. This was our final run:
        </p>

        <div style={{width:"100%", position:'relative'}}>
          <div>
            <div style={{width:'50%', display:'inline-block'}}>Rviz visualization:</div> 
            <div style={{width:'50%', display:'inline-block'}}>Reality:</div> 

          </div>
          <div>
            <div style={{float:'left', width:'50%'}}>
              <iframe width="100%" src="https://www.youtube.com/embed/Otesxus6TXY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div style={{float:'right', width:'50%'}}>
              <iframe width="100%" src="https://www.youtube.com/embed/alsAfsBNwQI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>

        <h4>Conclusion</h4>
        <p>
          RSS was one of the best classes I took at MIT. It was very demanding (aprox. 20 hours/week on average) but the amount of knowledge per hour learned in this class was unparalleled.
          Most of the time was spent together with the team working on lab assignments. I was personally responsible for slam (using cartographer) and path planning (A*). Other members of the team were responsible for safety controllers, path following (pure pursuit) and a plan B - a simpler implementation based on wall-following. 
        </p> 

        <img style={{width:'100%'}} src={"/maze_solver/team.jpg"}/>
        </div>
    )
  }
}

