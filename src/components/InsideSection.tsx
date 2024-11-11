// src/components/InsideSection.tsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const items = [
  {
    name: "Panda Pillow",
    image:
      "https://cdn.usegalileo.ai/sdxl10/ea3deb77-6281-4f2f-a01e-0ba348c3533c.png",
  },
  {
    name: "Panda Pillow",
    image:
      "https://cdn.usegalileo.ai/sdxl10/ea3deb77-6281-4f2f-a01e-0ba348c3533c.png",
  },
  {
    name: "Panda Pillow",
    image:
      "https://cdn.usegalileo.ai/sdxl10/ea3deb77-6281-4f2f-a01e-0ba348c3533c.png",
  },
  {
    name: "Panda Pillow",
    image:
      "https://cdn.usegalileo.ai/sdxl10/ea3deb77-6281-4f2f-a01e-0ba348c3533c.png",
  },
  {
    name: "Panda Pillow",
    image:
      "https://cdn.usegalileo.ai/sdxl10/ea3deb77-6281-4f2f-a01e-0ba348c3533c.png",
  },
  {
    name: "Panda Pillow",
    image:
      "https://cdn.usegalileo.ai/sdxl10/ea3deb77-6281-4f2f-a01e-0ba348c3533c.png",
  },
  {
    name: "Panda Pillow",
    image:
      "https://cdn.usegalileo.ai/sdxl10/ea3deb77-6281-4f2f-a01e-0ba348c3533c.png",
  },
  {
    name: "Panda Pillow",
    image:
      "https://cdn.usegalileo.ai/sdxl10/ea3deb77-6281-4f2f-a01e-0ba348c3533c.png",
  },
  {
    name: "Panda Pillow",
    image:
      "https://cdn.usegalileo.ai/sdxl10/ea3deb77-6281-4f2f-a01e-0ba348c3533c.png",
  },
  // ... Add other items similarly
];

const InsideSection: React.FC = () => {
  return (
    <section>
      <h2 className="text-black text-[22px] font-bold tracking-tight px-4 pb-3 pt-5">
        What's Inside ({items.length})
      </h2>
      <div className="px-4">
        <Swiper
          spaceBetween={16}
          slidesPerView={6}
          className="pb-3 px-2"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            880: {
              slidesPerView: 2,
            },
            1050: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 5,
            },
            1420: {
              slidesPerView: 6,
            },
          }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col gap-4 rounded-xl bg-white shadow-md">
                <div
                  className="w-full aspect-square bg-center bg-cover rounded-t-xl"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
                <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
                  <p className="text-black text-base font-medium">
                    {item.name}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default InsideSection;
