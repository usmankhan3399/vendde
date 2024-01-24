import { React, ReactDOM } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from '../Pages/LandingPage';
import Registeration from '../Pages/Registeration';
import ResetPassword from '../Pages/ResetPassword';
import Sell from '../Pages/Sell';
import Shop from '../Pages/Shop';
import Borrow from '../Pages/Borrow';
import Learn from '../Pages/Learn';
import Protect from '../Pages/Protect';
import Join from '../Pages/Join';
import Footer from './Footer';
import SellingSection from '../Pages/SellingSection';
import QualifiedSection from '../Pages/QualifiedSection';
import LoginBox from './LoginBox';




function AppRoutes() {
  return (
    
    <Routes>
    <Route path="/" element={<LandingPage/>}>
    <Route path="Home" element={<LandingPage/>}/>
    <Route path="Login" element={<LoginBox/>}/>
    <Route path="Registeration" element={<Registeration/>}/>
    <Route path="ForgotPassword" element={<ResetPassword/>}/>
    <Route path="Sell" element={<Sell/>}/>
    <Route path="Shop" element={<Shop/>}/>
    <Route path="Borrow" element={<Borrow/>}/>
    <Route path="Learn" element={<Learn/>}/>
    <Route path="Protect" element={<Protect/>}/>
    <Route path="Join" element={<Join/>}/>
    <Route path="Footer" element={<Footer/>}/>
    <Route path="SellingSection" element={<SellingSection/>}/>
    <Route path="QualifiedSection" element={<QualifiedSection/>}/>

      </Route>
    </Routes>
   

   
  )
}

export default AppRoutes;