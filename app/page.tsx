"use client";

import Background from "@/assets/bg.jpg";
import Avatar from "@/components/Avatar";
import ContactInformation from "@/components/ContactInformation";
import Product from "@/components/Product";
import ShopButtons from "@/components/ShopButtons";
import Whatsapp from "@/components/Whatsapp";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat bg-fixed p-4"
      style={{
        backgroundImage: `url(${Background.src})`,
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        backgroundBlendMode: "lighten",
      }}
    >
      {loading && (
        <div className="min-h-screen flex flex-col items-center gap-8 justify-center p-4">
          <div className="loader" />
          Welcome to Kyra Outwear
        </div>
      )}
      {!loading && (
        <div className="bg-[#f4e2d1]/40 backdrop-blur-md rounded-3xl p-6 w-full max-w-md text-center shadow-xl relative">
          {/* Avatar Section */}
          <Avatar />

          {/* Contact Information Section */}
          <ContactInformation />

          {/* Shop Buttons Section */}
          <ShopButtons />

          {/* Product Section */}
          <Product />
        </div>
      )}

      {/* WhatsApp Floating Button */}
      <Whatsapp />
    </div>
  );
}
