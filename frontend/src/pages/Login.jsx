import React from 'react'
import '../Styles/Login.scss'
import { NavLink } from 'react-router-dom'


const Login = ({back}) => {
  return (
    <div className='login'>
        <div className='content'>
            <div className='icon'>
            <svg onClick={() => back()} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
</svg>


            </div>
            <div className='maincontent'>
                <div className='header'>
                    <h2>Hey 👨‍🚀 , Please <span style={{
                        color:"blueviolet"
                    }}>Login</span> </h2>
                </div>
                <div className='form'>

                    <div className='firstinput'>
                        <label>Email</label>
                        <legend><small>Please fill in your email</small></legend>
                        <input type="email" placeholder="johndoegmail.com"></input>
                        <small>must contain @ and some special keywords</small>
                    </div>

                    <div className='firstinput'>
                        <label>Your password</label>
                        <legend><small>Please fill in your password</small></legend>
                        <input type="password"></input>
                    </div>

                    
                </div>

                <div className='text'>
                    <label style={{
                        fontWeight:"bold"
                    }}>FeedBack Detail</label>
                    <legend><small>Lorem ipsum dit amet is the besfondjds asdfbk ashd asbdj asdb asdkjh</small></legend>
                    <div className='contenty'>
                        <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, vero nemo illum officiis quis iust</small>
                    </div>
                </div>
                <div className='alreadyhave'>
                  <small>Don't have an account <NavLink to="/register">Signup</NavLink></small>
                </div>
                <div><small>Forgot Password</small></div>
                  <button>Register</button>
            </div>
        </div>
    </div>
  )
}

export default Login