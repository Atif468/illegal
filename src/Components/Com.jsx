import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function AviatorGame() {
  const [multiplier, setMultiplier] = useState(1);
  const [progress, setProgress] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 2 : 100));
    }, 300);

    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = () => {
    const randomValue = parseFloat((Math.random() * 4 + 1).toFixed(2));
    setMultiplier(randomValue);
    setIsButtonDisabled(true);

    const countdownInterval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(countdownInterval);
          setIsButtonDisabled(false);
          return 15;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white relative">
      <div className="w-80 p-4 rounded-lg text-center relative">
        <div className="text-lg font-semibold mb-2">{timeLeft} seconds</div>
        <div className="w-full h-4 bg-white rounded-full overflow-hidden mb-4">
          <motion.div
            className="h-full bg-gradient-to-r from-red-600 via-red-500 to-white"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 15 }}
          ></motion.div>
        </div>
        <div className="w-52 h-52 flex items-center justify-center bg-purple-950 mx-auto rounded-full border-4 border-red-600 text-3xl font-bold">
          {multiplier}X
        </div>
        <img src="/aviator-logo.png" className="h-24 m-auto" alt="" />
        <div className="text-sm text-gray-400">@VINEET_MINES_BOT</div>
        <button
          className={`mt-4 bg-gradient-to-l from-red-200 via-red-500 to-red-600 text-white py-2 px-6 rounded-full text-lg font-bold shadow-[0_0_15px_rgba(255,0,0,0.8)] shadow-red-500 hover:shadow-[0_0_25px_rgba(255,0,0,1)] transition-all duration-300 ${
            isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleButtonClick}
          disabled={isButtonDisabled}
        >
          GAME HERE
        </button>
      </div>
    </div>
  );
}
