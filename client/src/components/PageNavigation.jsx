import React from 'react';
import FontAwesome from 'react-fontawesome';
import Page from './Page.jsx';

const PageNavigation = (props) => (
  <div>
    <nav role="navigation">
      <div>
        <ul className="ul-padding">
          {props.selectedPage > 1
            ? (
              <li className="angle-right-list">
                <button type="button" className="angle-right-icon" onClick={props.handleLeftArrow}>
                  <FontAwesome name="angle-left" />
                </button>
              </li>) 
            : null}
          {Object.keys(props.reviewsByPageNumber).map((pageNumber, index) => (
            <Page
              key={pageNumber}
              pageNumber={pageNumber}
              handleReviewsSelected={props.handleReviewsSelected}
              active={index === props.selectedPage - 1}
            />
          ))}
          {props.selectedPage < props.numberOfPages 
            ? (
              <li className="angle-right-list">
                <button type="button" className="angle-right-icon" onClick={props.handleRightArrow}>
                  <FontAwesome name="angle-right" className="angle-right-carrot" />
                </button>
              </li>) 
            : null}
        </ul>
      </div>
    </nav>
  </div>
);

export default PageNavigation;
