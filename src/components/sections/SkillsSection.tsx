"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { skills } from "@/content/skills";
import {
  FiDatabase,
  FiCode,
  FiLink,
  FiCpu,
  FiMonitor,
  FiArrowRight,
} from "react-icons/fi";

const categoryIcons = {
  "1С:Предприятие": FiMonitor,
  "Базы данных": FiDatabase,
  Программирование: FiCode,
  "Интеграции и API": FiLink,
  "ИИ и инновации": FiCpu,
};

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-neutral-100" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="flex justify-center items-center gap-4 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="w-2 h-2 bg-primary-500 rounded-full" />
            <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm">
              Технологии и навыки
            </span>
            <div className="w-2 h-2 bg-primary-500 rounded-full" />
          </motion.div>

          <motion.h2
            className="font-display text-5xl md:text-7xl font-bold mb-4 md:mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="text-neutral-800">Экспертиза</span>
            <br />
            <span className="gradient-text relative">
              в действии
              <motion.div
                className="absolute -bottom-1 md:-bottom-2 left-0 h-1 bg-gradient-primary rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : { width: 0 }}
                transition={{ delay: 1.2, duration: 1 }}
              />
            </span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed px-4 md:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Современные технологии и проверенные решения для автоматизации
            бизнес-процессов
          </motion.p>
        </motion.div>

        <div className="mb-20">
          {skills.categories.map((category, categoryIndex) => {
            const IconComponent =
              categoryIcons[category.name as keyof typeof categoryIcons];
            const isLeft = categoryIndex % 2 === 0;

            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: isLeft ? -100 : 100 }
                }
                transition={{ delay: categoryIndex * 0.2 + 0.8, duration: 0.8 }}
                className={`mb-16 last:mb-0 ${
                  isLeft ? "mr-auto" : "ml-auto"
                } max-w-4xl`}
              >
                <div
                  className={`flex items-center gap-6 mb-8 ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  {!isLeft && (
                    <div className="text-right">
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-neutral-800">
                        {category.name}
                      </h3>
                      <p className="text-neutral-600 mt-1">
                        {category.items.length} технологий в арсенале
                      </p>
                    </div>
                  )}
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-3xl flex items-center justify-center shadow-soft"
                    whileHover={{ rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IconComponent className="text-white text-2xl" />
                  </motion.div>
                  {isLeft && (
                    <div>
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-neutral-800">
                        {category.name}
                      </h3>
                      <p className="text-neutral-600 mt-1">
                        {category.items.length} технологий в арсенале
                      </p>
                    </div>
                  )}
                </div>

                <div
                  className={`flex flex-wrap gap-3 ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
                      }
                      transition={{
                        delay: categoryIndex * 0.2 + itemIndex * 0.1 + 1,
                        duration: 0.5,
                        type: "spring",
                        bounce: 0.4,
                      }}
                      className="cursor-pointer"
                    >
                      <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 border border-neutral-200/60 shadow-sm hover:shadow-md hover:border-primary-300/60 transition-all duration-300">
                        <div className="flex items-center gap-2">
                          <div className="flex gap-1">
                            {[...Array(4)].map((_, i) => {
                              const skillLevel =
                                itemIndex % 5 === 0
                                  ? 4
                                  : itemIndex % 3 === 0
                                  ? 3
                                  : itemIndex % 2 === 0
                                  ? 3
                                  : 2;

                              return (
                                <div
                                  key={i}
                                  className={`w-1.5 h-1.5 rounded-full ${
                                    i < skillLevel
                                      ? "bg-primary-500"
                                      : "bg-neutral-300"
                                  }`}
                                />
                              );
                            })}
                          </div>
                          <span className="text-neutral-700 font-medium hover:text-neutral-900 transition-colors duration-300">
                            {item}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {categoryIndex < skills.categories.length - 1 && (
                  <motion.div
                    className="mt-12 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{
                      delay: categoryIndex * 0.2 + 1.5,
                      duration: 0.8,
                    }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
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
