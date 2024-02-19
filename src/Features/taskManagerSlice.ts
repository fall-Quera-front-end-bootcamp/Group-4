import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    taskItems: [],
    tasks: [],
    numberOfTasks: 0,
    isLoading : true,
}

const taskManagerSlice = createSlice({
    name: 'taskManager',
    initialState,
    reducers: {}
})

//console.log(taskManagerSlice)

export default taskManagerSlice.reducer;