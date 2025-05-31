import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Frontpage from './components/Frontpage'
import AddDevice from './components/AddDevice'

function App() {
  return (
    <BrowserRouter>
    <ToastContainer position="top-right" autoClose={3000} />
    <Routes>
      <Route path='/' element={<Frontpage/>}/>
      <Route path='/form' element={<AddDevice/>}/>
    </Routes>

    </BrowserRouter>
    
  )
}

export default App