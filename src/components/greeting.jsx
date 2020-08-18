import React, { Component } from 'react'
import * as ReactBootstrap from 'react-bootstrap';
import {BrowserRouter as Router, Link, Route, NavLink} from 'react-router-dom';

export default class Greeting extends Component {
  render() {
    return (
        <div style={
            {
                background: "url('/background.jpg')",
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                width:'100%',
                height:'1000px',
                color: 'white'
            }
        }>
            <div style={
                {
                    padding: '10px 0px 0px 10px',
                    textAlign: 'left',
                    display: 'inline-block',
                    float: 'left',
                    width: '65%',
                    fontSize: '3vw'
            
                }
            }>
            <b>Main interests:</b> 
            <ul>
                <li>Robotics</li>
                <li>Reinforcement Learning</li>
                <li>Computer Vision</li>
            </ul>
            </div>
        </div>
    )
  }
}

