
import { Toaster } from 'react-hot-toast'
import './App.css'
import Home from './components/Home'
import Mycart from './components/Mycart'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import Mobile from './components/Mobile'
import Footer from './components/Footer'
import Checkout from './components/checkout'
import Signup from './components/Signup'
import Login from './components/Login'
import { useStore } from './HelperComponents/StoreProvider'
import { useEffect } from 'react'
import Laptop from './components/Laptop'
import Myprofile from './components/Myprofile'
import UpdateProfile from './components/UpdateProfile'

function App() {


  const store = useStore()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (store.loginUser && location.pathname == "/login" || store.loginUser && location.pathname == "/signup")
      navigate('/')

  })
  return (
    <>
      <Navbar></Navbar>


      <Routes>
        <Route element={<Home />} path={'/'}></Route>
        <Route element={<Mobile></Mobile>} path='/mobiles'></Route>
        <Route element={<Laptop></Laptop>} path='/laptops'></Route>
        <Route element={<Mycart />} path='/mycart'></Route>
        <Route element={<Checkout />} path='/checkout'></Route>
        <Route element={<Signup />} path='/signup'></Route>
        <Route element={<Login />} path='/login'></Route>
        <Route element={<Myprofile />} path='/myprofile'></Route>
        <Route element={<UpdateProfile />} path='/updateprofile'></Route>


      </Routes>


      <Footer></Footer>
      <Toaster ></Toaster>
    </>
  )
}

export default App



