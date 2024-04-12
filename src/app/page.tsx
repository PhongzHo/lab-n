'use client'
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 }
        }}
        className="text-2xl"
      >
        OCONTEN
        <div className="w-full h-[400px] bg-red-300"></div>
        <div className="w-full h-[400px] bg-red-200"></div>
        <div className="w-full h-[400px] bg-red-300"></div>
        <div className="w-full h-[400px] bg-red-200"></div>
      </motion.div>
    </div>
  );
}
