import Wrapper from "@/components/shared/Wrapper";
import { MapContainer } from "@/components/ui";

const ContactUs = () => {
  return (
    <div className="ContactUsContainer dark:bg-black50 ">
      <Wrapper className="ContactUsWrapper   ">
        {/* contact  section   */}
        <div className="contactSection">
          <Wrapper className=" py-8">
            {/* contact section  */}
            <div className="contactStatement  m-auto ">
              <h1 className="font-semibold text-3xl mb-8 ">Contact us </h1>
              <p className=" font-medium  text-gray-700 dark:text-gray-200 mb-2 ">
                <span className=" font-bold "> phone :</span> 019064545
              </p>
              <p className=" font-medium  text-gray-700 dark:text-gray-200 mb-2 ">
                <span className=" font-bold "> Email :</span> abc@d.com
              </p>
              <p className=" font-medium  text-gray-700 dark:text-gray-200 mb-2 ">
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
      </Wrapper>
    </div>
  );
};

export default ContactUs;
