import React from 'react'
import videoBg from '../assets/videoBg.mp4'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to a different route when the button is clicked
    navigate('/home');
  };

  return (
    <div className='lmain'>
    <div className='loverlay'></div>
      <video src={videoBg} autoPlay loop muted />  
      
      <div className='lcontent'>
      <h1>Welcome to our Library</h1>
      <button onClick={handleClick}>Get Started</button>
    </div>
    </div>
  )
}

export default LandingPage