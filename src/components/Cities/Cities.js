import React, { Component } from 'react';
import Select from 'react-select';
import CityList from '../../cities.json';


const cities = CityList.map((element, i) => ({
    value: element.id,
    label: element.name + ", " + element.country,
}));


class Cities extends Component {

  constructor(props) {
    super(props);
    this.state = {   
        // options: [
        //     { value: true, label: 'Yes' },
        //     { value: false, label: 'No' }
        // ],
    };
  }

  handleCityChange = (selectedCity) => {
    this.props.onCityChange(selectedCity);
  }

  render() {
    return ( 
      <Select
        className=""
        onChange={this.handleCityChange}
        options={cities} />   
    );
  }
}

export default Cities;
