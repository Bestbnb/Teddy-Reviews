import React from 'react';

class SingleReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      remainderOfReviewText: '',
      hideReadMoreButton: false,
    });
    this.handleReadMoreButton = this.handleReadMoreButton.bind(this);
  }

  handleReadMoreButton(reviewText) {
    this.setState({
      remainderOfReviewText: reviewText,
      hideReadMoreButton: true,
    });
  }

  render() {
    return (
      <div className="border">
        <div className="review-container">
          <div className="image-container">
            <img className="user-image" src={this.props.review.profile_picture} alt="user" />
          </div>
          <div className="user-date-container">
            <div className="username">
              {this.props.review.username}
            </div>
            <div className="created-at">
              {this.props.review.created_at}
            </div>
          </div>
        </div>
        <div>
          {this.props.review.review_text.length < 100
            ? (
              <p className="description" key={this.props.review.home_id}>
                {this.props.review.review_text}
              </p>)
            : (
              <div className="description">
                {this.props.review.review_text.substring(0, 100)}
                {this.state.hideReadMoreButton 
                  ? 
                    null 
                  : (
                    <button type="button" className="read-more" onClick={() => this.handleReadMoreButton(this.props.review.review_text.substring(100))}>
                      ... Read more
                    </button>)}
                <span>
                  {this.state.remainderOfReviewText}
                </span>
              </div>)}
        </div>
      </div>
    );
  }
}

export default SingleReview;
