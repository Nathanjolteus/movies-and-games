import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ReviewItem from "./ReviewItem";
import { getReviews } from "../../actions/review";
import { likeMovie } from '../../actions/like';
import ReviewForm from "./ReviewForm";

const Reviews = ({ getReviews, review: { reviews, loading }, imdbID }) => {
  useEffect(() => {
    getReviews();
  }, []);

 

  return (
    <Fragment>
      {imdbID ? (
        <div className="reviews">
          {reviews
            .filter((review) => review.imdbID === imdbID)
            .map((review) => (
              <ReviewItem key={review._id} review={review} />
            ))}
        </div>
      ) : (
        <div className="reviews">
          {reviews.map((review) => (
            <ReviewItem key={review._id} review={review} />
          ))}
        </div>
      )}
    </Fragment>
  );
};

Reviews.propTypes = {
  getPosts: PropTypes.func.isRequired,
  review: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  review: state.review,
});

export default connect(mapStateToProps, { getReviews })(Reviews);
