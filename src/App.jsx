import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import FakestoreApi from './Pages/FakestoreApi'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path= '/' element= {<FakestoreApi/>}/>
        <Route path= '/login' element= {<Login/>}/>
      </Routes>
    </Router>
  )
}

