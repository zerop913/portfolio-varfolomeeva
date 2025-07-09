"use client";

import { motion } from "framer-motion";
import { navigation } from "@/content/navigation";
import { scrollToSection } from "@/lib/utils";
import MobileMenu from "@/components/ui/MobileMenu";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/20"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="cursor-pointer group"
            onClick={() => scrollToSection("#hero")}
          >
            <h2 className="font-display text-2xl font-bold gradient-text group-hover:scale-105 transition-transform duration-300">
              Полина Варфоломеева
            </h2>
          </motion.div>

          <div className="hidden md:flex items-center space-x-1">
            {navigation.items.map((item, index) => (
              <motion.button
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                onClick={() => scrollToSection(item.href)}
                className="relative px-5 py-2.5 text-neutral-600 hover:text-neutral-900 transition-all duration-300 font-medium rounded-lg group"
                whileHover={{ y: -1 }}
              >
                <div className="absolute inset-0 bg-neutral-100/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />

                <span className="relative z-10">{item.label}</span>

                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary-500 group-hover:w-4 transition-all duration-300" />
              </motion.button>
            ))}

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              onClick={() => scrollToSection("#contact")}
              className="ml-6 px-5 py-2.5 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-all duration-300"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              Связаться
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="md:hidden"
          >
            <MobileMenu />
          </motion.div>
        </div>
      </nav>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-300 to-transparent opacity-50" />
    </motion.header>
  );
}
