
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Define a slice for tasks
const tasksSlice = createSlice({
  name: 'tasks', // Name of the slice
  initialState: [], // Initial state of tasks (empty array)
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload); // Add a new task to the state
    },
    deleteTask: (state, action) => {
      // Filter out the task with the specified ID
      return state.filter((task) => task.id !== action.payload);
    },
  },
});

// Extract action creators from the tasks slice
export const { addTask, deleteTask } = tasksSlice.actions;

// Create the Redux store with the tasks reducer
const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer, // Include the tasks reducer in the store
  },
});

export default store;
