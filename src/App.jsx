import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './Components/Footer.jsx'
import Header from "./Components/Header.jsx"
import Food from './Components/Food.jsx'
import Home from './Components/Home.jsx'
import AboutUs from './Components/AboutUs.jsx'
import SignIn from './Components/Sign In.jsx'
import './App.css'
import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll();

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/exploremore' element={<Food/>}/>
          <Route path='/signin' element={<SignIn/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App

// react router dom used for single page rendering
