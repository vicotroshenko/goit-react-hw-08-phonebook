import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filterContact(state, action) {
      return (state = action.payload);
    },
  },
});


export const { filterContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;