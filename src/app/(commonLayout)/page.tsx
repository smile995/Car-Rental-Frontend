import Banner from "./components/page/home/Banner";
import FeaturedCars from "./components/page/home/FeaturedCars";
import ReviewComponent from "./components/page/home/ReviewComponent";
import WhyChooseUs from "./components/page/home/WhyChooseUs";

const Welcome = () => {
  return (
    <div>
      <Banner />
      <FeaturedCars />
      <WhyChooseUs />
      <ReviewComponent />
    </div>
  );
};

export default Welcome;
