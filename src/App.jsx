import React from 'react'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Events from './components/events/Events'
import Galerry from './components/gallery/Galerry'
import Review from './components/review/Review'
import Contact from './components/contact/Contact'
import SVG from './assets/Untitled-2.png'

const App = () => {
  return (
    <>
        <Header/>
        {/* <Navbar/> */}
        <About/>
        <img src={SVG} alt="" className='svg1'/>
        <Events/>
        <Galerry/>
        <Review/>
        <Contact/>
    </>
  )
}

export default App