import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import AirlineGrid from "./AirlineGrid";

const Airlines = () => {
  const [airlines, setAirlines] = useState([])

  useEffect(() => {
    axios.get('/api/v1/airlines.json')
      .then(res => {
        setAirlines(res.data.data)
      })
      .catch(res => console.log(res))
  }, [airlines.length])

  const grid = airlines.map(item => {
    return (
      <AirlineGrid key={item.attributes.name} attributes={item.attributes} />
    )
  })

  return (
    <div className="home">
      <div className="header">
        <h1>OpenFlights</h1>
        <div className="subheader">Honest, ubaised arline reviews.</div>
      </div>
      <div className="grid">
        {grid}
      </div>
    </div>
  )
}

export default Airlines