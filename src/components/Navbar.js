import React from 'react'
import Logo from '../assets/Logo.png'

const Navbar = () => {
  return (
    <div class="navbar">
                <div class="logo"><img src={Logo} alt="logo" /></div>
                <div class="navbar-buttons">
                   <a href="/home"><button>Home</button></a>
                    <a href="/login"><button>Login</button></a>
                    <a href="/register"><button>Register</button></a>
                </div>
            </div>
  )
}

export default Navbar

// import React, { useState } from 'react';
// import Logo from '../assets/Logo.png';

// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   <Navbar isLoggedIn={isLoggedIn} />


//   const handleLogout = () => {
//   setIsLoggedIn(false);
//   // Rest of the logout logic
// };


// return (
//   <div className="navbar">
//     <div className="logo"><img src={Logo} alt="logo" /></div>
//     <div className="navbar-buttons">
//       <a href="/home"><button>Home</button></a>
//       {isLoggedIn ? (
//         <a href="/logout"><button onClick={handleLogout}>Logout</button></a>
//       ) : (
//         <>
//           <a href="/login"><button>Login</button></a>
//           <a href="/register"><button>Register</button></a>
//         </>
//       )}
//     </div>
//   </div>
// );

// }

// export default Navbar;
