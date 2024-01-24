import { Box} from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import ResponsiveAppBar from './Components/ResponsiveAppBar';
import LandingPage from "./Pages/LandingPage";
import "./Global.css";
import Registeration from "./Pages/Registeration";
import AppRoutes from "./Components/AppRoutes";



function App() {
  return (
   
 <Box>
  <BrowserRouter>
  <AppRoutes/>
<ResponsiveAppBar/>
  {/* <LandingPage/>      */}
</BrowserRouter>  
   
 </Box>
    
    
  
  );
}

export default App;
