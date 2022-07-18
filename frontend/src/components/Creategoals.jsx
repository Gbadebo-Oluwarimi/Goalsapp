import React from 'react'
import '../Styles/creategoals.scss'
import { useDispatch } from 'react-redux'
import { createGoal } from '../features/Goals/goalSlice'
import { useState } from 'react'
const Creategoals = ({updatecreategoals}) => {
    const [ text, setText ] = useState('')
    const dispatch = useDispatch()
    
    const sendgoal = () =>{
        dispatch(createGoal({text}));
        setText('')
        console.log('djd')
        updatecreategoals()
    }

  return (
    <div className='create'>
        <div className='creategoals'>
            <div className='content'>
            <div className='header'><h2>Create Goals: 🏹 </h2><svg  onClick={() => updatecreategoals()} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
  <path strokeLinecap="round" strokeLineJoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg></div>
            <div><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quae. Iusto</small></div>
            
            <div><input type="text" onChange={(e) => setText( e.target.value)} value={text}></input></div>
            <button onClick={() => sendgoal()}>Create</button>
            </div>
        </div>
    </div>
  )
}

export default Creategoals;