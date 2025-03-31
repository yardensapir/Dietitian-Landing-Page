'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowLeftCircle } from 'lucide-react';
import Image from 'next/image';
import yafitImage from '../../../../public/assets/Yafit.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-orange-50 to-white" dir="rtl">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-teal-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-teal-100 rounded-full blur-3xl opacity-20"></div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 lg:pr-8"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              תזונה בהתאמה <br/> אישית
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-4"
            >
              <p className="text-xl sm:text-2xl font-medium text-gray-800">
                יפית קרופניק - דיאטנית קלינית B.Sc
              </p>
              <p className="text-lg sm:text-xl text-gray-700">
                להפסיק להתעסק באובססיביות עם אוכל, במקום זאת להתחיל להרגיש טוב עם הגוף שלך
              </p>
              <p className="text-lg sm:text-xl text-gray-700">
                השיגו בריאות מיטבית עם אסטרטגיות תזונה מותאמות אישית
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4"
            >
              <button 
                className="group flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-teal-600 text-white text-base sm:text-lg font-medium rounded-full hover:bg-teal-700 transition-all duration-300 hover:shadow-lg"
              >
                <Calendar className="w-5 h-5" />
                <span>קביעת פגישת ייעוץ</span>
                <ArrowLeftCircle className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 group-hover:translate-x-0" />
              </button>
              <button 
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-teal-600 text-base sm:text-lg font-medium rounded-full border-2 border-teal-600 hover:bg-teal-50 transition-all duration-300"
              >
                למידע נוסף
              </button>
            </motion.div>
          </motion.div>

          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-first lg:order-last"
          >
            <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-lg">
              {/* Background gradient for image enhancement */}
              <div className="absolute inset-0 bg-gradient-to-b from-teal-50/50 to-transparent z-10"></div>
              
              {/* Main Image */}
              <Image
                src={yafitImage}
                alt="יפית קרופניק - דיאטנית קלינית" 
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;