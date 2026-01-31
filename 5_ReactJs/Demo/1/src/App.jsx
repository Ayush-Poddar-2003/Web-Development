import React from 'react'
import {Routes, Route} from 'react-router'
import Page1 from './Page1'
import Page2 from './Page2'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/page1" element={<Page1/>} />
        <Route path="/page2" element={<Page2/>} />
      </Routes>
    </>
  )
}

export default App