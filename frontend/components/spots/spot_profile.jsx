import React from 'react';
import ProfileDetails from './spot_profile_details'
import ProfilePhotos from './spot_profile-photos';
import SpotProfileMap from '../map/spot_profile_map';
import SpotReviewItem from './spot_review_item';
import CreateBooking from '../booking/create_booking_container';

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
      const { reviews, authors, openModal } = this.props;
      let total_rating = 0;
      reviews.forEach(review => {
        total_rating += review.rating
      })
      const average = Number.parseFloat(total_rating / reviews.length).toFixed(2);

      // debugger
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
                {average}
              </span>
              <span className="divider">·</span>
              <span className="profile-city">{city}</span>
            </div>
          </div>
          
          <ProfilePhotos photos={photos}/>
          <ProfileDetails 
            description={description} 
            adddress={address} 
            price={price} 
            openModal={openModal}
          />
          <SpotProfileMap lat={lat} lng={lng} address={address} />
          <div className="reviews-container">
            <h2 className="reviews">Reviews</h2>
            <div className="review-total">
              <div className="review-score">
                <img className="review-star" src={window.star} width="16" height="16" />
                <div>{average}</div>
              </div>
              
              <div className="num-reviews">
                <div className="num">{reviews.length}</div>
                <div>reviews</div>
              </div>
            </div>
            
            {
              reviews.map(review => {
                return <SpotReviewItem key={review.id} authors={authors} review={review} />
              })
            }

          </div>
          
        </div>
      )
    } else {
      return null;
    }
    // debugger
  }
}

export default SpotProfile;