import { TBanner } from "./FleetBanner";

type HeroBannerCardProps = {
  banner: TBanner;
};

const FleetBannerCard = ({ banner }: HeroBannerCardProps) => {
  return (
    <section className="  mb-12 flex container flex-col items-center justify-between  lg:flex-row gap-y-10 lg:gap-y-0 ">
      {/* content - start  */}
      <div className=" pl-8 w-[99%] xsm:w-[90%] sm:w-[80%]  md:w-[70%] xmd:w-[60%] lg:w-[50%] flex flex-col justify-center  sm:text-center  lg:text-left   ">
        <h1 className="mb-5 text-3xl font-bold text-prime100 md:text-4xl">
          {banner?.heading}
        </h1>

        <p className=" leading-relaxed text-gray-700 dark:text-gray-300 00 lg:w-4/5 xl:text-lg">
          {banner?.description}
        </p>
      </div>
      {/* content - end  */}

      {/* image - start  */}
      <div className="  w-[99%] xsm:w-[90%] sm:w-[80%]  md:w-[70%] xmd:w-[60%] lg:w-[50%]  overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto ">
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

export default FleetBannerCard;
