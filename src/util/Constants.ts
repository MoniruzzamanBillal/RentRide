import { TSelectElectric } from "@/types/globalTypes";

export const isElectricCarOption: TSelectElectric[] = [
  {
    name: "Electric",
    value: "yes",
  },
  {
    name: "Non Electric",
    value: "no",
  },
];

export const carFeaturesOptions = [
  { name: "GPS", value: "gps" },
  { name: "Air Conditioning", value: "ac" },
  { name: "Sunroof", value: "sunroof" },
  { name: "Child Seat", value: "childSeat" },
];
export const carTypeOptions = [
  { name: "Sedan", value: "Sedan" },
  { name: "SUV", value: "SUV" },
  { name: "Coupe", value: "Coupe" },
  { name: "Compact", value: "Compact" },
  { name: "Minivan", value: "Minivan" },
];

export const dropLocationOptions = [
  { name: "Dhaka", value: "Dhaka" },
  { name: "Gazipur", value: "Gazipur" },
  { name: "Khulna", value: "Khulna" },
  { name: "Chittagong", value: "Chittagong" },
  { name: "Sylhet", value: "Sylhet" },
];

export const userRole = {
  admin: "admin",
  user: "user",
};

export const bookingStatus = {
  pending: "pending",
  approved: "approved",
  completed: "completed",
};

export const carStatus = {
  available: "available",
  unavailable: "unavailable",
};
