import { createSlice } from '@reduxjs/toolkit';
import operations  from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: {
    [operations.fetchContacts.pending]: handlePending,
    [operations.fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [operations.fetchContacts.rejected]: handleRejected,

    [operations.addContact.pending]: handlePending,
    [operations.addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [operations.addContact.rejected]: handleRejected,

    [operations.deleteContact.pending]: handlePending,
    [operations.deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [operations.deleteContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;
