import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Sucess from './pages/Sucess'
import Error from './pages/Error'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sucess' element={<ProtectedRoute element={<Sucess/>}/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App