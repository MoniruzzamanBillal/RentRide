import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TBooking = {
  carId: string;
  date: string;
  startTime: string;
  dropLocation: string;
  paymentMethod: string;
  additionalFeature: string[];
};

const initialState: TBooking = {
  carId: "",
  date: "",
  startTime: "",
  dropLocation: "",
  paymentMethod: "",
  additionalFeature: [],
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    // ! for  set booking state
    setBookingData(state, action: PayloadAction<TBooking>) {
      return { ...state, ...action.payload };
    },

    // ! for clearing booking state
    clearBookingData(state) {
      return initialState;
    },
  },
});

export const { setBookingData, clearBookingData } = bookingSlice.actions;
export default bookingSlice.reducer;
