// Imported Components
import React from 'react';
import '../App.css';
import Map from '../components/map'
import Box from '../components/box'

// import logo from '../logo.svg';

const Home = () => (
    <div className="body">       
        
        <Map />

        <Box />

        {/*<img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}

        {/* Sponsors */}
        {/*<Partners />*/}
        
    </div>
)

export default Home;