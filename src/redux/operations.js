import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';


const set = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const unset = () => {
  axios.defaults.headers.common.Authorization = ``;
}


const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      set(response.data.token);
      console.log(response.data)
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const logIn = createAsyncThunk(
  'auth/logIn',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', credentials);
      set(response.data.token);
      return response.data;
    } catch(error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      unset();
    } catch(error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    
    if(persistedToken === null) {
      console.log("You need to enter in your account or create new")
      return thunkAPI.rejectWithValue();
    }
    set(persistedToken);
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const addContact = createAsyncThunk(
  'contacts/addContact',
  async (credentials, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      console.log('Токена нет, уходим из fetchCurrentUser');
      return thunkAPI.rejectWithValue();
    }
    set(persistedToken);
    try {
      const response = await axios.post('/contacts', credentials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      console.log('Токена нет, уходим из fetchCurrentUser');
      return thunkAPI.rejectWithValue();
    }
    set(persistedToken);
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const operations  = {
  register,
  logIn,
  logOut,
  fetchContacts,
  addContact,
  deleteContact,
} 
export default operations ;