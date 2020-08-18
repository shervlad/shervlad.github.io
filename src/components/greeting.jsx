import React, { Component } from 'react'
import * as ReactBootstrap from 'react-bootstrap';
import {BrowserRouter as Router, Link, Route, NavLink} from 'react-router-dom';

export default class Greeting extends Component {
  render() {
    return (
        <div style={
            {
                background: "url('/background.png')",
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                width:'100%',
                height:'1000px',
                color: 'white'
            }
        }>


            <div className="introTextBox">
                <p>
                    Hi, my name is Vlad and I'm a recent MIT graduate specializing in robotics and artificial intelligence. My main interest 
                    is in making robots that can do useful physical tasks, such as picking irregular objects, harvesting and assembly. To that end, I study Reinforcemnt Learning, 
                    Immitation Learning, Computer Vision, Classical Planning, Control Theory and Simulation.
                    <br/>
                    I you are working on similar things, feel free to contact me: seremetv AT mit.edu
                </p>
            </div>
        </div>
    )
  }
}

