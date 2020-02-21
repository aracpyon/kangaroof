import React from 'react';
// import MarkerManager from '../../util/marker_manager';

class SpotProfileMap extends React.Component{
  constructor(props){
    super(props);
    // debugger;
    // this.toggleBounce = this.toggleBounce.bind(this);
    // this.handleScroll = this.handleScroll.bind;
    
    // this.map = new google.maps.Map(this.mapNode, mapOptions);
  }

  componentDidMount(){
    // debugger
    const {lat, lng } = this.props;
    const mapOptions = {
      center: { lat: lat, lng: lng },
      zoom: 12
    }
    
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    // this.latlng = new google.maps.LatLng(lat, lng);
    // this.MarkerManager = new MarkerManager(this.map);
    // this.MarkerManager.updateMarkers();
    this.marker = new google.maps.Marker({
      map: this.map,
      draggable: false,
      position: { lat: lat, lng: lng },
      animation: google.maps.Animation.DROP
    });
    
    
    this.marker.setMap(this.map);
    // this.marker.setAnimation(google.maps.Animation.DROP);
    
  };

  render(){
    

    return (
      <div className="location">
        <div>
          <h2>Location</h2>
          <div>{this.props.address}</div>
        </div>
        <div id='map-container' ref={ map => this.mapNode = map } >

      </div>
      </div>
      
    )
  }
};

export default SpotProfileMap;