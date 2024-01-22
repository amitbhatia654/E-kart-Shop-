
import { Toaster } from 'react-hot-toast'
import './App.css'
import Home from './components/Home'
import Mycart from './components/Mycart'
import Navbar from './components/Navbar'
import {Route,Routes} from "react-router-dom"
import Mobile from './components/Mobile'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar></Navbar> 
     
      
      <Routes>
        <Route  element={<Home/>} path={'/'}></Route>
        <Route element={<Mobile></Mobile>} path='/mobiles'></Route>
        <Route element={<Mycart/>} path='/mycart'></Route>
      </Routes>


<Footer></Footer>
      <Toaster ></Toaster>
    </>
  )
}

export default App



