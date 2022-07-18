import React from 'react'
import '../Styles/Login.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { login, reset } from '../features/Auth/authSlice'
import Spinner from '../components/Spinner'


const Login = ({back}) => {
    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if(isError){
            toast.error(message)
        }
        if(isSuccess || user){
            navigate('/Dashboard')
        }
        dispatch(reset())
    }, [user, isError,isSuccess, message, navigate,dispatch])
    if(isLoading){
        return <Spinner/>
    }
    const getInputs = () => {

        const userdata = {
            email, password
        }
        dispatch(login(userdata))
    }

  return (
    <div className='login'>
        <div className='content'>
            <div className='icon'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
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
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="johndoegmail.com"></input>
                        <small>must contain @ and some special keywords</small>
                    </div>

                    <div className='firstinput'>
                        <label>Your password</label>
                        <legend><small>Please fill in your password</small></legend>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
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
                  <button onClick={(e) => getInputs(e)}>Register</button>
            </div>
        </div>
    </div>
  )
}

export default Login