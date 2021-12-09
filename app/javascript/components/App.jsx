import React from 'react'
import { BrowserRouter, Route, Routes, Switch, useHistory } from 'react-router-dom';

import Airlines from './Airlines'
import Airline from './Airline'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="airlines/:slug" element={<Airline />} />
        <Route path='/' element={<Airlines />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App