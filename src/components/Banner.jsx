import { Carousel } from "flowbite-react";
import React from "react";

export default function Banner() {
  const data = [
    "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
    "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",
    "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
    "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg",
  ];
  return (
    <div className="h-64 sm:h-72 md:h-96 lg:h-screen lg:min-h-[520px]">
      <Carousel indicators={false}>
        {data.map((img, index) => (
          <img
            key={index}
            src={img}
            className="h-full object-cover object-center"
            alt={`banner-${index}`}
          />
        ))}
      </Carousel>
    </div>
  );
}
