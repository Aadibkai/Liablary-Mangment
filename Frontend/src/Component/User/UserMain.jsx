import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Profil from './Profil';
import Books from './Books';

const UserMain = () => {
  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }}>
      <Routes>
        <Route path='/1' element={<Home />} />
        <Route path='/profile1' element={<Profil />} />
        <Route path='/books1' element={<Books />} />
      </Routes>
    </div>
  );
}

export default UserMain;
