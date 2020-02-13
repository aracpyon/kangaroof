import React from 'react';
import { withRouter } from 'react-router';
import { Redirect, Link } from 'react-router-dom';

class SpotIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    const spotId = this.props.spot.id
    this.props.history.push(`/spots/${spotId}`);
      // < Redirect to = {`/spots/${this.props.spot.id}`}/>
  
    //goes to spot_profile
  }

  render(){
    // debugger
    const { title, city, price, description } = this.props.spot;
    return (
      <div className="spotIndexItem" onClick={this.handleClick}>
        
        <div className="spot-index-info">
          <div>{title}</div>
        <div className="item-city-rate">
          <span className="item-city">{city}</span>
          <span className="item-rate">10</span>
        </div>
        <div>{price}</div>
        <div>{description}</div>
        </div>
      </div>
    )
  }
}

export default withRouter(SpotIndexItem);
//wrap with withRouter when you need to use this.props.histroy.push('url)