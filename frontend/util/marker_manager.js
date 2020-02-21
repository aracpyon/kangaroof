// import React from 'react';


class MarkerManager {
  constructor(map){
    this.map = map;
    this.markers = {};

  }

  updateMarkers(spots){
    const spotsObj = {};
    spots.forEach(spot => spotsObj[spot.id] = spot);
    
    const filtered = spots.filter(spot => !this.markers[spot.id])
    filtered.forEach(newSpot => this.createMarkerFromSpot(newSpot))
    
    const filteredIds = Object.keys(this.markers).filter(spotId => !spotsObj[spotId])
    filteredIds.forEach(spotId => this.removeMarker(this.markers[spotId]))
    
  }

  createMarkerFromSpot(spot){
    const position = new google.maps.LatLng(spot.lat, spot.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      spotId: spot.id
    });
    return marker;
    // marker.addListener('click', () => this.handleClick(spot));
    // this.markers[marker.spotId] = marker;
    

  }

  removeMarker(marker){
    this.markers[marker.spotId].setMap(null);
    delete this.markers[marker.spotId];
  }
}

export default MarkerManager;