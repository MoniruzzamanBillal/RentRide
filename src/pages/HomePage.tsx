import {
  FeaturedCar,
  HeroBanner,
  Testimonial,
  WhyChoose,
} from "@/components/ui";

const HomePage = () => {
  return (
    <div className="HomePageContainer">
      <HeroBanner />

      <FeaturedCar />
      <WhyChoose />
      <Testimonial />
    </div>
  );
};

export default HomePage;
