import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Airlines from './Airlines'
import Airline from './Airline'

const App = () => {
  return (
    <Routes>
      <Route exact path="//*" element={<Airlines />} />
      <Route exact path="/airlines/:slug" element={<Airline />} />
    </Routes>
  )
}

export default App