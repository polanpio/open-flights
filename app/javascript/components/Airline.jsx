import React, { useState, useEffect } from "react";
import axios from "axios";

const Airline = (props) => {
  const [airline, setAirline] = useState({})
  const [review, setReview] = useState({})

  useEffect(() => {
    const slug = props.match.params.slug
    const url = `/api/v1/airlines/${slug}`
  }, [])

  axios.get(url)
    .then(res = console.log(res))
    .catch(res = console.log(res))
  return <div>This is the Airlines#show view for this app</div>
}

export default Airline