import React from 'react';

class SpotReviewItem extends React.Component{
  render(){
    const { body, rating } = this.props.review;
    const { authors } = this.props;
    const author = authors[this.props.review.author_id]
    // debugger
    return (
      <div className="review-item-container">
        <div className="reviewer-rating">
          <div className="reviewer">{author.name}</div>
       
        </div>
        
        
        <div className="review-body">{body}</div>
      </div>
    )
  }
}

export default SpotReviewItem;