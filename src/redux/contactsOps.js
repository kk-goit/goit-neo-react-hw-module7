import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
  try {
    const { data } = await axios.delete(`https://678361c68b6c7a1316f43a22.mockapi.io/contacts/${id}`)
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const { data } = await axios('https://678361c68b6c7a1316f43a22.mockapi.io/contacts')
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const addContact = createAsyncThunk('contacts/addContact', async ({ name, number }, thunkAPI) => { 
  try {
    const { data } = await axios.post('https://678361c68b6c7a1316f43a22.mockapi.io/contacts', { name, number })
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})
