import React from 'react'
import AdminDashboard from './AdminDashbord'
import { Route, Routes } from 'react-router-dom'

const AdminMain = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<AdminDashboard />} />
      </Routes>
    </div>
  )
}

export default AdminMain