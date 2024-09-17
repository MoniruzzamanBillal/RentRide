import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/auth.slice";
import bookingReducer from "./features/booking/booking.slice";
import darkModeReducer from "./features/darkMode/dark.slice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { baseApi } from "./api/baseApi";

const persistConfig = {
  key: "auth",
  storage,
};

const darkModeConfig = {
  key: "mode",
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);
const persistedDarkReducer = persistReducer(darkModeConfig, darkModeReducer);

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: persistedReducer,
    mode: persistedDarkReducer,
    booking: bookingReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
