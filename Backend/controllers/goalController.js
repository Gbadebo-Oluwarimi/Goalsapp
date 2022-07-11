
const goal = require('../model/goalModel')
//@desc   Get goals
//@route  Get /api/goals
//@access Private
const getGoals = async(req, res) => {
    const goals = await goal.find()

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
        text:req.body.text
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
    const updatedgoal = await goal.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedgoal)
}


//@desc   delete goals
//@route  Delete /api/goals/:id
//@access Private

const deleteGoals = async(req, res) => {
    const id = req.params.id
    const deleteid = await goal.findByIdAndDelete(id)
    res.status(200).json(deleteid)
}


module.exports = {
    getGoals,
    deleteGoals,
    UpdateGoals,
    setGoals
}