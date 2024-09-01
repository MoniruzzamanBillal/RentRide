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
