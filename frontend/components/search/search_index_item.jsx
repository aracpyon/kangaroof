import React from 'react';
import { withRouter } from 'react-router';

class SearchIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const spotId = this.props.spot.id
    this.props.history.push(`/spots/${spotId}`);
    
  }

  render(){
    const { title, description, photoUrls, price } = this.props.spot;
    return(
      <div className="search-index-items" onClick={this.handleClick}>
        <div className="search-photo-container">
          <img className="search-photo" src={photoUrls[1]} />
        </div>

        <div className="search-index-info">
          <div className="search-item-city-rate">
            {/* <span className="search-item-city">{city}</span> */}
            <span className="search-item-rate">
              <img className="item-star" src={window.star} />
              5.00</span>
          </div>
          <div className="search-item-title">{title}</div>
          <div className="search-item-description">{description}</div>
          <div className="search-item-price">
            <div className="bottom">
            <span>${price}</span>
            /night
            </div>
          </div>
          

        </div>
      </div>  
    )
  }
}

export default withRouter(SearchIndexItem);