import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <motion.img
        src="/brain-tech.png"
        alt="Pyronis Brain"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="w-48 h-48 mb-8"
      />

      <motion.h1
        className="text-4xl font-bold text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Pyronis AIOS
      </motion.h1>

      <motion.p
        className="mt-4 text-lg text-center max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        The First Token-Native Operating System for Human Connection.
      </motion.p>

      <motion.div
        className="mt-10 space-y-4 text-center"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.5,
            },
          },
        }}
      >
        {[
          "PyroCortex isn’t an app — it is the OS.",
          "AIOS: Built for minds, not apps.",
          "Forget prompt routing. Start cognitive routing.",
          "Pyronis is not an agent. It is cognition.",
          "No files. No configs. No CLI. No wrappers. No agents. No APIs. No prompts. No dashboards. No apps. Just cognition."
        ].map((slogan, idx) => (
          <motion.div
            key={idx}
            className="text-xl text-orange-400 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + idx * 0.4, duration: 1 }}
          >
            {slogan}
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}