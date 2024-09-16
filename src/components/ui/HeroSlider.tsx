import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { TBannerInfo } from "@/types/globalTypes";
import HeroSliderCard from "./HeroSliderCard";

const bannerInfo: TBannerInfo[] = [
  {
    heading: "Find Your Perfect Ride",
    subHeading: "Wide Selection of Vehicles Available",
    description:
      "From economy to luxury cars, RentRide offers a range of vehicles to suit your every need. Book now and enjoy the convenience of hassle-free car rentals at competitive prices.",
    bannerImg:
      "https://i.postimg.cc/RCTZkXQw/black-sports-car-street-1010871-9374.jpg",
  },
  {
    heading: "Explore More with RentRide",
    subHeading: "Your Adventure Awaits",
    description:
      "Whether it's a weekend getaway or a business trip, RentRide has the right car for you. Choose your preferred vehicle and hit the road with our easy booking system. Book now and drive in comfort.",
    bannerImg:
      "https://i.postimg.cc/mgPZFRxS/colorful-sports-car-with-orange-blue-stripes-1010871-16017.jpg",
  },
  {
    heading: "Drive in Style with RentRide",
    subHeading: "Affordable Rates, Premium Cars",
    description:
      "Luxury and affordability in one place. Rent the car of your dreams and enjoy an exceptional driving experience. Click 'Book Now' to reserve your ride today.",
    bannerImg:
      "https://i.postimg.cc/XJ40x6Pm/sports-car-driving-asphalt-road-night-generative-ai.jpg",
  },
  {
    heading: "Ready to Roll? Book Now!",
    subHeading: "Flexible Rentals for Every Occasion",
    description:
      "Whether it's a quick city ride or a long-distance journey, RentRide provides flexible rental options to fit your schedule. Select your car, book instantly, and hit the road.",
    bannerImg:
      "https://i.postimg.cc/WbQCXPF8/sports-car-driving-road-with-flames-smoke-1010871-5660.jpg",
  },
];

const HeroSlider = () => {
  return (
    <div className="HeroSliderContainer">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {bannerInfo &&
          bannerInfo.map((banner, ind) => (
            <SwiperSlide>
              <HeroSliderCard key={ind} banner={banner} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
