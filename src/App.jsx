import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar'
import Signup from './component/Student/Signup'
import Signin from './component/Student/Signin'
import Staffsignup from './component/staff/Staffsignup'
import Staffsignin from './component/staff/Staffsignin'
import Errorpage from './component/Errorpage'
import Dashboard from './component/Student/Dashboard'
import Profile from './component/Student/pages/Profile'
import Document from './component/Student/pages/Document'
import Help from './component/Student/pages/Help'
import Password from './component/Student/pages/Password'
import Chat from './component/Student/pages/Chat'
import Pay from './component/Student/pages/Pay'

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
      <Route path='dashboard/*' element={<Dashboard/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/document' element={<Document/>}/>
      <Route path='/help' element={<Help/>}/>
      <Route path='/password' element={<Password/>}/>
      <Route path='/chat' element={<Chat/>}/>
      <Route path='/pay' element={<Pay/>}/>
      <Route path='/*' element={<Errorpage/>}/>
    </Routes>
    </>
  )
}

export default App
2