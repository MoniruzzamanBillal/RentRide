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
];

export const dropLocationOptions = [
  { name: "Dhaka", value: "Dhaka" },
  { name: "Gazipur", value: "Gazipur" },
  { name: "Khulna", value: "Khulna" },
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
