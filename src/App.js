import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import { Tina, TinaCMS } from 'tinacms';

import Home from './pages/Home.js';
import AddingTina from './pages/AddingTina.js';
import Forms from './pages/Forms.js';
import FormFields from './pages/FormFields.js';
import Blocks from './pages/Blocks.js';

function App() {
    const cms = new TinaCMS({
        sidebar: {
            position: "displace",
            hidden: true
        }
    });

  return (

      <Router>
          <Tina cms={cms}>
          <div className="App">
              <Switch>
                  <Route path="/adding-tina">
                      <AddingTina />
                  </Route>
                  <Route path="/forms">
                      <Forms />
                  </Route>
                  <Route path="/form-fields">
                      <FormFields />
                  </Route>
                  <Route path="/blocks">
                      <Blocks />
                  </Route>
                  <Route path="/">
                      <Home />
                  </Route>
              </Switch>
          </div>
          </Tina>
      </Router>

  );
}

export default App;
