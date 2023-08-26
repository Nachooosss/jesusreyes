import { configureStore } from "@reduxjs/toolkit";
import dataslice from "../store/dataslice";

export default configureStore({
  reducer: { data: dataslice },
});
