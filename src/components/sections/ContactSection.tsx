"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo } from "@/content/personal";
import {
  FiSend,
  FiGithub,
  FiMessageCircle,
  FiStar,
  FiArrowRight,
} from "react-icons/fi";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const contactMethods = [
    {
      icon: FiSend,
      title: "Telegram",
      subtitle: personalInfo.contacts.telegram,
      href: personalInfo.contacts.telegramLink,
      color: "from-blue-600 to-blue-700",
      description: "Самый быстрый способ связи",
    },
    {
      icon: FiGithub,
      title: "GitHub",
      subtitle: personalInfo.contacts.github,
      href: personalInfo.contacts.githubLink,
      color: "from-neutral-600 to-neutral-700",
      description: "Посмотреть код и проекты",
    },
  ];

  return (
    <section id="contact" className="relative pt-32 pb-16 overflow-hidden">
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
            className="flex justify-center items-center gap-4 mb-6 md:mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="w-2 h-2 bg-primary-500 rounded-full" />
            <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm">
              Связь со мной
            </span>
            <div className="w-2 h-2 bg-primary-500 rounded-full" />
          </motion.div>

          <motion.h2
            className="font-display text-5xl md:text-7xl font-bold mb-4 md:mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="text-neutral-800">Давайте</span>
            <br />
            <span className="gradient-text relative">
              создадим вместе
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
            Обсудим ваши задачи по автоматизации, интеграции 1С с внешними
            системами или внедрению ИИ в бизнес-процессы
          </motion.p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 mb-4">
                <FiSend className="text-primary-600 text-xl" />
                <h3 className="text-2xl font-bold text-neutral-800">
                  Способы связи
                </h3>
              </div>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                Выберите удобный способ для обсуждения вашего проекта
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group glass-card p-6 md:p-8 text-center hover:shadow-soft border border-neutral-200/60 hover:border-primary-300/60 rounded-2xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                >
                  <div
                    className={`w-12 md:w-16 h-12 md:h-16 mx-auto mb-3 md:mb-4 rounded-xl md:rounded-2xl bg-gradient-to-r ${method.color} flex items-center justify-center group-hover:shadow-soft transition-all duration-300`}
                  >
                    <method.icon className="text-white text-xl md:text-2xl" />
                  </div>
                  <h4 className="font-bold text-neutral-800 text-lg md:text-xl mb-2 group-hover:text-primary-600 transition-colors duration-300">
                    {method.title}
                  </h4>
                  <p className="text-neutral-600 font-medium mb-2 text-sm md:text-base">
                    {method.subtitle}
                  </p>
                  <p className="text-neutral-500 text-xs md:text-sm mb-3 md:mb-4">
                    {method.description}
                  </p>
                  <div className="flex items-center justify-center mt-4 text-primary-600 group-hover:translate-x-1 transition-transform duration-300">
                    <span className="text-sm font-medium mr-2">
                      {method.title === "GitHub" ? "Изучить" : "Связаться"}
                    </span>
                    <FiArrowRight />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="glass-card p-8 md:p-12 text-center bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl relative overflow-hidden"
          >
            <div className="relative z-10 max-w-2xl mx-auto">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 1.0, duration: 0.6 }}
                className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4"
              >
                Готовы воплотить идеи в жизнь?
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 1.1, duration: 0.6 }}
                className="text-neutral-600 text-lg mb-8 leading-relaxed"
              >
                Расскажите о своём проекте, и мы найдём идеальное решение
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 1.2, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <motion.a
                  href={personalInfo.contacts.telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium rounded-lg shadow-soft hover:shadow-md hover:shadow-primary-500/20 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FiSend className="mr-2 text-base" />
                  Написать в Telegram
                </motion.a>

                <div className="flex items-center gap-2 text-neutral-600 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Отвечу в течение часа</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="text-center mt-12 pt-8 border-t border-neutral-300"
        >
          <p className="text-neutral-600 text-lg">
            © 2025 Полина Варфоломеева. Автоматизация бизнес-процессов и 1С
            разработка.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
