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
          <h1>Deploying <span className='mono'>create-react-app</span> apps</h1>
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
              <li>production builds</li>
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
                 {' '}
                 <a target="_blank" href="https://github.com/paperlesspost/snugbag/">github repo</a>
              </li>
              <li>
                This page uses it.
                {' '}
                <a target="_blank" href='https://github.com/raycohen/stampy-club'>github repo</a>
              </li>
            </ul>

            Moving forward, it is the likely choice for all new React-based projects.
            Using it means we get a lot of nice conveniences without minimal setup effort.
          </p>
        </div>
        <div className="App-section">
          <h2>CRA Production Builds</h2>
          <p>
            CRA provides the ability to create production builds. Doing so gives you:
            <ul>
              <li>minification</li>
              <li>source maps</li>
              <li>fingerprinted filenames like main.abc123.js for safe caching</li>
              <li>an index.html file referencing those files</li>
            </ul>
          </p>
          <h3>index.html from `npm run build`</h3>
          <img src={normalBuild} className="App-image" />
          <p style={{'margin-top': '20px'}}>
            With these local paths, serving static assets from a CDN is problematic.
            The files will be refernced relative to the path the html is served from which may not be what we want.
          </p>
          <h3>
            Earlier this month: <a target="_blank" href="https://github.com/facebookincubator/create-react-app/pull/1504">CRA PUBLIC_URL PR</a> landed
          </h3>
          <img src={publicUrlPr} className="App-image" />
        </div>
        <div className="App-section">
          <p>
            It allows you to specify the full path for your assets.
            For example, if you upload your build files to an s3 bucket, you can specify the path to that bucket
          </p>
          <h3 className='mono'>PUBLIC_URL=https://s3.amazonaws.com/stampyclub/stampy-club/ npm run build</h3>
          <img src={publicUrlBuild} className="App-image public-url-image" />
          <p style={{'margin-top': '20px'}}>
            Now you can serve this html from any path and your assets will load properly
          </p>
        </div>

        <div className="App-section">
          <h2>ember-cli-deploy + create-react-app</h2>
          <p>
            In a previous
            {' '}
            <a href="https://indoctrination.paperlesspost.net/docs/dev/dev_o_clock/previous-talks">talk</a>
            {' '}
            I covered ember-cli-deploy for deploying ember apps. Now ember-cli-deploy can work with react apps!
            <h3>ember-cli-deploy-create-react-app</h3>
            The ember-cli-deploy-create-react-app hooks in to ember-cli-deploy's build step where it
            would normally run the ember build to create the static files we need.
            Instead, you
            {' '}
            <a target="_blank" href="https://github.com/raycohen/stampy-club/blob/master/config/deploy.js#L34-L36">specify</a>
            {' '}
            the PUBLIC_URL in config/deploy.js and it
            {' '}
            <a target="_blank" href='https://github.com/raycohen/ember-cli-deploy-create-react-app/blob/master/index.js#L70-L91'>
              builds the CRA app
            </a>
            {' '}
            and passes the static output files to the rest of the pipeline.
          </p>
        </div>
        <div className="fastly-divider">
          <h1>Fastly</h1>
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
