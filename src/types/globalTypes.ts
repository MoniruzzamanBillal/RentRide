import { ReactNode } from "react";

export type TUser = {
  userId: string;
  userRole: string;
  iat: number;
  exp: number;
};

export type TBannerInfo = {
  subHeading: string;
  heading: string;
  description: string;
  bannerImg: string;
};

export type TFeaturedCar = {
  _id: string;
  name: string;
  type: string;
  carImg?: string;
  description: string;
  color: string;
  isElectric: boolean;
  pricePerHour: number;
  status: "available" | "unavailable";
  isDeleted: boolean;
  features: string[];
  dropLocation: string[];
  __v: number;
};

export type TCar = {
  carImg: string;
  type: string;
  color: string;
  description: string;
  dropLocation: string[];
  features: string[];
  isDeleted: boolean;
  isElectric: boolean;
  name: string;
  pricePerHour: number;
  status: "available" | "unavailable";
  __v: number;
  _id: string;
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
  carStatus: string;
  car: TBookingCar;
  user: TBookingUser;
  startTime: string;
  payment: string;
  endTime: string | null;
  dropLocation: string;
  status: string;
  totalCost: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type TUserCompletedBooking = {
  _id: string;
  date: string;
  user: {
    _id: string;
    name: string;
    email: string;
    role: string;
    phone: string;
    isBlocked: boolean;
  };
  car: {
    _id: string;
    name: string;
    description: string;
    color: string;
    isElectric: boolean;
    status: string;
    features: string[];
    pricePerHour: number;
    isDeleted: boolean;
    __v: number;
    dropLocation: string[];
  };
  startTime: string;
  endTime: string;
  totalCost: number;
  status: string;
  payment: string;
  dropLocation: string;
  additionalFeature: string[];
  paymentMethod: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
