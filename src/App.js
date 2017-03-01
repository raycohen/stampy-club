import React, { Component } from 'react';
import logo from './logo.svg';
import publicUrlPr from './public_url-pr.png';
import normalBuild from './normal-build.png';
import publicUrlBuild from './public-url-build.png';
import vclOne from './vcl-one.png';
import vclTwo from './vcl-two.png';
import paperlessClub from './paperless-club.png';
import craStars from './cra-stars.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Deploying <span className='mono'>create-react-app</span> apps</h2>
        </div>
        <div className="App-section">
          <h2>What is create-react-app?</h2>
          <p>
            CRA is a popular convention-based project setup for building React apps. With no additional setup it provides:
            <ul>
              <li>webpack build configuration</li>
              <li>babel configuration for es6 features</li>
              <li>a development server</li>
              <li>CSS autoprefixing</li>
              <li>live-reloading styles</li>
              <li>linting with ESLint</li>
              <li>testing with Jest</li>
            </ul>
            <img src={craStars} width="200" alt="really popular" /><br/>
            It is in the early stages and improving rapidly with a lot of community support.
          </p>

          <h3>Does Paperless Post use it?</h3>
          <p>
            <ul>
              <li>
                DISCO is using it for a new mobile version of the Paper Browser.
                {' '}
                <a target="_blank" href="https://github.com/paperlesspost/paper-browser-redux">github repo</a>
              </li>
              <li>
                 The Snugbag project uses it.
                 <a target="_blank" href="https://github.com/paperlesspost/snugbag/">github repo</a>
              </li>
              <li>
                This page uses it.
                {' '}
                <a target="_blank" href='https://github.com/raycohen/stampy-club'>github repo</a>
              </li>
            </ul>

            Moving forward, is is the likely choice for all new React-based projects.
            Using it means we get a lot of nice conveniences without minimal setup effort.
          </p>
        </div>
        <div className="App-section">
          <h2>Last Time</h2>
          <p>
            Showed deploying an ember app with s3 & redis.
            <br/>
            Since then...
          </p>
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
      </div>
    );
  }
}

export default App;
