// src/components/ProductSection.tsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import clsx from "clsx";

const products = [
  {
    id: "edwedewd",
    name: "Red Box ($50)",
    image:
      "https://cdn.usegalileo.ai/sdxl10/736c9cb2-7f5e-470a-b0de-8b9f77eeefed.png",
  },
  {
    id: "wedweewd",
    name: "Blue Box ($60)",
    image:
      "https://cdn.usegalileo.ai/sdxl10/cf5d045e-f5a0-43b5-a4fa-a97fec61dd9f.png",
  },
  {
    id: "cerfrfwed",
    name: "Yellow Box ($70)",
    image:
      "https://cdn.usegalileo.ai/sdxl10/2b6aae56-f30e-4d2a-943f-0eff17bb2883.png",
  },
];

const ProductSection: React.FC<{
  onSelect?: (id: string) => void;
  activeProductId?: string;
}> = ({ onSelect, activeProductId }) => {
  return (
    <section>
      <h2 className="text-black text-[22px] font-bold tracking-tight px-4 pb-3 pt-5">
        Choose Your Box ({products.length})
      </h2>
      <div className="px-4">
        <Swiper
          spaceBetween={16}
          slidesPerView={3}
          className="pb-3 px-2"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            880: {
              slidesPerView: 2,
            },
            1050: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {products.map((product) => {
            const isActive = product.id === activeProductId;
            return (
              <SwiperSlide key={product.id}>
                <div
                  className={clsx(
                    "flex flex-col gap-4 rounded-xl",
                    isActive ? "bg-slate-50" : "bg-white shadow-md"
                  )}
                >
                  <div
                    className="w-full aspect-square bg-center bg-cover rounded-t-xl"
                    style={{ backgroundImage: `url(${product.image})` }}
                  ></div>
                  <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
                    <p className="text-black text-base font-medium">
                      {product.name}
                    </p>
                    <button
                      onClick={() => onSelect?.(product.id)}
                      className={clsx(
                        "text-black rounded-xl h-10 px-4 font-bold",
                        isActive
                          ? "bg-slate-100"
                          : "bg-gray-200 hover:bg-gray-300 cursor-pointer"
                      )}
                    >
                      Select
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductSection;
