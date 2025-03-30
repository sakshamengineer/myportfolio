import React from 'react'
import Home from './pages/Home';
import About from './pages/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/myportfolio" element={<Home />} />
          <Route exact path='/About' element = {<About/>}/>
        </Routes>
      </Router>
    </>
  )
}
