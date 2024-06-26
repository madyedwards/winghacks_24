import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/homepage'
import Credits from './pages/credits'
import Characters from './pages/characters'
import Ada from './pages/character pages/ada';
import Chien from './pages/character pages/chien';
import Dorothy from './pages/character pages/dorothy';
import Lynn from './pages/character pages/lynn';
import You from './pages/character pages/you';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/madyedwards/winghacks_24.git' element={<Home />} />
          <Route path='/credits' element={<Credits />} />
          <Route path='/characters' element={<Characters />} />
          <Route path='/ada' element={<Ada />} />
          <Route path='/chien' element={<Chien />} />
          <Route path='/dorothy' element={<Dorothy />} />
          <Route path='/lynn' element={<Lynn />} />
          <Route path='/secret' element={<You />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App