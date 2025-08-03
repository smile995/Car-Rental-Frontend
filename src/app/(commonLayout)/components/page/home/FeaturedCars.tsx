import carDatas from "@/Utils/fetchCars";
import Title from "../shared/Title";
import FeaturedCarsSlider from "./FeatureSlide";



const FeaturedCars = async () => {
  const { data } = await carDatas();
  

  return (
    <div className="my-5">
      <div>
        <Title heading="Our Featured Cars" subheading="Top picks for you!" />
      </div>
      <div>
     <FeaturedCarsSlider cars={data}/>
      </div>
    </div>
  );
};

export default FeaturedCars;
