import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from '../components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <Routes>
        <Route path="//*" element={<App />} />
      </Routes>
    </Router>,
    document.body.appendChild(document.createElement('div')),
  )
})
