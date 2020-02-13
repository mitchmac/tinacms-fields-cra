import React from 'react';
import './App.css';
import { TinaCMS, Tina  } from 'tinacms';
import Page from './Page.js';

function App() {
    let cms = new TinaCMS({
        sidebar: {
            position: "displace"
        }
    });

  return (
      <Tina cms={cms} >
      <div className="App">
        <Page />
      </div>
      </Tina>
  );
}

export default App;
