import React from 'react'
import Grid from '@mui/material/Grid'
import Container from '@material-ui/core/Container'

// import FilterAcademicField from './components/FilterAcademicField'
import Buttons from './components/Buttons.js'
import AppBar from './components/AppBar.js'
import BottomBar from './components/BottomBar.js'
import BackDrop from './components/BackDrop'
import PortalWallPaper from './components/PortalWallPaper.js'
// import Worldmap from './Worldmap.js'
import PortalBody from './components/PortalBody.js'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Worldmap from './Worldmap.js'
import Home from './pages/Home.js'

function App() {
  return (
  <Router>
    <div className="App">
      <header className="App-header">
        <Routes>
        <Route path="/" element={<Portal/>}/>
        <Route path="/worldmap" element={<Worldmap/>}/>
        </Routes>
      </header>
    </div>
  </Router>

  )
}




class Portal extends React.Component {
  render() {
    return (
      <div>
        <AppBar />
        <PortalWallPaper />
        <PortalBody />
        <BottomBar />        
      </div>
      
    )
    
  }
}


export default Home