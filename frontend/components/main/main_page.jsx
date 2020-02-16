import React from 'react';

class MainPage extends React.Component {
  render(){
    return(
      <div className="splash">

        <div className="main-page-image">
          <img className="splash-photowall" src={window.photowall} />
        </div>
        <div className="content1">
          <div className="headline">Travel The World with Kangaroof</div>
          
        </div>
      </div>
      )

  }
}

export default MainPage;