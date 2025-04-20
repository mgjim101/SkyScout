import React from 'react'
import './Register.css'
const Register = () => {
  return (
    <div className="container">
        <div className="logo">
            SkyScout
        </div>
        <div className="login">
            Register
        </div>
        <div className="inputs">
            <input type="text" placeholder='username' />
            <input type="password" placeholder='password' />
        </div>
        <div className="button">
            register
        </div>
        <div className="forget">
            Already have an account?<span> Login Here!</span>
        </div>
      </div>
  )
}

export default Register
