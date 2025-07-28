/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

import nexiosInstance from "@/config/nexios.config";
import {
  Card,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";
import { FaStar } from "react-icons/fa";

const CarsDetailPage = async ({ params }: { params: { carId: string } }) => {
  const res: any = await nexiosInstance.get(`/cars/${params.carId}`, {
    cache: "no-store",
    next: {},
  });

  const data = res.data.data;

  return (
    <div className="min-h-screen flex justify-center items-center p-6 bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-700">
      <Card
        key={data?._id}
        className="relative w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl"
      >
        {/* Car Image */}
        <div className="relative">
          <Image
            removeWrapper
            alt={data?.name}
            className="w-full h-[450px] object-cover transition-transform duration-500 hover:scale-105"
            src={data?.image}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end p-6">
            <CardHeader className="space-y-2 backdrop-blur-md bg-white/20 p-4 rounded-xl shadow-md w-full">
              <h1 className="text-white font-extrabold text-4xl uppercase tracking-wide">
                {data?.name}{" "}
                <span className="text-xl text-white/70">({data?.model})</span>
              </h1>
              <p className="text-white/90 text-sm flex items-center gap-2">
                <FaStar className="text-yellow-400" /> Rating: {data?.rating} / 5
              </p>
            </CardHeader>
          </div>
        </div>

        {/* Car Details */}
        <CardFooter className="p-8 backdrop-blur-xl bg-white/30 dark:bg-gray-800/50 border-t border-gray-300 dark:border-gray-600 rounded-b-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-gray-800 dark:text-white">
            <div className="space-y-3">
              <p className="text-xl font-bold">Brand: {data?.brand}</p>
              <p className="text-lg font-medium">Model: {data?.model}</p>
              <p className="text-lg font-medium">Color: {data?.color}</p>
              <p className="text-lg font-medium">
                Condition: {data?.condition}
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-lg font-medium">Fuel: {data?.fuelType}</p>
              <p className="text-lg font-medium">
                Capacity: {data?.passengerCapacity} passengers
              </p>
              <p className="text-lg font-medium">Rating: {data?.rating} / 5</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap mt-8 gap-4 justify-center">
            <button className="px-6 py-3 rounded-xl border border-gray-500 dark:border-white text-gray-800 dark:text-white hover:bg-black/80 dark:hover:bg-white dark:hover:text-black transition-all duration-300">
              Explore More
            </button>
            <button className="px-6 py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-300 transition-all duration-300">
              Contact Dealer
            </button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CarsDetailPage;
