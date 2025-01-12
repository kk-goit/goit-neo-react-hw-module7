import { createSelector, createSlice } from '@reduxjs/toolkit';
import { toast } from "react-toastify";

import { fetchContacts, deleteContact, addContact } from "./contactsOps";
import { selectNameFilter } from './filtersSlice';

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter((itm) => itm.id !== payload.id)
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.push(payload)
      })

      .addCase(fetchContacts.rejected, (state, { error }) => {
        state.error = error.message
        toast.error(error.message)
      })
      .addCase(deleteContact.rejected, (state, { error }) => {
        state.error = error.message
        toast.error(error.message)
      })
      .addCase(addContact.rejected, (state, { error }) => {
        state.error = error.message
        toast.error(error.message)
      })
    
      .addMatcher(
        (action) => action.type.endsWith('/fulfilled'),
        (state) => {
          state.loading = false;
          state.error = false;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state) => {
          state.loading = true;
          state.error = false;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state) => {
          state.loading = false;
        }
      )
  },
  selectors: {
    selectContacts: (state) => state.items,
    selectContactsError: (state) => state.error,
    selectContactsLoading: (state) => state.loading,
  }
});

export const { selectContacts, selectContactsError, selectContactsLoading } = slice.selectors;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFilter) => {
    return  contacts?.filter(itm => { return itm.name.search(RegExp(nameFilter, 'i')) >= 0 })
  }
);

export default slice.reducer
