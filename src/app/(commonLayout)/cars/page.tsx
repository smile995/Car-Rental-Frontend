/* eslint-disable @typescript-eslint/no-explicit-any */
import Banner from "../components/page/home/Banner";
import CarsData from "../components/page/shared/CarsData";
import Title from "../components/page/shared/Title";

const Cars = async () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <Banner />

      <Title
        heading={"Explore Our Stunning Car Collection"}
        subheading={"kaifa haluha"}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 p-6 w-full max-w-7xl">
        <CarsData />
      </div>
    </div>
  );
};

export default Cars;
