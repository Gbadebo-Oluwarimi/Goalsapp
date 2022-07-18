import  {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import  goalService from '../Goals/goalService'


let initialState = {
    goals: [],
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
}

//create new goal
export const createGoal = createAsyncThunk('goals/create', async(goalData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        console.log(token)
        return await goalService.createGoals(goalData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message ||error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//get goals
export const getGoals = createAsyncThunk('goals/getall', async(_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await goalService.getGoals(token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message ||error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const deleteGoals = createAsyncThunk('goals/deleteone', async(id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await goalService.deletegoals(id, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message ||error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})



export const goalSlice = createSlice({
    name:'goals',
    initialState,
    reducers: {
        goalsr: (state) => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(createGoal.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(createGoal.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.goals.push(action.payload)
        })
        builder.addCase(createGoal.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })

        builder.addCase(getGoals.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getGoals.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.goals = action.payload
        })
        builder.addCase(getGoals.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })


        builder.addCase(deleteGoals.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(deleteGoals.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.goals = state.goals.filter((goal) => goal._id !== action.payload.id)
        })
        builder.addCase(deleteGoals.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    }
})

export default goalSlice.reducer
export const { goalsr } = goalSlice.actions