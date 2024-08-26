import { whyChooseData } from "@/util/Data";
import Wrapper from "../shared/Wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type TAccordianQuestion = {
  question: string;
  answer: string;
  value: string;
};

const WhyChoose = () => {
  return (
    <div className="WhyChooseContainer py-8">
      <Wrapper className="WhyChooseWrapper ">
        <h1 className=" relative mb-6  md:mb-8 xmd:mb-12 lg:mb-14 text-center font-semibold text-lg xsm:text-xl sm:text-3xl md:text-3xl xl:text-4xl text-shadow-blue">
          <div className="absolute top-[2.1rem] xsm:top-[2.2rem] sm:top-[3rem] md:top-[3rem]  xmd:top-[3rem] left-[50%] md:left-[50%] transform -translate-x-1/2 -translate-y-1/2 h-[.15rem] w-[16%] xsm:w-[15%] sm:w-[20%] md:w-[15%] lg:w-[13%] bg-prime100 "></div>
          Why <span className=" text-prime100 ">Choose Us</span>
        </h1>

        <Accordion
          type="single"
          collapsible
          className="  w-[96%] xsm:w-[90%] sm:w-[86%] xmd:w-[80%] lg:w-[70%] m-auto text-base sm:text-lg  "
        >
          {whyChooseData &&
            whyChooseData?.map((item: TAccordianQuestion) => (
              <AccordionItem key={item?.value} value={item?.value}>
                <AccordionTrigger> {item?.question} </AccordionTrigger>
                <AccordionContent>{item?.answer}</AccordionContent>
              </AccordionItem>
            ))}
        </Accordion>

        {/*  */}
      </Wrapper>
    </div>
  );
};

export default WhyChoose;
