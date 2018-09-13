import React, { Component } from 'react';
import './App.css';
import { Provider } from './Provider';
import NavBar from './nav/Navbar';
import ApplicationViews from './ApplicationViews';
import { Container } from 'bloomer/lib/layout/Container';
import FooterComponent from './FooterComponent';

class App extends Component {
  render() {
    return (
      <div id="app-body">
        <React.Fragment>
          <Provider>
            <div id="app-content">
              <NavBar />
              <Container>
                <ApplicationViews />
              </Container>
              <div id="app-footer">
                <FooterComponent />
              </div>
            </div>
          </Provider>
        </React.Fragment>
      </div>
    );
  }
}

export default App;