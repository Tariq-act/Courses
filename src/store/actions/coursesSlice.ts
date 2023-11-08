import { createSlice } from '@reduxjs/toolkit';
import { Course } from '../../types/types';
// import data from '../../data.json';


interface CourseState {
  courses: Course[]
  loading: boolean
}

const initialState: CourseState = {
  courses: [],
  loading: false
}

const courses = createSlice({
  name: "courses",
  initialState,
  reducers: {
    allCourses: (state, action) => {
      // state.courses.push(action.payload)
      // return action.payload
      // state.courses = [...state.courses, ...action.payload];
      state.courses = action.payload
    }
  }
})

export const { allCourses } = courses.actions

export default courses.reducer;