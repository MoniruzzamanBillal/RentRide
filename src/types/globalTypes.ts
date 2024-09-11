import { ReactNode } from "react";

export type TUser = {
  userId: string;
  userRole: string;
  iat: number;
  exp: number;
};

export type TFeaturedCar = {
  name: string;
  briefDescription: string;
  imageUrl: string;
  pricePerHour: number;
};

export type TTestimonial = {
  review: string;
  name: string;
  img: string;
};

export type TMissionVisionItem = {
  id: number;
  header: string;
  content: string;
  img: string;
};

export type TValueCommitment = {
  header: string;
  title: string;
};

export type TDashboardLinks = {
  name: string;
  path: string;
  icon: ReactNode;
};

export type TSelectElectric = {
  name: string;
  value: string;
};

export type TUserResponseData = {
  _id: string;
  name: string;
  email: string;
  role: "user" | "admin";
  phone: string;
  isBlocked: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type TBookingUser = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  isBlocked: boolean;
};

type TBookingCar = {
  _id: string;
  name: string;
  description: string;
  color: string;
  dropLocation: string[];
  [key: string]: any;
};

export type TBooking = {
  _id: string;
  date: string;
  car: TBookingCar;
  user: TBookingUser;
  startTime: string;
  endTime: string | null;
  dropLocation: string;
  status: string;
  totalCost: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
