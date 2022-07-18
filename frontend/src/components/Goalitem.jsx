import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteGoals } from '../features/Goals/goalSlice';

const Goalitem = ({goal}) => {
    const dispatch = useDispatch();
  return (
    <div>
    {new Date(goal.createdAt).toLocaleString('en-US')}
    <h2>{goal.text}</h2>
    <button onClick={() => dispatch(deleteGoals(goal._id))}>delete</button>
    </div>
  )
}

export default Goalitem