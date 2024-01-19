
import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlicer';
import { searchReducer } from './searchSlicer';






;

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: searchReducer,
  },
});
