// src/components/Header.tsx
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 px-4 md:px-10 py-3">
      <div className="flex items-center gap-4 text-black">
        <div className="w-6 h-6">
          {/* SVG Logo */}
          <svg viewBox="0 0 48 48" fill="none">
            <path
              d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <h2 className="text-lg font-bold tracking-tight">Panda Mystery</h2>
      </div>
      <div className="flex flex-1 justify-end gap-4 md:gap-8">
        <label className="flex items-center w-full max-w-xs">
          <div className="flex w-full items-center bg-gray-200 rounded-xl">
            <div className="p-2 pl-4">
              {/* Search Icon */}
              <svg
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
              </svg>
            </div>
            <input
              style={{ boxShadow: "none" }}
              placeholder="Search"
              className="w-full bg-gray-200 shadow-none border-none text-black placeholder-gray-500 rounded-xl py-2 px-2 outline-none"
            />
          </div>
        </label>
        <button className="flex items-center bg-gray-200 w-[40px] justify-center text-black rounded-xl h-10 px-2">
          {/* Shopping Cart Icon */}
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
            <path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
