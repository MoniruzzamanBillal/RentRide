import { z } from "zod";
import { FieldValues } from "react-hook-form";
import { RentForm, RentSelectInput } from "../form";
import Wrapper from "../shared/Wrapper";
import HeroSlider from "./HeroSlider";

import { dropLocationOptions } from "@/util/Constants";
import { Button } from "./button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const HeroBanner = () => {
  const navigate = useNavigate();

  const handleSearchLocation = (data: FieldValues) => {
    const { location } = data;
    navigate(`/car-list/${location}`);
  };

  return (
    <div className="HeroBannerContainer py-4 lg:py-8 dark:bg-black50 ">
      <Wrapper className="HeroBannerWrapper  flex flex-col lg:flex-row justify-between items-center  gap-y-5 lg:gap-y-0 ">
        <div className="sliderContainer  w-[100%] lg:w-[60%]  ">
          <HeroSlider />
        </div>

        <div className=" searchContainer  w-[100%] sm:w-[96%] md:w-[86%] xmd:w-[70%] lg:w-[40%] bg-[url('https://i.postimg.cc/8zLyPJKQ/pexels-sergi-montaner-1924032-39.jpg')] imageCenter  rounded-md  p-20 lg:p-14 ">
          <div className="searchContainer p-4 bg-prime50 backdrop-blur bg-opacity-10 dark:backdrop-blur shadow-lg rounded-md border border-gray-50  ">
            <RentForm
              onSubmit={handleSearchLocation}
              resolver={zodResolver(
                z.object({
                  location: z
                    .string()
                    .min(1, { message: "Drop location is required !!" }),
                })
              )}
            >
              <RentSelectInput
                name="location"
                label="DropLocation : "
                options={dropLocationOptions}
              />

              <Button className="inline-block rounded-lg bg-prime50 text-sm font-medium text-white outline-none ring-indigo-300 transition duration-100 hover:bg-prime100 focus-visible:ring  md:text-base">
                Book Now
              </Button>
            </RentForm>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default HeroBanner;
