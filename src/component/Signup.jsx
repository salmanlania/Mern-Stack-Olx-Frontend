import React from 'react'
import '../css/Signup.css'
import { useNavigate , Outlet } from 'react-router-dom'

const SignUp = () => {
    const navigate = useNavigate()
    
    return (
        <div>
            <div className="Signform" >
                <p className="Slogo">Sign Up</p>
                <input type="text"  placeholder="First Name" required="" />
                <input type="text"  placeholder="Last Name" required="" />
                <input type="email"  placeholder="Email" required="" />
                <input type="password"  placeholder="Password" required="" />
                <button  className="signup">Sign-Up</button>
                <hr />
                <div className="signupnew" onClick={()=>navigate('/login')}>Already have an account</div>
            </div>
            <Outlet />
        </div>
    )
}

export default SignUp