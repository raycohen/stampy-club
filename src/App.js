import React, { Component } from 'react';
import logo from './logo.svg';
import publicUrlPr from './public_url-pr.png';
import normalBuild from './normal-build.png';
import publicUrlBuild from './public-url-build.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Stampy Club</h2>
        </div>
        <div className="App-section">
          <h2>PUBLIC_URL PR</h2>
          <img src={publicUrlPr} className="App-image" />
        </div>
        <div className="App-section">
          <h2 className='mono'>npm run build</h2>
          <img src={normalBuild} className="App-image" />
        </div>
        <div className="App-section">
          <h2 className='mono'>PUBLIC_URL=https://s3.amazonaws.com/stampyclub/stampy-club/ npm run build</h2>
          <img src={publicUrlBuild} className="App-image public-url-image" />
        </div>
        <div className="App-section">
          <h2>ember-cli-deploy-create-react-app</h2>
          <div className="body-text">
            It
            {' '}
            <a href='https://github.com/raycohen/ember-cli-deploy-create-react-app/blob/master/index.js#L70-L91'>
              runs the react build command
            </a>
            {' '}
            instead of building the ember app.
          </div>
        </div>
      </div>
    );
  }
}

export default App;
