import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Box } from '@mui/material';
import About from './pages/About';
import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
 const App = () => {
  return (
    <Box width="400px" sx={{width: {xl: '1488px' }}} m="auto"> 
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Box>
  )
}
export default App