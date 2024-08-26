export type TUser = {
  userId: string;
  role: string;
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
