import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import SingUP from './pages/SingUP'
import SingIn from './pages/SingIn'
import ForgotPassword from './pages/ForgotPassword'
import useGetCurrentUser from './Hooks/useGetCurrentUser'
import { useSelector } from 'react-redux'
import Home from './pages/Home'
import Nav from './components/Nav'
import useGetCity from './Hooks/UseGetCity'
import useGetMyShop from './Hooks/useGetMyShop'

export const serverUrl = "http://localhost:8000"

function App() {
  useGetCurrentUser()
  useGetCity()
  useGetMyShop()
  const { userData } = useSelector(state => state.user)
  return (
    <>
      {userData && <Nav />}
      <Routes>
        <Route path='/singup' element={!userData ? <SingUP /> : <Navigate to={"/"} />} />
        <Route path='/singin' element={!userData ? <SingIn /> : <Navigate to={"/"} />} />
        <Route path='/forgotpassword' element={!userData ? <ForgotPassword /> : <Navigate to={"/"} />} />
        <Route path='/' element={userData ? <Home /> : <Navigate to={"/singin"} />} />

      </Routes>
    </>
  )
}

export default App
