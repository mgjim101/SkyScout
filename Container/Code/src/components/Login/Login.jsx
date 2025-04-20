import React, { useState } from 'react'
import './Login.css'
const Login = () => {
  return (

      <div className="container">
        <div className="logo">
            SkyScout
        </div>
        <div className="login">
            Login
        </div>
        <div className="inputs">
            <input type="text" placeholder='username' />
            <input type="password" placeholder='password' />
        </div>
        <div className="button">
            login
        </div>
        <div className="forget">
            Forgot your password? <span> Click Here!</span>
        </div>
      </div>
  )
}

export default Login
