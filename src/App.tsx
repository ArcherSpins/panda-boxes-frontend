// src/App.tsx
import React, { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProductSection from "./components/ProductSection";
import InsideSection from "./components/InsideSection";
import Testimonials from "./components/Testimonials";
import ContactSection from "./components/ContactSection";
import "swiper/css";

const App: React.FC = () => {
  const [activeProduct, setActiveProduct] = useState("");

  return (
    <div
      className="relative flex min-h-screen flex-col bg-white overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="flex h-full flex-col">
        <Header />
        <main className="px-4 md:px-40 flex flex-1 justify-center py-5">
          <div className="flex flex-col w-full max-w-7xl">
            <HeroSection />
            <ProductSection
              activeProductId={activeProduct}
              onSelect={(id) => setActiveProduct(id)}
            />
            <InsideSection />
            <Testimonials />
            <ContactSection />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
