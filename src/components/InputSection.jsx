import React from "react";
import { motion } from "framer-motion";

const InputSection = ({ children }) => {
  return (
    <div
      id="InputSection"
      className="bg-violet-900 text-gray-50 h-screen flex flex-col flex-1 justify-between items-center "
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 50 }}
        transition={{ duration: 0.5 }}
        className="
        md:mt-5 text-5xl"
      >
        First, we need to know...
      </motion.h2>
      {children}
    </div>
  );
};

export default InputSection;
