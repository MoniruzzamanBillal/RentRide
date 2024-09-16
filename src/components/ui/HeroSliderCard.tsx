import { TBannerInfo } from "@/types/globalTypes";
import { Link } from "react-router-dom";
import { Button } from "./button";

type THeroSliderCardProps = {
  banner: TBannerInfo;
};
const HeroSliderCard = ({ banner }: THeroSliderCardProps) => {
  return (
    <section className="   flex container flex-col items-center justify-between  lg:flex-row gap-y-5 lg:gap-y-0 ">
      {/* content - start  */}
      <div className="  w-[100%]  lg:w-[50%] flex flex-col justify-center sm:text-center  lg:text-left   ">
        <p className=" font-semibold text-prime100 text-base xsm:text-lg sm:text-xl xmd:text-base ">
          {banner?.subHeading}
        </p>

        <h1 className="mb-2 font-bold text-black text-xl xsm:text-2xl sm:text-3xl md:text-4xl xmd:text-2xl ">
          {banner?.heading}
        </h1>

        <p className="mb-3 leading-relaxed text-gray-500 lg:w-4/5 text-sm xsm:text-base sm:text-lg  xmd:text-base">
          {banner?.description}
        </p>

        <div className="  ">
          <Link to={"/products"}>
            <Button className="inline-block rounded-lg bg-prime50 text-sm font-medium text-white outline-none ring-indigo-300 transition duration-100 hover:bg-prime100 focus-visible:ring  md:text-base">
              Book Now
            </Button>
          </Link>
        </div>
      </div>
      {/* content - end  */}

      {/* image - start  */}
      <div className="  w-[100%]  lg:w-[50%]  overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto ">
        <img
          src={banner?.bannerImg}
          loading="lazy"
          alt="Photo by Fakurian Design"
          className="h-full w-full object-cover object-center"
        />
      </div>
      {/* image  end  */}
    </section>
  );
};

export default HeroSliderCard;
