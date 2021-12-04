import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from '../components/App'
import Airlines from '../components/Airlines'
import Airline from '../components/Airline'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <Routes>
        <Route path="//*" element={<App />} />
        {/* <Route path="//*" element={<Airlines />} /> */}
        {/* <Route path="airlines/:slug" element={<Airline />} /> */}
      </Routes>
    </Router>,
    document.body.appendChild(document.createElement('div')),
  )
})
