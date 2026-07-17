import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './common/pages/Home'
import 'animate.css';
import PageNotFound from './common/pages/PageNotFound';

function App() {


  return (
    <>
      <Routes>
        {/* Home */}
        <Route path='/' element={<Home />} />
        {/* Page not found */}
        <Route path='/*' element={<PageNotFound/>} />
      </Routes>
    </>
  )
}

export default App
