import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import AuthLayout from './components/auth/layout'
import AuthLogin from './pages/auth/Login'
import { Route, Routes } from 'react-router-dom'
import AuthRegister from './pages/auth/Register'
import AdminLayout from './components/admin-view/layout'

function App() {
 

  return (
    <>
    <div className="flex flex-col overflow-hidden bg-white">
      
    <Routes>
        <Route
        path="/auth" element = {<AuthLayout />}
      >
        <Route path="login" element={<AuthLogin />} />
        <Route path="register" element={<AuthRegister />} />
      </Route>
      <Route
          path="/admin"
          element={
            
              <AdminLayout />
           
          }
        /> 
 </Routes>
  
    </div>
      
    </>
  )
}

export default App

 