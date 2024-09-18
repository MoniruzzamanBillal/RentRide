import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  darkMode: boolean;
};

const initialState: TInitialState = {
  darkMode: false,
};

const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleMode } = modeSlice.actions;
export default modeSlice.reducer;
