// src/components/ContactSection.tsx
import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center">
      <div className="min-w-[450px]">
        <h2 className="text-black text-[22px] font-bold tracking-tight px-4 pb-3 pt-5">
          Contact Us
        </h2>
        <form className="max-w-md px-4">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-gray-200 border-gray-200 text-black rounded-xl h-14 p-4 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-gray-200 border-gray-200 text-black rounded-xl h-14 p-4 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Message"
              className="w-full bg-gray-200 border-gray-200 text-black rounded-xl h-36 p-4 focus:outline-none"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button className="bg-gray-200 border-gray-200 text-black rounded-xl h-10 px-4 font-bold">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
