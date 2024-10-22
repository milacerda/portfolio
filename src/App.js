import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

import Header from './components/header';


class App extends Component {
  render() {
    return (
      <>
        <Container fluid className='main'>
          {/* <Header /> */}
          <Outlet />
        </Container>
      </>
    );
  }
}

export default App;
