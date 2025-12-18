// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import HeroSection from './Component/HeroSection'
// import HireExpert from './Component/HireExpert'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import HowWork from './Component/HowWork'
// import HireTeam from './Component/HireTeam'
import NavigationBar from './Component/NavigationBar'
import { Routes, Route } from "react-router-dom";

import Home from './Home'
import SignUpPage from './Component/SignUpPage';
import LoginPage from './Component/LoginPage';
import LoginSuccessPage from './Component/LoginSuccessPage';
import {ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";




        
function App() {
  return (
    <>

 <NavigationBar />
  <ToastContainer/>
   <Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/login' element={<LoginPage/>}/>
  <Route path="/sign-up" element={<SignUpPage />} />
  <Route path='/sucess' element={<LoginSuccessPage/>}/>
  <Route path='/home' element={<Home/>}/>


 </Routes>
 
 {/* <HeroSection/>
  <HireExpert/>
 <HireTeam/>
 <HowWork/> */}
 

     </>
  )
}

export default App
