"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { personalInfo } from "@/content/personal";
import {
  FiUser,
  FiTarget,
  FiBookOpen,
  FiHeart,
  FiCpu,
  FiLayers,
  FiTrendingUp,
  FiAward,
  FiStar,
  FiClock,
  FiPlay,
  FiPause,
} from "react-icons/fi";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isPlaying, setIsPlaying] = useState(true);

  const journeyCards = [
    {
      year: "2021",
      title: "Начало пути",
      description: "Первые шаги в мире автоматизации",
      icon: FiPlay,
      color: "from-emerald-400 to-emerald-600",
      delay: 0.2,
    },
    {
      year: "2022",
      title: "1С Экспертиза",
      description: "Углубленное изучение платформы",
      icon: FiCpu,
      color: "from-blue-400 to-blue-600",
      delay: 0.4,
    },
    {
      year: "2023",
      title: "ИИ Интеграции",
      description: "Внедрение AI в бизнес-процессы",
      icon: FiLayers,
      color: "from-purple-400 to-purple-600",
      delay: 0.6,
    },
    {
      year: "2025",
      title: "Полная экспертиза",
      description: "Комплексные решения для бизнеса",
      icon: FiAward,
      color: "from-orange-400 to-orange-600",
      delay: 0.8,
    },
  ];

  const stats = [
    { value: "3+", label: "Лет опыта", icon: FiClock },
    { value: "100%", label: "Качество", icon: FiStar },
    { value: "24/7", label: "Поддержка", icon: FiHeart },
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-neutral-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-24"
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
              Мой путь в IT
            </span>
            <div className="w-2 h-2 bg-primary-500 rounded-full" />
          </motion.div>

          <motion.h2
            className="font-display text-5xl md:text-7xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="text-neutral-800">История</span>
            <br />
            <span className="gradient-text relative">
              развития
              <motion.div
                className="absolute -bottom-2 left-0 h-1 bg-gradient-primary rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : { width: 0 }}
                transition={{ delay: 1.2, duration: 1 }}
              />
            </span>
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-16 md:mb-20 px-4 md:px-0"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 group-hover:shadow-elegant border border-neutral-200/50 transition-all duration-500">
                <stat.icon className="text-3xl md:text-4xl text-primary-500 mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300" />
                <motion.div
                  className="font-display text-3xl md:text-4xl font-bold text-neutral-800 mb-1 md:mb-2"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{
                    delay: 1 + index * 0.2,
                    duration: 0.8,
                    type: "spring",
                    bounce: 0.4,
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-neutral-600 font-medium text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <h3 className="font-display text-2xl md:text-4xl font-bold text-center text-neutral-800 mb-12 md:mb-16 px-4 md:px-0">
            Этапы профессионального роста
          </h3>

          <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-0.5 w-1 h-full bg-gradient-to-b from-primary-200 via-primary-400 to-primary-200 rounded-full" />

          <div className="space-y-8 md:space-y-16 px-4 md:px-0">
            {journeyCards.map((card, index) => (
              <motion.div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }
                }
                transition={{ delay: 1.2 + card.delay, duration: 0.8 }}
              >
                <div className="md:hidden w-full pl-16">
                  <motion.div
                    className="card-elegant group cursor-pointer"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`w-10 h-10 bg-gradient-to-br ${card.color} rounded-xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform duration-300`}
                      >
                        <card.icon className="text-white text-sm" />
                      </div>
                      <div>
                        <div className="text-lg font-bold text-primary-600">
                          {card.year}
                        </div>
                        <div className="font-display text-base font-semibold text-neutral-800">
                          {card.title}
                        </div>
                      </div>
                    </div>
                    <p className="text-neutral-600 leading-relaxed text-sm">
                      {card.description}
                    </p>
                  </motion.div>
                </div>

                <div className="hidden md:block w-5/12">
                  <div
                    className={`${
                      index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                    }`}
                  >
                    <motion.div
                      className="card-elegant group cursor-pointer"
                      whileHover={{ scale: 1.05, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div
                        className={`flex items-center gap-4 mb-4 ${
                          index % 2 === 0 ? "justify-end" : "justify-start"
                        }`}
                      >
                        <div
                          className={`w-14 h-14 bg-gradient-to-br ${card.color} rounded-2xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform duration-300`}
                        >
                          <card.icon className="text-white text-xl" />
                        </div>
                        <div
                          className={`${
                            index % 2 === 0 ? "text-right" : "text-left"
                          }`}
                        >
                          <div className="text-2xl font-bold text-primary-600">
                            {card.year}
                          </div>
                          <div className="font-display text-xl font-semibold text-neutral-800">
                            {card.title}
                          </div>
                        </div>
                      </div>
                      <p className="text-neutral-600 leading-relaxed">
                        {card.description}
                      </p>
                    </motion.div>
                  </div>
                </div>

                <div className="absolute left-4 md:relative md:left-auto md:w-2/12 md:flex md:justify-center">
                  <motion.div
                    className="relative w-4 h-4 md:w-6 md:h-6 bg-primary-500 rounded-full shadow-soft"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 1.4 + card.delay, duration: 0.6 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-primary-400 rounded-full"
                      animate={
                        isPlaying
                          ? {
                              scale: [1, 2, 1],
                              opacity: [1, 0, 1],
                            }
                          : {}
                      }
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: card.delay,
                      }}
                    />
                  </motion.div>
                </div>

                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="glass-effect rounded-3xl p-12 md:p-16 relative overflow-hidden shadow-elegant">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-primary rounded-t-3xl" />

                <div className="absolute top-8 left-8 text-primary-200 text-8xl font-serif leading-none">
                  "
                </div>
                <div className="absolute bottom-8 right-8 text-primary-200 text-8xl font-serif leading-none rotate-180">
                  "
                </div>

                <div className="relative z-10 text-center">
                  <blockquote className="font-display text-2xl md:text-4xl font-light text-neutral-700 mb-8 leading-relaxed relative">
                    <span className="relative z-10">{personalInfo.bio}</span>
                  </blockquote>

                  <div className="flex items-center justify-center gap-4">
                    <div className="w-16 h-0.5 bg-gradient-primary rounded-full" />
                    <div className="text-primary-600 font-semibold text-lg tracking-wide">
                      {personalInfo.name}
                    </div>
                    <div className="w-16 h-0.5 bg-gradient-primary rounded-full" />
                  </div>

                  <div className="mt-6 text-neutral-500 font-medium">
                    Специалист по автоматизации бизнес-процессов
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
