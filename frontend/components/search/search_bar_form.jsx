import React from 'react';
import { connect } from 'react-redux'
import { sendSearchForm } from '../../actions/search_actions';
import { withRouter, Redirect } from 'react-router-dom';

const mDTP = dispatch => {

  return {
    sendSearchForm: (form) => dispatch(sendSearchForm(form))
  }
}

class SearchBarForm extends React.Component{

  constructor(props){
    super(props)
    this.state = { keyword: "" }
    this.handleEnter = this.handleEnter.bind(this);
    // debugger
  }

  handleEnter(e){
    // debugger
    if (e.key === 'Enter'){
      e.preventDefault();
      // debugger
      this.props.sendSearchForm(this.state);
      this.props.history.push('/search');
    
      // this.props.history.push({
      //   pathname: '/search',
      //   // search: '?query=abc',
      //   state: { searchForm: { keyword: this.state.keyword } }
      // })
      // <Redirect to={{ 
      //   pathname: "/search",
      //   state: {
      //     searchForm: { keyword: this.state.keyword },
      //   }
      // }} />
    }
  }

  handleInput(type){
    return e => this.setState({ [type]: e.target.value })
  }

  render(){
    return(
      <div className="search">
        <div className="search-bar-container">
          <div className="search-bar-container2">
            <label className="search-contents">
              <div className="search-icon-container">
                <img className="search-icon" src={window.search} height="20" />
              </div>
              <div className="search-input-container">
                <input 
                  className="search-input" 
                  type="text" 
                  placeholder="Try 'New York', 'Paris', 'Seattle'"
                  value={this.state.keyword}
                  onChange={this.handleInput("keyword")}
                  onKeyPress={this.handleEnter}
                 />

              </div>
            </label>
          </div>

        </div>
      </div>
    )
  }
}



export default connect(null, mDTP)(withRouter(SearchBarForm));