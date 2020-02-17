import React from 'react';
import ProfileDetails from './spot_profile_details'
import ProfilePhotos from './spot_profile-photos';
import SpotMap from '../map/spot_map';

class SpotProfile extends React.Component{
  constructor(props){
    super(props);
    // debugger
  }

  componentDidMount(){
    // debugger
    this.props.fetchSpot(this.props.match.params.spotId);
  }

  render(){
    if (this.props.spot){
      const { title, description, address, price, city, lat, lng } = this.props.spot;
      const photos = this.props.spot.photoUrls;
      
      debugger
      return (
        <div className="profile-content-container">
          <div className="profile-title-banner">
            <span className="profile-title">
              <h1>{title}</h1>
            </span>
            <br/>
            <div className="profile-title-sub">
              <span className="profile-rate">
                <img className="star" src={window.star} />
                5.00
              </span>
              <span className="divider">·</span>
              <span className="profile-city">{city}</span>
            </div>
          </div>
          
          <ProfilePhotos photos={photos}/>
          <ProfileDetails description={description} adddress={address} price={price} />
          <SpotMap lat={lat} lng={lng} address={address} />
          
        </div>
      )
    } else {
      return null;
    }
    // debugger
  }
}

export default SpotProfile;