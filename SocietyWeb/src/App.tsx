import './App.css'
import { Routes,Route } from 'react-router-dom'
import Login from './pages/Login'
import axios from 'axios'
import Forgetpassword from './pages/Forgetpassword'
import Dashboard from './pages/Dashboard'
import Admin from './pages/Admin/Admin'

axios.defaults.baseURL = 'http://localhost:8088/api/v1'
axios.defaults.withCredentials = true



const App =() => {
  return (
    <>
      <Routes >
        <Route path="/admin" element={<Admin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<Forgetpassword />} />
      </Routes>
    </>
  )
}

export default App
