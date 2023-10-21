import React from "react";
import { motion } from "framer-motion";

const InputSection = () => {
  return (
    <div
      id="InputSection"
      className="bg-violet-900 text-gray-50 h-screen flex flex-col items-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 50 }}
        transition={{ duration: 0.5 }}
        className="
        mt-5 text-5xl"
      >
        Tell us more.
      </motion.h2>
    </div>
  );
};

export default InputSection;
