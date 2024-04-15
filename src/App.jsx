import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Login from './Pages/Login'
import FakestoreApi from './Pages/FakestoreApi'

export default function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path= '/' element= {<FakestoreApi/>}/>
        <Route path= '/login' element= {<Login/>}/>
      </Routes>
    </Router>
  )
}

