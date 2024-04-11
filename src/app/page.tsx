'use client'
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-row w-full h-full relative">
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
      Conntent Hero
      </motion.div>
    </div>
  );
}
