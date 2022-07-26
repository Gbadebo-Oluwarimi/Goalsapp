import React from 'react'
import { useEffect, useState } from 'react'
import '../Styles/Dashboard.scss'
import { useDispatch, useSelector } from 'react-redux'
import { logout, reset } from '../features/Auth/authSlice' 
import { useNavigate } from 'react-router-dom'
import Creategoals from '../components/Creategoals'
import { getGoals, goalsr } from '../features/Goals/goalSlice'
import Spinner from '../components/Spinner'
import { toast } from 'react-toastify'
import Goalitem from '../components/Goalitem'
import Creategoaladd from '../components/Creategoaladd'
const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const [creategoals, setcreategoals] = useState(false);
  const { goals, isLoading, isError, message } = useSelector((state) => state.goals)
  const updatecreategoals = () => {
    setcreategoals(!creategoals);
  }
  const onlogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/')
  }
  useEffect(() => {
    if (!user) {
      navigate('/');
    }

    if (isError) {
      toast.error(message)
    }
    dispatch(getGoals())

    return () => {
      dispatch(goalsr())
    }
  }, [user, navigate, isError, message, dispatch])
  if(isLoading){
    return <Spinner/>
  }
  return (
    <>
    <div className='dashboard-bg'>
      <Creategoaladd/>
    {creategoals ? <Creategoals updatecreategoals={updatecreategoals}/> : null}
      <div className='user'>
      <h2 style={{paddingTop:"20px"}}>{user && user.name}</h2>
      </div>
      <div className='d-content'>
        <div className='left-nav'>
            <div className='top-card'>
              <div className="icon">

              </div>
              <div className="text2">
                <h3>{user && user.name} Goals</h3>
                
              </div>
            </div>
            <button onClick={() => updatecreategoals()}>Create Goals</button>
        </div>
        <div className='right-nav'>
          <div className="nav-right">
              <div>List of Goals Created</div>
         <div><button onClick={() => onlogout()}>Logout</button></div>
         </div>
        <div className='goalitems'>
          { goals.length > 0 ? (<div>
            {goals.map((goal) => (
              <Goalitem key={goal._id} goal={goal}/>
            ))}
          </div>) : (<h3 style={{paddingTop:"20px"}}><center>You have not set any goals 🏹 </center></h3>) }
        </div>
        </div>
      </div>
    </div>
    
    </>
  )
  
}


export default Dashboard