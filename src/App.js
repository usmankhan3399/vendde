import { Box, Container, Stack } from "@mui/material";
import Sidebar from "./Components/Sidebar";
import Rightbar from "./Components/Rightbar";
import Navbar from "./Components/Navbar";
import Feed from "./Components/Feed";
import Button1 from "./Components/CustomButton";
import Login from "./Components/Login";
import ResetPassword from "./Pages/ResetPassword";
import CustomButton from "./Components/CustomButton";
import LandingPage from "./Pages/LandingPage";
import Footer from "./Components/Footer";

// import Shop from './Pages/Shop';
// import Sell from './Pages/Sell';
// import Borrow from './Pages/Borrow';
// import Learn from './Pages/Learn';
// import Protect from './Pages/Protect';
// import Join from './Pages/Join';
// import {BrowserRouter as Route, Router  } from 'react-router-dom';


function App() {
  return (
   
 <Box >
  
  <Navbar/>
  <LandingPage/>
{/* <Footer/> */}
 </Box>
    
    
  
  );
}

export default App;
