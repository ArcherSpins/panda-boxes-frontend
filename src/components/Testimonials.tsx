// src/components/Testimonials.tsx
import React from "react";

const testimonials = [
  {
    name: "Hannah",
    date: "Dec 2022",
    rating: 5,
    comment:
      "I loved my mystery box, everything was so cute and good quality. I'll definitely buy another one!",
    likes: 2,
    dislikes: 0,
  },
  // ... Add other testimonials similarly
];

const Testimonials: React.FC = () => {
  return (
    <section className="bg-white p-4">
      <h2 className="text-black text-[22px] font-bold tracking-tight pb-3 pt-5">
        What People Say
      </h2>
      <div className="flex flex-col gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex flex-col gap-3">
            <div>
              <p className="text-black text-base font-medium">
                {testimonial.name}
              </p>
              <p className="text-gray-500 text-sm">{testimonial.date}</p>
            </div>
            <div className="flex">
              {Array.from({ length: 5 }, (_, i) => (
                <svg
                  key={i}
                  width="20"
                  height="20"
                  fill={i < testimonial.rating ? "currentColor" : "none"}
                  stroke="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M234.5,114.38l-45.1,39.36..." />
                </svg>
              ))}
            </div>
            <p className="text-black text-base">{testimonial.comment}</p>
            <div className="flex gap-4 text-gray-500">
              <button className="flex items-center gap-1">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M234,80.12A24,24,0,0,0..." />
                </svg>
                <span>{testimonial.likes}</span>
              </button>
              <button className="flex items-center gap-1">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M239.82,157l-12-96A24,24,0,0,0..." />
                </svg>
                <span>{testimonial.dislikes}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
