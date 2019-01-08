import React from 'react';
import FontAwesome from 'react-fontawesome';
import Search from './Search.jsx';
import SingleReview from './SingleReview.jsx';
import Rating from './Rating.jsx';
import PageNavigation from './PageNavigation.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      average_accuracy_rating: 0,
      average_communication_rating: 0,
      average_cleanliness_rating: 0,
      average_location_rating: 0,
      average_check_in_rating: 0,
      average_value_rating: 0,
      reviewsPerPage: 7,
      searchInput: '',
      showBackToReviews: false,
      tempAllReviews: [],
      selectedPage: 1,
      listOfPages: [],
      reviewsByPageNumber: {},
      searchBarClass: 'search-bar-area',
    };
    this.handleStarRating = this.handleStarRating.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleSearchEnter = this.handleSearchEnter.bind(this);
    this.handleBackToReviewsButton = this.handleBackToReviewsButton.bind(this);
    this.handleReviewsSelected = this.handleReviewsSelected.bind(this);
    this.handleSearchBarClass = this.handleSearchBarClass.bind(this);
    this.handleRightArrow = this.handleRightArrow.bind(this);
    this.handleLeftArrow = this.handleLeftArrow.bind(this);
  }

  componentDidMount() {
    const paths = window.location.pathname.substr(1).split('/');
    const homeNumber = paths[1];
    this.getAllReviewRatings(homeNumber);
  }

  // Gets and calculates the average review ratings for both the total and each category.
  getAllReviewRatings(homeId) {
    fetch(`/api/home/${homeId}/reviews`)
      .then((res) => {
        return res.json();
      })
      .then((reviews) => {
        const numberOfPages = Math.ceil(reviews.length / 6);
        const reviewsByPageNumber = {};
        let j = 0;
        let k = 7;
        for (let i = 1; i <= numberOfPages; i += 1) {
          reviewsByPageNumber[i] = reviews.slice(j, k);
          j += 7;
          k += 7;
        }
        this.setState({
          reviewsByPageNumber,
          numberOfPages,
          tempAllReviews: reviews,
          reviews: reviewsByPageNumber[1],
          average_accuracy_rating: reviews.reduce((total, review) => {return total + review.accuracy_rating}, 0) / reviews.length,
          average_communication_rating: reviews.reduce((total, review) => {return total + review.communication_rating}, 0) / reviews.length,
          average_cleanliness_rating: reviews.reduce((total, review) => {return total + review.cleanliness_rating}, 0) / reviews.length,
          average_location_rating: reviews.reduce((total, review) => {return total + review.location_rating}, 0) / reviews.length,
          average_check_in_rating: reviews.reduce((total, review) => {return total + review.check_in_rating}, 0) / reviews.length,
          average_value_rating: reviews.reduce((total, review) => {return total + review.value_rating}, 0) / reviews.length,
        });
        const totalAverageRating = (this.state.average_accuracy_rating + this.state.average_communication_rating + this.state.average_cleanliness_rating + this.state.average_location_rating + this.state.average_check_in_rating + this.state.average_value_rating) / 6;
        const roundedTotalRating = Math.round(totalAverageRating * 2) / 2;
        this.setState({
          averageTotalRating: roundedTotalRating,
        });
      })
      .catch((err) => {
        console.error('Fetch ERROR:', err)
      });
  }

  // Renders the stars depending on the the rating (increments of 0.5).
  handleStarRating(ratingCategory) {
    const roundedRating = Math.round(ratingCategory * 2) / 2;
    if (roundedRating === 5.0) {
      return (
        <div>
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
        </div>
      );
    } else if (roundedRating === 4.5) {
      return (
        <div>
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star-half-o" className="star" />
        </div>
      );
    } else if (roundedRating === 4.0) {
      return (
        <div>
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star-o" className="star" />
        </div>
      );
    } else if (roundedRating === 3.5) {
      return (
        <div>
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star-half-o" className="star" />
          <FontAwesome name="star-o" className="star" />
        </div>
      );
    } else if (roundedRating === 3.0) {
      return (
        <div>
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star-o" className="star" />
          <FontAwesome name="star-o" className="star" />
        </div>
      );
    } else if (roundedRating === 2.5) {
      return (
        <div>
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star-half-o" className="star" />
          <FontAwesome name="star-o" className="star" />
          <FontAwesome name="star-o" className="star" />
        </div>
      );
    } else if (roundedRating === 2.0) {
      return (
        <div>
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star-o" className="star" />
          <FontAwesome name="star-o" className="star" />
          <FontAwesome name="star-o" className="star" />
        </div>
      );
    } else if (roundedRating === 1.5) {
      return (
        <div>
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star-half" className="star" />
          <FontAwesome name="star-o" className="star" />
          <FontAwesome name="star-o" className="star" />
          <FontAwesome name="star-o" className="star" />
        </div>
      );
    } else if (roundedRating === 1.0) {
      return (
        <div>
          <FontAwesome name="star" className="star" />
          <FontAwesome name="star-o" className="star" />
          <FontAwesome name="star-o" className="star" />
          <FontAwesome name="star-o" className="star" />
          <FontAwesome name="star-o" className="star" />
        </div>
      );
    } else if (roundedRating === 0.5) {
      return (
        <div>
          <FontAwesome name="star-half" className="star" />
          <FontAwesome name="star-o" className="star" />
          <FontAwesome name="star-o" className="star" />
          <FontAwesome name="star-o" className="star" />
          <FontAwesome name="star-o" className="star" />
        </div>
      );
    }
    return (
      <div />
    );
  }

  handleSearchInput(event) {
    this.setState({
      searchInput: event.target.value,
    });
  }

  // Handles the search when clicking on the magnifying glass.
  handleSearchClick() {
    const { tempAllReviews, searchInput } = this.state;
    if (searchInput === '') {
      return;
    }

    const searchReviews = tempAllReviews
      .filter(review => review.review_text.includes(searchInput));

    this.setState({
      reviews: searchReviews,
      showBackToReviews: true,
    });
  }

  // Handles the search when pressing "enter/return".
  handleSearchEnter(event) {
    // This is the "enter/return" key
    if (event.keyCode !== 13) {
      return null;
    }
    event.preventDefault();
    
    const { tempAllReviews, searchInput } = this.state;
    if (searchInput === '') {
      return;
    }
    
    const searchReviews = tempAllReviews
      .filter(review => review.review_text.includes(searchInput));

    this.setState({
      reviews: searchReviews,
      showBackToReviews: true,
    });
  }

  handleBackToReviewsButton() {
    const { tempAllReviews } = this.state;
    this.setState({
      reviews: tempAllReviews,
      showBackToReviews: false,
    });
  }

  handleReviewsSelected(event) {
    const { reviewsByPageNumber } = this.state;
    this.setState({
      selectedPage: Number(event.currentTarget.textContent),
      reviews: reviewsByPageNumber[Number(event.currentTarget.textContent)],
      pageClass: 'selected-page',
    });

    document.querySelector('.rating-container').scrollIntoView({
      behavior: 'smooth',
    });
  }

  handleSearchBarClass() {
    this.setState({
      searchBarClass: 'search-bar-area-selected',
    });
  }

  handleRightArrow() {
    const { selectedPage, tempAllReviews, reviewsByPageNumber } = this.state;
    const totalnumberOfPages = Math.ceil(tempAllReviews.length / 7);
    if (selectedPage < totalnumberOfPages) {
      this.setState({
        selectedPage: selectedPage + 1,
        reviews: reviewsByPageNumber[selectedPage + 1],
      });
      document.querySelector('.rating-container').scrollIntoView({
        behavior: 'smooth',
      });
    }
  }

  handleLeftArrow() {
    const { selectedPage, reviewsByPageNumber } = this.state;
    if (selectedPage > 0) {
      this.setState({
        selectedPage: selectedPage - 1,
        reviews: reviewsByPageNumber[selectedPage - 1],
      });
      document.querySelector('.rating-container').scrollIntoView({
        behavior: 'smooth',
      });
    }
  }

  render() {
    return (
      <div>
        <Search
          reviews={this.state.reviews}
          {...this.state}
          handleStarRating={this.handleStarRating}
          handleSearchClick={this.handleSearchClick}
          handleSearchInput={this.handleSearchInput}
          handleSearchEnter={this.handleSearchEnter}
          handleSearchBarClass={this.handleSearchBarClass}
        />
        <Rating
          reviews={this.state.reviews}
          {...this.state}
          handleStarRating={this.handleStarRating}
          handleBackToReviewsButton={this.handleBackToReviewsButton}
        />
        {this.state.reviews.length
          ? (
            <div>
              {this.state.reviews.map(review => (
                <SingleReview
                  key={review.username}
                  review={review}
                  handleReadMoreButton={this.handleReadMoreButton}
                  {...this.state}
                />))}
            </div>) 
          : (
            <div>
              <h1>No reviews available.</h1>
            </div>)}
        <PageNavigation
          {...this.state}
          handleReviewsSelected={this.handleReviewsSelected}
          handleRightArrow={this.handleRightArrow}
          handleLeftArrow={this.handleLeftArrow}
        />
      </div>
    );
  }
}

export default Reviews;