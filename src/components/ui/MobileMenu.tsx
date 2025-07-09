"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navigation } from "@/content/navigation";
import { scrollToSection } from "@/lib/utils";
import { FiX, FiMenu } from "react-icons/fi";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-gray-600 hover:text-gray-900 transition-colors duration-200 z-50 relative"
      >
        {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 md:hidden"
            >
              <div className="p-6 pt-24">
                <nav className="space-y-6">
                  {navigation.items.map((item, index) => (
                    <motion.button
                      key={item.href}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      onClick={() => handleNavClick(item.href)}
                      className="block w-full text-left text-2xl font-medium text-gray-900 hover:text-blue-600 transition-colors duration-200 py-3 border-b border-gray-100"
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  className="mt-12 pt-8 border-t border-gray-200"
                >
                  <p className="text-gray-600 text-sm mb-4">
                    Готовы к сотрудничеству?
                  </p>
                  <button
                    onClick={() => handleNavClick("#contact")}
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                  >
                    Связаться со мной
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
