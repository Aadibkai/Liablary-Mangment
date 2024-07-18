import React from 'react'
import Home from './Home'
import Profil from './Profil'
import Books from './Books'
import { Routes, Route } from 'react-router-dom';


export const UserMain = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profil' element={<Profil />} />
        <Route path='/books' element={<Books />} />
      </Routes>
    </div>
  )
}
