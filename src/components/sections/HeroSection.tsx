"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/content/personal";
import { scrollToSection } from "@/lib/utils";
import { FiCode, FiZap, FiTrendingUp, FiStar } from "react-icons/fi";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 md:pt-20"
      style={{
        background:
          "linear-gradient(135deg, #f0f7ff 0%, #ffffff 25%, #fafbfc 50%, #e0efff 100%)",
      }}
    >
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, #0c8ce9 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-primary-200 shadow-subtle"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <FiStar className="text-primary-500 text-lg" />
            <span className="text-neutral-700 font-medium">
              Добро пожаловать в мое портфолио
            </span>
          </motion.div>

          <motion.h1
            className="font-display text-6xl md:text-8xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-neutral-600 mb-3 md:mb-4 font-light leading-relaxed px-4 md:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {personalInfo.title}
          </motion.p>

          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-600 mb-8 md:mb-12 font-medium px-4 md:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {personalInfo.subtitle}
          </motion.p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16 max-w-4xl mx-auto px-4 md:px-0"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {[
              {
                icon: FiCode,
                title: "1С Эксперт",
                desc: "Глубокие знания платформы",
              },
              {
                icon: FiZap,
                title: "ИИ Интеграции",
                desc: "Современные технологии",
              },
              {
                icon: FiTrendingUp,
                title: "Автоматизация",
                desc: "Эффективные решения",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="glass-effect rounded-xl md:rounded-2xl p-4 md:p-6 group hover:shadow-soft transition-all duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
              >
                <item.icon className="text-2xl md:text-3xl text-primary-500 mb-3 md:mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold text-neutral-800 mb-1 md:mb-2 text-sm md:text-base">
                  {item.title}
                </h3>
                <p className="text-neutral-600 text-xs md:text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.button
            onClick={() => scrollToSection("#about")}
            className="btn-elegant inline-flex items-center gap-3 text-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Узнать больше
            <motion.svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ y: [0, 4, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
                ease: "easeInOut",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </motion.svg>
          </motion.button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-24 md:h-32"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-neutral-50"
          />
        </svg>
      </div>
    </section>
  );
}
