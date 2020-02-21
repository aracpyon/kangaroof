import React from 'react';
import MarkerManager from '../../util/marker_manager';

class SearchMap extends React.Component {
  constructor(props) {
    super(props);
    // this.setMarkers = this.setMarkers.bind(this);
    this.comparison = this.comparison.bind(this);
  }
  

  componentDidMount() {
    // debugger
    let lat;
    let lng;

    const { spots } = this.props;
    if (spots.length === 0) {
      lat = 40.7580;
      lng = -73.9855;
    } else {
      lat = spots[0].lat;
      lng = spots[0].lng;
    }
    const mapOptions = {
      center: { lat: lat, lng: lng },
      zoom: 12
    }

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map)
   
    
    spots.map(spot => {
      let marker = new google.maps.Marker({
        map: this.map,
        draggable: false,
        position: {lat: spot.lat, lng: spot.lng },
        animation: google.maps.Animation.DROP
      });
      marker.setMap(this.map);
    })
    
  }
  
  componentDidUpdate(prevProps){
    // debugger
    let lat;
    let lng;
    // const { spots } = this.props;
    const { spots } = this.props;
    if (spots.length === 0) {
      lat = 40.7580;
      lng = -73.9855;
    } else {
      lat = spots[0].lat;
      lng = spots[0].lng;
    }
    const mapOptions = {
      center: { lat: lat, lng: lng },
      zoom: 12
    }
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    // this.props.spots
    //check for array qaulity between two props;
    //if they are different reset.
    if (this.comparison(spots, prevProps.spots)){
      // debugger
      spots.map(spot => {
        let marker = new google.maps.Marker({
          map: this.map,
          draggable: false,
          position: { lat: spot.lat, lng: spot.lng },
          animation: google.maps.Animation.DROP
        });
        // debugger
        return marker.setMap(this.map);
      })
      
    }

    // this.MarkerManager.updateMarkers(this.props.spots);

  }

  comparison(arr1, arr2){
    if (arr1.length !== arr2.length){
      // debugger
      return true
    } else {
      arr1.map(el1 => {
        // debugger
        arr2.map(el2 => {
          if (el1 !== el2){
            // debugger
            return true
          }
        })
      })
      return false;
    }
  }



  

  render() {


    return (
      <div className="search-map-container">
        <div className="search-map" ref={map => this.mapNode = map} >

        </div>
      </div>

    )
  }
};

export default SearchMap;