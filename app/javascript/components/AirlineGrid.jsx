import React from "react";

const AirlineGrid = ({ attributes }) => {
  return (
    <div className="card">
      <div className="airline-logo">
        <img src={attributes.image_url} alt={attributes.name} />
      </div>
      <div className="airline-name">{attributes.name}</div>
      <div className="airline-score">{attributes.avg_score}</div>
      <div className="airline-link">
        <a href={`/airlines/${attributes.slug}`}>View Airlines</a>
      </div>
    </div>
  )
}

export default AirlineGrid