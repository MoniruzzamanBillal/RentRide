import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import Wrapper from "../shared/Wrapper";

type TMember = {
  name: string;
  designation: string;
  image: string;
  descriptiion: string;
};

const teamMembers: TMember[] = [
  {
    name: "Omar Khalid",
    designation: "Chief Executive Officer (CEO)",
    image: "https://i.ibb.co/jkJn50G/images-3.jpg",
    descriptiion:
      "Omar leads Rent Ride with over 15 years of industry experience, focusing on strategic planning and partnerships to drive the company's mission forward.",
  },

  {
    name: "Yusuf Ali",
    designation: "Chief Technology Officer (CTO)",
    image: "https://i.ibb.co/VQvdBs8/images-1.jpg",
    descriptiion:
      "Yusuf oversees Rent Ride's technology, ensuring the platform is secure and innovative. He leads the development team in creating new features and maintaining performance.",
  },

  {
    name: "Bilal Ahmed",
    designation: "Chief Operating Officer (COO)",
    image: "https://i.ibb.co/DkN81C1/Team-memeber-01.png",
    descriptiion:
      "Bilal manages daily operations, optimizing rental processes and logistics. His expertise keeps Rent Ride efficient and customer-oriented.",
  },

  {
    name: "Zain Malik",
    designation: "Chief Marketing Officer (CMO)",
    image: "https://i.ibb.co/c1bkZDM/images.jpg",
    descriptiion:
      "Zain drives Rent Ride's marketing efforts, crafting campaigns to boost brand visibility and engage customers through strategic storytelling and digital marketing.",
  },

  {
    name: "Faisal Khan",
    designation: "Head of Customer Experience",
    image: "https://i.ibb.co/6tHVKLQ/team2.jpg",
    descriptiion:
      "Faisal ensures every customer has a positive experience with Rent Ride, leading the support team and enhancing user satisfaction.",
  },

  {
    name: "Hasan Raza",
    designation: "Head of Fleet Management",
    image: "https://i.ibb.co/xgm7qGY/images-2.jpg",
    descriptiion:
      "Hasan manages Rent Ride's vehicle fleet, coordinating maintenance and quality checks to keep cars ready for customer use.",
  },
];

const TeamCard = () => {
  return (
    <div className="TeamMemberContainer ">
      <div className="bg-blue-50 py-8    ">
        <Wrapper>
          <div className=" max-w-screen-xl  m-auto  ">
            {/* text - start  */}
            <div className="mb-10 md:mb-16">
              <h1 className=" mb-2 sm:mb-4 text-center font-semibold text-lg xsm:text-2xl sm:text-3xl md:text-3xl xmd:text-4xl text-prime100  ">
                Meet Our Team
              </h1>
            </div>
            {/* text - end  */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {/* person - start  */}
              {teamMembers &&
                teamMembers?.map((member: TMember, ind: number) => (
                  <div
                    key={ind}
                    className=" h-[23.5rem] xsm:h-[22.5rem] md:h-[24rem] lg:h-[27rem] flex flex-col items-center rounded-lg bg-gray-50 border border-gray-200 p-4 lg:p-8  w-[95%] xsm:w-[75%] sm:w-full m-auto shadow-lg "
                  >
                    <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32">
                      <img
                        src={member?.image}
                        loading="lazy"
                        alt="Photo by Radu Florin"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div>
                      <div className="text-center font-bold text-indigo-500 md:text-lg">
                        {member?.name}
                      </div>
                      <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">
                        {member?.designation}
                      </p>
                      <p className=" text-center   text-gray-500 md:mb-4 text-sm">
                        {member?.descriptiion}
                      </p>

                      {/* social - start  */}
                      <div className=" mt-6 flex justify-center">
                        <div className="flex gap-5">
                          {/* facebook icon  */}
                          <Link
                            to={"https://www.facebook.com/"}
                            className=" text-2xl text-neutral-600 hover:text-blue-700"
                          >
                            <FaFacebook />
                          </Link>

                          {/* linkedin icon  */}
                          <Link
                            to={"https://bd.linkedin.com/"}
                            className=" text-2xl text-neutral-600 hover:text-blue-800"
                          >
                            <FaLinkedin />
                          </Link>
                          {/* github icon  */}
                          <Link
                            to={"https://github.com/MoniruzzamanBillal"}
                            className=" text-2xl text-neutral-600 hover:text-neutral-800"
                          >
                            <FaGithub />
                          </Link>
                        </div>
                      </div>
                      {/* social - end  */}
                    </div>
                  </div>
                ))}

              {/* person - end  */}
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default TeamCard;
