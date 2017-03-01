import React, { Component } from 'react';
import logo from './logo.svg';
import publicUrlPr from './public_url-pr.png';
import normalBuild from './normal-build.png';
import publicUrlBuild from './public-url-build.png';
import vclOne from './vcl-one.png';
import vclTwo from './vcl-two.png';
import paperlessClub from './paperless-club.png';
import githubNoClub from './github-no-club.png';
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
          <h2>Last Time</h2>
          <div className="body-text">
            Showed deploying an ember app with s3 & redis.
            <br/>
            Since then...
          </div>
        </div>
        <div className="App-section">
          <h2>
            <a target="_blank" href="https://github.com/facebookincubator/create-react-app/pull/1504">CRA PUBLIC_URL PR</a>
          </h2>
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
            <a target="_blank" href='https://github.com/raycohen/ember-cli-deploy-create-react-app/blob/master/index.js#L70-L91'>
              runs the react build command
            </a>
            {' '}
            instead of building the ember app.
          </div>
        </div>
        <div className="fastly-divider">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Fastly</h2>
        </div>
        <div className="App-section">
          <h2>Edge Dictionaries</h2>
          <div className='body-text body-text-dict'>
            <a target="_blank" href="https://docs.fastly.com/guides/edge-dictionaries/creating-and-manipulating-dictionary-items">API Guide</a>
            <br/>
            Never Hit Origin:
          </div>

          <img src={vclOne} className="App-image" />
          ...
          <img src={vclTwo} className="App-image" />
        </div>
        <div className="App-section">
          <h2>ember-cli-deploy-fastly-edge-dictionary</h2>
          <div className="body-text">
            <a target="_blank" href='https://github.com/raycohen/ember-cli-deploy-fastly-edge-dictionary'>
              Github Repo
            </a>
          </div>
        </div>
        <div className="App-section">
          <h2>This page</h2>
          <div className="body-text">
            <a target="_blank" href='https://github.com/raycohen/stampy-club'>
              Github Repo
            </a>
          </div>
        </div>
        <div className="App-section">
          <h2>paperless.club was $$$</h2>
          <img src={paperlessClub} className="App-image" />
        </div>
        <div className="App-section">
          <h2>Github url validation</h2>
          <img src={githubNoClub} className="App-image" />
        </div>
      </div>
    );
  }
}

export default App;
