"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { faq } from "@/content/faq";
import { FiPlus, FiMinus, FiArrowRight, FiHelpCircle } from "react-icons/fi";

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-neutral-50" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-20"
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
              Часто задаваемые вопросы
            </span>
            <div className="w-2 h-2 bg-primary-500 rounded-full" />
          </motion.div>

          <motion.h2
            className="font-display text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="text-neutral-800">Вопросы</span>
            <br />
            <span className="gradient-text relative">
              и ответы
              <motion.div
                className="absolute -bottom-2 left-0 h-1 bg-gradient-primary rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : { width: 0 }}
                transition={{ delay: 1.2, duration: 1 }}
              />
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Ответы на самые популярные вопросы о моей работе
          </motion.p>
        </motion.div>

        <div className="space-y-6 mb-20">
          {faq.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.1 + 0.8, duration: 0.6 }}
              className="group"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-neutral-200/50 overflow-hidden shadow-sm hover:shadow-elegant transition-all duration-500">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/60 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform duration-300">
                      <FiHelpCircle className="text-white text-xl" />
                    </div>
                    <h3 className="font-display text-lg md:text-xl font-semibold text-neutral-800 pr-4 group-hover:text-primary-600 transition-colors duration-300">
                      {item.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300">
                      {openIndex === index ? (
                        <FiMinus className="text-primary-600 text-lg" />
                      ) : (
                        <FiPlus className="text-primary-600 text-lg" />
                      )}
                    </div>
                  </motion.div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent mb-6"></div>
                    <p className="text-neutral-600 leading-relaxed text-lg pl-16">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center"
        >
          <div className="relative">
            <div className="glass-effect rounded-3xl p-12 md:p-16 relative overflow-hidden shadow-elegant">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-primary rounded-t-3xl" />

              <div className="relative z-10">
                <h3 className="font-display text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
                  Не нашли ответ на свой вопрос?
                </h3>
                <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Напишите мне, и я с удовольствием отвечу!
                </p>

                <motion.button
                  onClick={() =>
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="group inline-flex items-center gap-3 bg-gradient-primary text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-soft transition-all duration-300 hover:shadow-elegant"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Задать вопрос
                  <FiArrowRight className="text-xl group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>
            </div>
          </div>
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
