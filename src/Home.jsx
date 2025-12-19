import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import NavigationBar from './Component/NavigationBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from './Component/HeroSection'
import HireExpert from './Component/HireExpert'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HowWork from './Component/HowWork'
import HireTeam from './Component/HireTeam'


  


const Home = () => {
  return (
   <>
{/* <NavigationBar /> */}
<HeroSection/>
<HireExpert/>
 <HowWork/>
<HireTeam/>
   </>
  )
}

export default Home
