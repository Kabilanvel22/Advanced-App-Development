import React from "react"
import Navbar from "./pages/Navbar/Navbar"
import Faq from "./pages/Faq"
import Signin from "./pages/Signin"
import { Route, Routes } from "react-router-dom"
import Signup from "./pages/Signup"
import Home from "./pages/Home/Home"
import PrivateRoutes from "./components/privateroute/Privateroute"
import Aboutus from "./components/About/Aboutus"
import Contact from "./components/Contact/Contact"
import Loan from "./pages/loans/Loan"
import ApplyLoan from "./pages/loans/Applyloan"
import Profile from "./pages/Profile"
import Footer from "./pages/Footer"
import Privacy from "./pages/Privacy"
import Addloan from "./pages/Admin/Addloan"
import Viewloan from "./pages/Admin/Viewloan"
import LoanApplied from "./pages/Admin/LoanApplied"
import Login from "./pages/Admin/Login"
import AdminSignup from "./pages/Admin/Register"


function App() {
  return (
    <>
       <Routes>
        <Route path ="/register" element={<Signup/>}/>
        <Route path ="/login" element={<Signin/>}/>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/admin/login" element={<Login/>}/>
        <Route path="/admin/register" element={<AdminSignup/>}/>
        <Route path="/about" element={<Aboutus/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/loans" element={<Loan/>}/>
        <Route path="/applyloan" element={<ApplyLoan/>}/>
        <Route path="/faq" element={<Faq/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/privacy" element={<Privacy/>}/>
        <Route path="/admin/addloan" element={<Addloan/>}/>
        <Route path="/admin/viewloan" element={<Viewloan/>}/>
        <Route path="/admin/applications" element={<LoanApplied/>}/>
         </Routes>
    </>
  )
};

export default App
