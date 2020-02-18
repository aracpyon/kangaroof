import React from 'react';
import MarkerManager from '../../util/marker_manager';

class SpotMap extends React.Component{
  constructor(props){
    super(props);
    // debugger;
  }

  componentDidMount(){
    // debugger
    const {lat, lng } = this.props;
    const mapOptions = {
      center: { lat: lat, lng: lng },
      zoom: 12
    }
    
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers();
  };

  componentDidUpdate(){
    this.MarkerManager.updateMarkers();
  }

  render(){
    return (
      <div className="location">
        <div>
          <h2>Location</h2>
          <div>{this.props.address}</div>
        </div>
        <div id='map-container' ref={ map => this.mapNode = map }>

      </div>
      </div>
      
    )
  }
};

export default SpotMap;