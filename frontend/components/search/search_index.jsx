import React from 'react';
import SearchIndexItem from './search_index_item';
import SearchMap from '../map/search_map';


class SearchIndex extends React.Component{
  constructor(props){
    super(props);
    // this.props.spots = this.state;
  }

  componentDidUpdate(prevProps){
    if(this.props.searchForm.keyword !== prevProps.searchForm.keyword){
      this.props.fetchSearchResult(this.props.searchForm.keyword);
    }
  }

  componentDidMount(){
    // debugger
    this.props.fetchSearchResult(this.props.searchForm.keyword);
    
  }
  render(){
    // debugger
    const { spots } = this.props;
    const placesToStay = spots.length <= 1 ? "Place to stay" : "Places to stay"
    
    return (
      <div className="search-result-container">
        <div className="search-items-container">
          <div className="search-items-num">{spots.length} {placesToStay}</div>
          {spots.map(spot => {
            return <SearchIndexItem spot={spot} key={spot.id} />
          })
          }
        </div>
        
        <SearchMap spots={spots} />
      </div>
    )
  }
}

export default SearchIndex;