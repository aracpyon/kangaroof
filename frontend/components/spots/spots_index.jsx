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
      <main className="site-content">
        <div className="content-container">
          <div className="content-index-container1">
            <div className="content-index-container2">
              
              <div className="section1">
                <div className="section1-background-setting">
                  <div className="section1-margin">
                    
                    <div className="section1-title-container">
                      <div className="section1-title-margin">
                          <div className="section1-title-text-container">
                              <h3 className="section1-title-text1">Travel World with Kangaroof</h3>
                              <div className="section1-title-text2">Exlplore some of the best reviewed stays in the world</div>
                          </div>
                      </div>   
                    </div>

                    <div className="section1-index-container">
                  
                          
                          {spots.map(spot => (
                              <div key={spot.id} className="section1-indexes">
                                <SpotIndexItem
                                  spot={spot}
                                  key={spot.id} />
                              </div>
                           ))}
                      
                    </div>
                  </div>
                </div> 
              </div>
              

            </div>
          </div>
        </div>
        
      </main>
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