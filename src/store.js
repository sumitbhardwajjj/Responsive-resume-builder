// store.js

import { configureStore } from '@reduxjs/toolkit';
import resumeReducer from './components/resumeSlice';

export const store = configureStore({
  reducer: {
    resume: resumeReducer,
  },
});
