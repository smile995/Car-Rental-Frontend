"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";

/* eslint-disable @typescript-eslint/no-explicit-any */
const FeaturedCarsSlider = ({ cars }: { cars: any[] }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="mySwiper"
    >
      {cars?.map((car) => (
        <SwiperSlide key={car.id}>
          <div className="text-center">
            <Card
              isFooterBlurred
              className="w-full h-[300px] col-span-12 sm:col-span-5"
            >
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-tiny bg-slate-500 p-1 rounded text-white uppercase font-bold">
                  {car?.condition}
                </p>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card example background"
                className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                src={car?.image}
              />
              <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div>
                  <p className="text-black text-tiny">{car?.name}.</p>
                  <p className="text-black text-tiny">⭐ {car.rating}</p>
                </div>
                <Button
                  className="text-tiny"
                  color="primary"
                  radius="full"
                  size="sm"
                >
                  Book Now
                </Button>
              </CardFooter>
            </Card>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FeaturedCarsSlider;
