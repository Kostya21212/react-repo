import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    data: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.data.push({ id: Date.now(), text: action.payload });
    },
    editTask: (state, action) => {
      const { id, text } = action.payload;
      const task = state.data.find(task => task.id === id);
      if (task) {
        task.text = text;
      }
    },
    removeTask: (state, action) => {
      state.data = state.data.filter(task => task.id !== action.payload);
    },
  },
});

export const { addTask, editTask, removeTask } = todoSlice.actions;
export default todoSlice.reducer;
