import Wrapper from "@/components/shared/Wrapper";
import missionImg from "@/assets/images/mission.png";
import visionImg from "@/assets/images/vision.jpg";
import {
  FleetBanner,
  MapContainer,
  MissionVisionCard,
  TeamCard,
  ValueCommitmentCard,
} from "@/components/ui";
import { TMissionVisionItem } from "@/types/globalTypes";

const missionVisionContent: TMissionVisionItem[] = [
  {
    id: 1,
    header: "Our mission",
    content:
      "At Rent Ride, our mission is to deliver a straightforward and reliable car rental experience, offering a diverse range of vehicles and exceptional service to make your journey effortless and enjoyable.",
    img: missionImg,
  },
  {
    id: 2,
    header: "Our Vision",
    content:
      "At Rent Ride, our vision is to revolutionize the car rental industry by integrating cutting-edge technology and customer-centric services to provide the most seamless and personalized rental experience. We aim to be the preferred choice for travelers and everyday drivers alike, setting new standards for convenience, reliability, and excellence in car rentals",
    img: visionImg,
  },
];

const AboutUs = () => {
  return (
    <div className="AboutUsContainer  ">
      <div className="AboutUsWrapper flex flex-col  ">
        {/* video container starts  */}
        <div className="aboutUsVideoContainer    ">
          {/* video section starts  */}

          <Wrapper>
            <div className="videoContainer realtive ">
              <video autoPlay loop muted className="  h-full w-full ">
                <source
                  src="https://cdn.economybookings.com/video/road.mp4"
                  type="video/mp4"
                />
              </video>

              <div className="headingSection text-white z-[1] absolute top-[32%] xsm:top-[38%] sm:top-[44%] md:top-[60%] left-[50%] transform  -translate-x-1/2 -translate-y-1/2 ">
                <h1 className=" mb-2 sm:mb-4 text-center font-semibold text-lg xsm:text-2xl sm:text-3xl md:text-3xl xmd:text-4xl   ">
                  Who <span className=" text-prime100 ">We Are</span>
                </h1>

                <p className="text-xs xsm:text-sm sm:text-base text-center">
                  We make car rentals easy and cheap for you.
                </p>
              </div>
            </div>
          </Wrapper>

          {/* video section ends  */}

          {/*  */}
        </div>
        {/* video container ends */}

        {/*  */}

        {/* Founding Year, Founders, and Inspiration section  */}
        <div className="founderSection bg-blue-50 py-8 ">
          <Wrapper className=" flex flex-col gap-y-8 ">
            <h1 className=" mb-2 sm:mb-4 text-center font-semibold text-lg xsm:text-2xl sm:text-3xl md:text-3xl xmd:text-4xl   ">
              Founding{" "}
              <span className=" text-prime100 ">
                Year, Founders, and Inspiration
              </span>
            </h1>

            <p className=" text-xl text-gray-700 ">
              Rent Ride was founded in 2024 by a team of passionate
              entrepreneurs who recognized a growing need for convenient and
              reliable car rental services in an increasingly mobile world. The
              founders, [Insert Founder Names], brought together their expertise
              in technology, customer service, and the automotive industry to
              create a seamless car rental experience that prioritizes customer
              satisfaction and efficiency.
            </p>

            <p className=" text-xl text-gray-700">
              The inspiration for Rent Ride came from the founders' personal
              experiences and observations of the challenges faced by travelers
              and commuters when renting vehicles. Whether it was the
              frustration of long wait times, hidden fees, or the lack of
              vehicle variety, these issues highlighted a gap in the market.
              Driven by a desire to simplify the car rental process and enhance
              the customer experience, the founders set out to build a platform
              that combines state-of-the-art technology with a user-friendly
              interface, making car rental accessible and hassle-free.
            </p>
          </Wrapper>
        </div>

        {/*  */}

        {/* mission vision sectioin starts  */}
        <div className="missionVisionSection py-8 ">
          <Wrapper>
            {missionVisionContent &&
              missionVisionContent?.map((element) => (
                <MissionVisionCard element={element} />
              ))}
          </Wrapper>
        </div>
        {/* mission vision sectioin ends */}

        {/* team member sectiion  */}
        <div className="teamSection">
          <TeamCard />
        </div>
        {/* team member sectiion  */}

        {/* fleet section  */}
        <div className="fleetSectioin">
          <Wrapper className=" py-8">
            <div className="mb-8">
              <h1 className=" mb-2 sm:mb-4 text-center font-semibold text-lg xsm:text-2xl sm:text-3xl md:text-3xl xmd:text-4xl text-prime100  ">
                Our Fleet
              </h1>
            </div>

            <p className="text-lg">
              At Rent Ride, we offer a diverse selection of vehicles to meet
              every customer's needs. Whether you're looking for a
              budget-friendly option, a luxurious ride, or something rugged for
              off-road adventures, we have you covered.
            </p>

            <FleetBanner />

            {/*  */}
          </Wrapper>
        </div>
        {/* fleet section  */}

        {/* value commitment section  */}
        <div className="valueCommitmentSection bg-blue-50 ">
          <Wrapper className=" py-8">
            <div className="mb-16">
              <h1 className=" mb-2 sm:mb-4 text-center font-semibold text-lg xsm:text-2xl sm:text-3xl md:text-3xl xmd:text-4xl text-prime100  ">
                Our Value and Commitment
              </h1>
            </div>
            <ValueCommitmentCard />
          </Wrapper>
        </div>
        {/* value commitment section  */}

        {/* contact  section   */}
        <div className="contactSection">
          <Wrapper className=" py-8">
            {/* contact section  */}
            <div className="contactStatement  m-auto ">
              <h1 className="font-semibold text-3xl mb-8 ">Contact us </h1>
              <p className=" font-medium  text-gray-700 mb-2 ">
                <span className=" font-bold "> phone :</span> 019064545
              </p>
              <p className=" font-medium  text-gray-700 mb-2 ">
                <span className=" font-bold "> Email :</span> abc@d.com
              </p>
              <p className=" font-medium  text-gray-700 mb-2 ">
                <span className=" font-bold "> Address :</span> joydebpur ,
                Gazipur
              </p>

              {/*  */}
            </div>

            {/* map section starts  */}
            <div className=" mt-6 mapSection  m-auto">
              <MapContainer />
            </div>
            {/* map section ends */}

            {/*  */}
          </Wrapper>
        </div>
        {/* contact  section   */}

        {/*  */}
      </div>
    </div>
  );
};

export default AboutUs;
