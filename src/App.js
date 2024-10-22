import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

import './App.scss';


class App extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Outlet />
        </Container>
      </div>
    );
  }
}

export default App;
