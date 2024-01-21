
 import React, { useState } from 'react';
import {  Button} from '@mui/material';
import LoginBox from './LoginBox';


const Login = () => {
  const [isOpen, setIsOpen] = useState(false);

  

  return (
    <>
    <Button sx={{padding: '10px', background: 'blue'}} onClick={() => setIsOpen(true)}>
      Login 

    </Button>
    
<LoginBox isOpen={isOpen} handleClose={()=>setIsOpen(false)}/>
    </>
  )
}

export default Login


