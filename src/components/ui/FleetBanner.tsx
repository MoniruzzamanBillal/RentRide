import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import FleetBannerCard from "./FleetBannerCard";

export type TBanner = {
  heading: string;
  description: string;
  bannerImg: string;
};

const bannerInfo: TBanner[] = [
  {
    heading: "Economy Cars ",
    description:
      "Perfect for daily commutes and city driving, our economy cars offer great fuel efficiency and easy handling at affordable rates. ",
    bannerImg: "https://i.ibb.co/0jtXFpH/economy.jpg",
  },

  {
    heading: "Luxury Cars",
    description:
      " For those special occasions or just to treat yourself, our luxury vehicles provide the ultimate in comfort, style, and advanced features.",
    bannerImg: "https://i.ibb.co/B4rSVFB/luxury.jpg",
  },

  {
    heading: "Sedans",
    description:
      "Combining elegance and practicality, our sedans are great for business trips, city travel, or any journey where comfort is key.",
    bannerImg: "https://i.ibb.co/yhRFKnr/sedan.jpg",
  },

  {
    heading: "SUVs",
    description:
      "Ideal for family trips or outdoor adventures, our SUVs offer ample space, powerful performance, and versatility to handle any terrain.",
    bannerImg: "https://i.ibb.co/y888ywG/suv.jpg",
  },

  {
    heading: "Convertibles",
    description:
      "Enjoy the open road and fresh air with our stylish convertibles, perfect for a sunny day cruise.",
    bannerImg: "https://i.ibb.co/GJ5J57B/convertable.jpg",
  },
];

const FleetBanner = () => {
  return (
    <div className="FleetBannerContainer py-10 ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {bannerInfo &&
          bannerInfo.map((banner, ind) => (
            <SwiperSlide>
              <FleetBannerCard key={ind} banner={banner} />
            </SwiperSlide>
          ))}
      </Swiper>
      {/* <HeroBannerCard /> */}
    </div>
  );
};

export default FleetBanner;
