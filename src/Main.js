import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Signup from './pages/signup/signUp'
import Services from "./pages/Services/services"
import CreateAccount from "./pages/signin/createAccount"
import ContactUs from './pages/contactUs/contactUs'
import Dashbord from './pages/pagesAfterLogin/Dashbord/dashbord'


export default function Main() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/services" element={<Services/>} />
          <Route exact path="/createAccount" element={<CreateAccount/>} />
          <Route exact path="/contactUs" element={<ContactUs/>} />
          <Route exact path="/" element={<Dashbord/>} />
        </Routes>
      </BrowserRouter>

    
    </>
  )
}
