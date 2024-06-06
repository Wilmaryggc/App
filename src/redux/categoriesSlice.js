import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    setCategories: (state, action) => action.payload,
    addCategory: (state, action) => { state.push(action.payload); },
    deleteCategory: (state, action) => state.filter(category => category.id !== action.payload),
    updateCategory: (state, action) => {
      const index = state.findIndex(category => category.id === action.payload.id);
      if (index !== -1) state[index] = action.payload;
    }
  }
});

export const { setCategories, addCategory, deleteCategory, updateCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;