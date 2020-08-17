import React, { Component } from 'react'
import * as ReactBootstrap from 'react-bootstrap';
import {BrowserRouter as Router, Link, Route, NavLink} from 'react-router-dom';

export default class MazeSolverProject extends Component {
  render() {
    return (
      <div style={{
        textAlign: "justify"
      }}>
        <h2> Wall3D: Maze Solving Challenge </h2>

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
      </div>
    )
  }
}


