import React from 'react'

const Register = () => {
  return (
    <div>
          <div className='lmain'>
         
         <div className='rcontainer'>
         <h1>Register Page</h1>
             <div className="rbuttons">
               <a href="/sregister">  <button id="studentBtn">Student Register</button></a>
                <a href="/lregister"> <button id="librarianBtn">Librarian Register</button></a>
                <a href="/aregister"> <button id="adminBtn">Administration Register</button></a>
             </div>
         </div>
         </div>
    </div>
  )
}

export default Register