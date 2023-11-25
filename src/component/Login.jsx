import React from 'react'
import '../css/Login.css'
import { useNavigate, Outlet } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const signupnew = () => {
    navigate('/signup')
  }

  return (
    <div>
      <div className="form" >
        {/* <p className="logo1"> <img src={foodPandaLogo} alt='' width={"50%"} /> </p> */}
        <p className="logo">Login</p>
        <input type="email" placeholder="Email" required="" />
        <input type="password" placeholder="Password" required="" />
        <button className="login">Login</button>
        <br />
        <div className="loginNew" onClick={signupnew}>Don't Have an Account Signup</div>
      </div>
      <Outlet />
    </div>
  )
}

export default Login