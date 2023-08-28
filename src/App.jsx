import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar'
import Signup from './component/Student/Signup'
import Signin from './component/Student/Signin'
import Staffsignup from './component/staff/Staffsignup'
import Staffsignin from './component/staff/Staffsignin'
import Errorpage from './component/Errorpage'
import Dashboard from './component/Student/Dashboard'

function App() {
    // let token = localStorage.token
  return (
    <>
    <Routes>
      <Route path='/' element={<Navbar/>}/>
      <Route path='/student/signup' element={<Signup/>}/>
      <Route path='/student/signin' element={<Signin/>}/>
      <Route path='/staff/signup' element={<Staffsignup/>}/>
      <Route path='/staff/signin' element={<Staffsignin/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/*' element={<Errorpage/>}/>
    </Routes>
    </>
  )
}

export default App
2