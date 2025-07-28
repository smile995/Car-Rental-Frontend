/* eslint-disable @typescript-eslint/no-explicit-any */
import nexiosInstance from "@/config/nexios.config";
import { Card, CardFooter, Image, Link } from "@nextui-org/react";

const Cars = async () => {
  const { data }: any = await nexiosInstance.get("/cars", {
    cache: "no-store",
    next: {},
  });

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
      {/* Page Title */}
      <h1 className="md:text-5xl font-extrabold text-gray-900 dark:text-white drop-shadow-sm">
        Explore Our Stunning Car Collection
      </h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 w-full max-w-7xl">
        {data?.data?.map((item: any) => (
          <Card
            key={item._id}
            isHoverable
            isPressable
            shadow="lg"
            className="relative w-full rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 transition-transform transform hover:scale-[1.03] hover:shadow-2xl"
          >
            {/* Car Image */}
            <Image
              removeWrapper
              alt={item.name}
              className="z-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              src={item.image}
            />

            {/* Top Gradient for Title and Rating */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/80 via-black/40 to-transparent px-4 pt-4">
              <h4 className="text-white text-lg font-bold capitalize">
                {item.name}
              </h4>
              <p className="text-white font-bold text-sm mt-1">
                ⭐ {item.rating}/5
              </p>
            </div>

            {/* Bottom Overlay with Car Info */}
            <CardFooter className="absolute bottom-0 left-0 right-0 px-5 py-4 bg-gradient-to-t from-black/70 via-black/40 to-transparent border-t border-white/20 text-white flex justify-between items-end">
              <div className="space-y-1 text-start">
                <p className="text-sm font-semibold">Brand: {item.brand}</p>
                <p className="text-sm font-semibold">
                  Seats: {item.passengerCapacity}
                </p>
              </div>
              <Link
                href={`/cars/${item._id}`}
                className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-xs rounded-md shadow-md"
              >
                View
              </Link>
            </CardFooter>

            {/* Tags */}
            {/* <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-green-600/80 text-white text-xs rounded-full shadow-sm">
                {item.fuelType === "d"
                  ? "Diesel"
                  : item.fuelType === "p"
                  ? "Petrol"
                  : "Hybrid"}
              </span>
              <span className="px-2 py-1 bg-yellow-500/90 text-black text-xs rounded-full shadow-sm">
                {item.condition}
              </span>
              <span className="px-2 py-1 bg-sky-600/80 text-white text-xs rounded-full shadow-sm">
                Seats: {item.passengerCapacity}
              </span>
            </div> */}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Cars;
