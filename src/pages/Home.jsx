import React, { useState } from 'react';
import {Container , Button} from "../components/index"
import { useNavigate } from 'react-router-dom';
function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate() 

  const navigateToLogin = () =>{
    console.log('button clicked')
    navigate('/login')
  }
  return (
    <Container >
        {!isLoggedIn ? (
          <>
        <div 
          className='bg-cover bg-center w-full blur-sm h-full'
          style={{ backgroundImage: 'url(https://via.placeholder.com/1920x1080)' }}
        >
         
          {/* Content to show when not logged in */}
        </div>
        <div className=' w-1/4 h-1/4 rounded flex items-center justify-center bg-white absolute ' style={{top: "36%" , left : "36%"}}>
            Login to Access Home

          <Button onClick={navigateToLogin} >Login</Button>
          </div>
        </>
      ) : (
        <div>
          {/* Content to show when logged in */}
          <h1>Welcome, you are logged in!</h1>
        </div>
      )}
    </Container>
  );
}

export default Home;
