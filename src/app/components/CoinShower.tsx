// components/CoinShower.tsx
"use client";
// components/CoinShower.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import vault from "../../../public/vault.jpeg";

const CoinShower: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  const coins = Array.from({ length: 10 }, (_, i) => i);

  const handleButtonClick = () => {
    setAnimate(true);
  };

  const generateRandomXPosition = () => Math.random() * 20 - 10; // Random horizontal position between -10 and 10

  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <button
        onClick={handleButtonClick}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        disabled={animate} // Disable button when animation is active
      >
        Drop Coins
      </button>

      <div className="relative w-64 h-64 rounded-md overflow-hidden">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-[60px] z-30">
          <Image src={vault} alt="vault" />
        </div>

        {coins.map((coin) => (
          <motion.div
            key={coin}
            initial={{ y: -100, opacity: 0 }}
            animate={{
              y: animate ? 150 : -100,
              opacity: animate ? 1 : 0,
            }}
            transition={{
              delay: coin * 0.1,
              duration: 1,
              ease: "easeOut",
            }}
            className="absolute top-0 w-4 h-4 bg-yellow-500 rounded-full shadow-lg border border-black"
            style={{
              left: "50%",
              transform: "translateX(-50%)",
              x: generateRandomXPosition(),
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CoinShower;
