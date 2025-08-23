import React from "react";
import { motion } from "framer-motion";

const Loader = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur">
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"
    />
  </div>
);

export default Loader;
