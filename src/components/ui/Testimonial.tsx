import Wrapper from "../shared/Wrapper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay } from "swiper/modules";
import { testimonialsData } from "@/util/Data";
import { TTestimonial } from "@/types/globalTypes";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <div className="TestimonialContainer py-8 bg-blue-50 dark:bg-black20 ">
      <Wrapper className="TestimonialWrapper ">
        <h1 className=" relative mb-6  md:mb-8 xmd:mb-12 lg:mb-14 text-center font-semibold text-lg xsm:text-xl sm:text-3xl md:text-3xl xl:text-4xl text-shadow-blue">
          <div className="absolute top-[2.1rem] xsm:top-[2.2rem] sm:top-[3rem] md:top-[3rem]  xmd:top-[3rem] left-[50%] md:left-[50%] transform -translate-x-1/2 -translate-y-1/2 h-[.15rem] w-[16%] xsm:w-[15%] sm:w-[20%] md:w-[15%] lg:w-[13%] bg-prime100 "></div>
          What our <span className=" text-prime100 ">customers say</span>
        </h1>

        <div className="testimonialCardContainer">
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
            {testimonialsData &&
              testimonialsData?.map(
                (testimonial: TTestimonial, ind: number) => (
                  <SwiperSlide key={ind}>
                    {/* testimonial starts  */}
                    <TestimonialCard testimonial={testimonial} />
                    {/* testimonial ends  */}
                  </SwiperSlide>
                )
              )}

            {/*  */}

            {/*  */}
          </Swiper>
        </div>

        {/*  */}
      </Wrapper>
    </div>
  );
};

export default Testimonial;
