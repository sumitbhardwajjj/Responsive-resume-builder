// resumeSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  personalInfo: {},
  Educationalinfo: [],
  WorkExp:[],
  Skills:[]
 
};

export const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    setPersonalInfo: (state, action) => {
      state.personalInfo = action.payload;
    },
    addEducationalInfo: (state, action) => {
      state.Educationalinfo.push(action.payload);
    },
    addWorkExp: (state, action) => {
      state.WorkExp.push(action.payload);
    },
    addSkills: (state, action) => {
      state.Skills.push(action.payload);
    },
   
  },
});

export const { setPersonalInfo, addEducationalInfo,addWorkExp,addSkills} = resumeSlice.actions;

export const selectResume = (state) => state.resume;

export default resumeSlice.reducer;
