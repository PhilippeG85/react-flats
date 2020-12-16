import React, { Component } from 'react';
import FlatList from './flat_list';
import flats from '../../data/flats';
import Card from './card';


// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_flat: flats[1],
      flats
    };
  }

  slectFlat = (index) => {
    this.setState({ selected_flat: flats[index] });
  }


  render() {
    return (
      <div>
        <FlatList flats={this.state.flats} flat={this.state.selected_flat} slectFlat={this.slectFlat} />
        <div className="map-container">
          <Card flat={this.state.selected_flat} />
        </div>
      </div>
    );
  }
}

export default App;
