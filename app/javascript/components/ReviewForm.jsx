import React from "react";

const ReviewForm = () => {
  return (
    <div className="wrapper">
      <form>
        <div>Have an experience with [Airline name]? Share your review!</div>
        <div className="field">
          <input type="text" name="title" placeholder="Review Title" />
        </div>
        <div className="field">
          <input type="text" name="description" placeholder="Review Description" />
        </div>
        <div className="field">
          <div className="rating-container">
            <div className="rating-title-text">Rate this Airline</div>
            [Star rating here]
          </div>
        </div>
        <button type="submit">Submit your review</button>
      </form>
    </div>
  )
}

export default ReviewForm