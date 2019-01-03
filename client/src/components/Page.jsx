import React from 'react';

const Page = (props) => {
  let classes = 'page';
  if (props.active) {
    classes += ' props.active';
  }
  return (
    // React.Fragment returns a group of children without creating extra nodes to the DOM
    <React.Fragment>
      <li className={classes}>
        <button type="button" className="" onClick={props.handleReviewsSelected}>
          {props.pageNumber}
        </button>
      </li>
    </React.Fragment>);
};

export default Page;
