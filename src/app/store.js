import { configureStore } from "@reduxjs/toolkit";
import dataslice from "../features/data/dataslice";

export default configureStore({
  reducer: { data: dataslice },
});
