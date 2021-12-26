import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addReview } from "../../actions/review";

const ReviewForm = ({ addReview, imdbID }) => {
  const [text, setText] = useState("");
  return (
    <div className="review-form">
      <div>
        <h3>Leave a Review</h3>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addReview({ text, imdbID });
          setText("");
        }}
      >
        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder="Leave a review"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        ></textarea>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

ReviewForm.propTypes = {
  addReview: PropTypes.func.isRequired,
};

export default connect(null, { addReview })(ReviewForm);
