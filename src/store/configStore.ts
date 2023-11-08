import { configureStore } from "@reduxjs/toolkit";
import courses from "./actions/coursesSlice";

const store = configureStore({
  reducer: courses,
});

export default store;