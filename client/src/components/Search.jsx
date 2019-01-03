import React from 'react';
import FontAwesome from 'react-fontawesome';

const Search = (props) => (
  <div className="search-container border">
    <div className="total-rating-container">
      <span className="review-length-container">
        {props.tempAllReviews.length}
        {' '}
        Reviews
      </span>
      <span>
        {props.handleStarRating(props.averageTotalRating)}
      </span>
    </div>
    <div className="search-bar-container">
      <form className={props.searchBarClass}>
        <FontAwesome name="search" className="mag-icon" onClick={props.handleSearchClick} />
        <input className="search-input" type="text" placeholder="Search Reviews" onChange={props.handleSearchInput} onKeyDown={props.handleSearchEnter} onClick={props.handleSearchBarClass} />
      </form>
    </div>
  </div>
);

export default Search;
