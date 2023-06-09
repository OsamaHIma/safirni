import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

// config the store
const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// export default the store
export default store;
