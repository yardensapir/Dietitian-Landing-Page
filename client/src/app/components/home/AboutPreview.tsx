'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import yafitImage from '../../../../public/assets/Yafit.png';
const AboutPreview = () => {
  return (
    <section className="py-20 bg-white" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src={yafitImage}
                alt="יפית קרופניק - דיאטנית קלינית"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/30 to-transparent"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 top-10 -right-10 w-64 h-64 bg-teal-100 rounded-full blur-3xl opacity-20"></div>
            <div className="hidden lg:block absolute -bottom-8 -left-8 w-40 h-40 bg-orange-100 rounded-full"></div>
          </motion.div>
          
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">קצת עליי - יפית קרופניק</h2>
            
            <div className="space-y-4 text-gray-700">
              <p>
                כדיאטנית קלינית עם ניסיון של למעלה מ-10 שנים, פיתחתי גישה הוליסטית לתזונה שמתמקדת לא רק במה שאנחנו אוכלים, אלא גם באיך ולמה.
              </p>
              
              <p>
                אני מאמינה שתזונה נכונה היא המפתח לאיזון בחיים, ושהדרך לשינוי אמיתי היא דרך גישה מותאמת אישית, ללא דיאטות קיצוניות וללא הגבלות מיותרות.
              </p>
              
              <p>
                בעלת תואר ראשון במדעי התזונה מהאוניברסיטה העברית, וחברה באיגוד הדיאטנים בישראל. מומחית בטיפול בהפרעות אכילה, תזונה ספורטיבית ותזונה קלינית.
              </p>
            </div>
            
            <Link href="/about" className="inline-flex items-center gap-2 text-teal-600 font-medium hover:text-teal-700 transition-colors">
              למידע נוסף
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;