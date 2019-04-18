import React, { Component } from 'react';
import _ from 'lodash';
import axios from 'axios';
import './App.css';

const API_URL = 'https://data.townofcary.org/api/v2/catalog/datasets/parks-and-recreation-feature-map/exports/json';
const DISPLAY_FIELDS = [
  'name',
  'baseball',
  'basketball',
  'battingcages',
  'climbingropes',
  'dogpark',
  'fitnesstrail',
  'openspace',
  'picnic',
  'skatepark',
  'soccer',
  'tenniscourt',
];

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello, world
      </div>
    );
  }
}

export default App;
