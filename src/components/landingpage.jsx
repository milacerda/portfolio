import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import unicorn from '../assets/unicorn.jpg';

class LandingPage extends Component {
  render() {
    return (
      <div className='main'>
        <Row>
          <Col>
            <img src={unicorn} alt="avatar" className='avatar-img' />

            <div class="banner-text">
              <h1>Camila Lacerda</h1>
              <h2>Full Stack Web Developer</h2>
              <hr />
              <p>HTML/CSS | Javascript | Typescript | Angular | React | PHP | MySQL | MongoDB</p>
              <div class="social-links">
                <a href="https://codepen.io/collection/qOrQWP" target="_blank" rel="noopener noreferrer">
                  <i class="fa fa-codepen" aria-hidden="true"></i>
                </a>
                <a href="https://www.linkedin.com/in/camiladlacerda/" target="_blank" rel="noopener noreferrer">
                  <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                </a>
                <a href="https://github.com/milacerda" target="_blank" rel="noopener noreferrer">
                  <i class="fa fa-github-square" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default LandingPage;