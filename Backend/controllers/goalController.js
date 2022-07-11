
//@desc   Get goals
//@route  Get /api/goals
//@access Private
const getGoals = async(req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Plesase add a text field')
    }
    res.status(200).json({message:'Get Goals'})
}

//@desc   Post Goals
//@route  post /api/goals
//@access Private
const setGoals = async(req, res) => {
    res.status(200).json({message: 'Set goals'})
}


//@desc   UPDATE goals
//@route   /api/goals/:id
//@access Private
const UpdateGoals = async(req, res) => {
    res.status(200).json({message: `Update goals  ${req.params.id}`})
}


//@desc   delete goals
//@route  Delete /api/goals/:id
//@access Private

const deleteGoals = async(req, res) => {
    res.status(200).json({message: `Delete goals ${req.params.id} `})
}


module.exports = {
    getGoals,
    deleteGoals,
    UpdateGoals,
    setGoals
}