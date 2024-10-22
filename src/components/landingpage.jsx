import React, { Component } from 'react';

import unicorn from '../assets/unicorn.jpg';

class LandingPage extends Component {
  render() {
    return (
      <div className='landing'>
        <img src={unicorn} alt="avatar" className='avatar-img' />

        <div className='banner-text'>
          <h1>Camila Lacerda</h1>
          <h2>Full Stack Web Developer</h2>
          <hr />
          <p>HTML/CSS | Javascript | Typescript | Angular | React | PHP | MySQL | MongoDB</p>
          <div className="social-links">
            <a href="https://codepen.io/collection/qOrQWP" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-codepen" aria-hidden="true"></i>
            </a>
            <a href="https://www.linkedin.com/in/camiladlacerda/" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
            <a href="https://github.com/milacerda" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-github-square" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage;