import React from 'react';
import SpotIndexItem from './spot_index_item'

class SpotsIndex extends React.Component {
  constructor(props){
    super(props);

  }
  componentDidMount(){
    this.props.fetchSpots();
  }

  render(){
    // debugger
    const { spots } = this.props;
    return(
      <div>
        <h1>Travel World with Kangaroof</h1>
        <div>
          {spots.map(spot => (
            <SpotIndexItem
              spot={spot}
              key={spot.id}
            />
          ))}
        </div>
      </div>
    )
  }
}

// const SpotsIndex = ({ spots }) => {
//   debugger
//   return (<div>
//     <h1>Benches: </h1>
//     {spots.map(spot => (
//       <SpotIndexItem
//         spot={spot}
//         key={spot.id}
//       />
//     ))}
//   </div>)
// };

export default SpotsIndex;