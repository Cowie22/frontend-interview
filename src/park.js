import React from 'react';


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

let Park = (props) => {

    let data = props.state.parkData
    if (props.state.filterBoolean) {
        data = props.state.filteredParks
    }

    let headersWithData = DISPLAY_FIELDS.map(header => {
        return 
    })

    let dataWithHeaders = data.map(obj => {
        return DISPLAY_FIELDS.map(header => {
            return <td>{obj}[{header}]</td>
        })
    })

    return (
        //dataWithHeaders
        data.map(ele => {
            return (
            <tr>
                <td>{ele.name}</td>
                <td>{ele.baseball}</td>
                <td>{ele.basketball}</td>
                <td>{ele.battingcages}</td>
                <td>{ele.climbingropes}</td>
                <td>{ele.dogpark}</td>
                <td>{ele.fitnesstrail}</td>
                <td>{ele.openspace}</td>
                <td>{ele.picnic}</td>
                <td>{ele.skatepark}</td>
                <td>{ele.soccer}</td>
                <td>{ele.tenniscourt}</td>
            </tr>
            )  
        })
    )
}

export default Park;