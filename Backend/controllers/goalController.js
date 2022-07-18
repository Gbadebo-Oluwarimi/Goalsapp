
const { isObjectIdOrHexString } = require('mongoose')
const goal = require('../model/goalModel')
const User = require('../model/userModel')
//@desc   Get goals
//@route  Get /api/goals
//@access Private
const getGoals = async(req, res) => {
    const goals = await goal.find({user:req.user.id})
    res.status(200).json(goals)
}

//@desc   Post Goals
//@route  post /api/goals
//@access Private
const setGoals = async(req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Plesase add a text field')
    }
    const goals = await goal.create({
        text:req.body.text,
        user:req.user.id
    })
    res.status(200).json(goals)
}


//@desc   UPDATE goals
//@route   /api/goals/:id
//@access Private
const UpdateGoals = async(req, res) => {
    const goals = await goal.findById(req.params.id)
    if(!goals){
        res.status(400)
        throw new Error('goal not found')
    }

    if(!req.user){
        res.status(401)
        throw new Error("User not found");
    }
    if(goals.user.toString() !== req.user.id){
        res.status(401)
        throw new Error("User not authorized")
    }
    const updatedgoal = await goal.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedgoal)
}


//@desc   delete goals
//@route  Delete /api/goals/:id
//@access Private

const deleteGoals = async(req, res) => {
   const goals = await goal.findById(req.params.id)
   if(!goal){
    res.status(400)
    throw new Error("no goals found")
   }
    if(!req.user){
        res.status(401)
        throw new Error("User not found");
    }
    if(goals.user.toString() !== req.user.id){
        res.status(401)
        throw new Error("User not authorized")
    }
   await goal.deleteOne()
   res.status(200).json({id: req.params.id})
}


module.exports = {
    getGoals,
    deleteGoals,
    UpdateGoals,
    setGoals
}