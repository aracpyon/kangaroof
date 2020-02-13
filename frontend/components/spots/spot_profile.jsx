import React from 'react';

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
      const { title, description, address, price, city } = this.props.spot;
      return (
        <div>
          <h1>{title}</h1>
          <div>{address}</div>
          <div>{price}</div>
          <div>{city}</div>
          <div>{description}</div>
        </div>
      )
    } else {
      return null;
    }
    // debugger
  }
}

export default SpotProfile;