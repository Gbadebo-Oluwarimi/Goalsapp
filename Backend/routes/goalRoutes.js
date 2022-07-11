const express = require('express');
const router = express.Router()
const { getGoals, deleteGoals, UpdateGoals, setGoals } = require('../controllers/goalController')


router.route('/').get(getGoals).post(setGoals)
router.route('/:id').put(UpdateGoals).delete(deleteGoals)


module.exports  = router