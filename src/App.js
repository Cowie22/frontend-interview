import React, { Component } from 'react';
// import _ from 'lodash';
// import axios from 'axios';
import Park from './park'
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
  //may want to set up a state
  constructor(){
    super();
    this.state = {
      parkData: [],
      filteredParks: [],
      filterBoolean: false,
    }
    this.filter = this.filter.bind(this)
  }

  componentDidMount() {
    //pull data from API
    fetch(API_URL)
    .then(res => res.json())
    .then(res => {
      //console.log(res)
      this.setState({
        parkData: res
      })
    })
    .then(() => console.log(this.state.parkData))
  }

  filter(event) {

    //create condition to remove filter
    
    let name = event.target.innerHTML
    let filtered = this.state.parkData.filter(ele => {
      if (ele[name] === 'Yes') {
        return ele
      }
    })

    if(this.state.filterBoolean) {
      this.setState({
        filteredParks: []
      })
    }
    
    this.setState({
      filterBoolean: true, 
      filteredParks: filtered
    })
  }

  render() {
    let headers = DISPLAY_FIELDS.map(ele => <td onClick={this.filter}>{ele}</td>)
    return (
      <div className="App">
        <table>
          <thead>
            <tr>
              {headers}
            </tr>
          </thead>
          <tbody>
            <Park state={this.state} />
          </tbody>
        </table>
      </div>
    );
  }
}



export default App;
