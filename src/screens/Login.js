import React from 'react'

const Login = () => {


    return (
        <div className='lmain'>
         
        <div className='lcontainer'>
        <h1>Login Page</h1>
            <div className="lbuttons">
              <a href="/slogin">  <button id="studentBtn">Student Login</button></a>
               <a href="/llogin"> <button id="librarianBtn">Librarian Login</button></a>
               <a href="/alogin"> <button id="adminBtn">Administration Login</button></a>
            </div>
        </div>
        </div>
    )
}

export default Login