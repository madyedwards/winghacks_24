import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/homepage'
import Credits from './pages/credits'
import Ada from './pages/chararacter_pages/ada';
import Characters from './pages/characters'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/credits' element={<Credits />} />
          <Route path='/characters' element={<Characters />} />
          <Route path='/ada' element={<Ada />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App