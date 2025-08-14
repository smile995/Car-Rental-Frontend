/* eslint-disable @typescript-eslint/no-explicit-any */
// import { div } from "framer-motion/client";
import CarsData from "../components/page/shared/CarsData";
import Title from "../components/page/shared/Title";

const Cars = async () => {
  return (
    <div className="lg:grid gap-5 grid-cols-5 ">
      <div className="lg:min-h-screen  mx-2 rounded-md p-2 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
       filter option

     
      </div>

      <div className="min-h-screen col-span-4 flex flex-col justify-center items-center bg-gradient-to-b rounded-md from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <Title
          heading={"Explore Our Stunning Car Collection"}
          subheading={"kaifa haluha"}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 p-6 w-full max-w-7xl">
          <CarsData />
        </div>
      </div>
    </div>
  );
};

export default Cars;
