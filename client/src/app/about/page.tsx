'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import yafitImage from '../../../public/assets/Yafit.png';
import { Heart, GraduationCap, BookOpen, Medal } from 'lucide-react';

const AboutPage = () => {
  return (
    <section className="pt-32 pb-20 bg-white" dir="rtl">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            יפית קרופניק - דיאטנית קלינית
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            דרך ייחודית לתזונה מאוזנת, מקצועית ומותאמת אישית
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={yafitImage}
                alt="יפית קרופניק - דיאטנית קלינית"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/50 to-transparent"></div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4 text-gray-700">
              <p>
                כדיאטנית קלינית עם ניסיון של למעלה מ-10 שנים, פיתחתי גישה הוליסטית לתזונה שמתמקדת לא רק במה שאנחנו אוכלים, אלא גם באיך ולמה.
              </p>

              <p>
                המסע שלי בעולם התזונה החל מנקודה אישית - לאחר שחוויתי שינוי משמעותי במשקל ובאורח החיים, הבנתי שתזונה היא הרבה יותר מאשר רק מספרים על משקל.
              </p>

              <p>
                אני מאמינה שתזונה נכונה היא המפתח לאיזון בחיים, ושהדרך לשינוי אמיתי היא דרך גישה מותאמת אישית, ללא דיאטות קיצוניות וללא הגבלות מיותרות.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-teal-50 p-4 rounded-xl">
                <GraduationCap className="w-8 h-8 text-teal-600" />
                <div>
                  <h3 className="font-semibold text-gray-800">השכלה</h3>
                  <p className="text-sm text-gray-600">
                    B.Sc במדעי התזונה
                    <br />
                    האוניברסיטה העברית
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-orange-50 p-4 rounded-xl">
                <Medal className="w-8 h-8 text-orange-600" />
                <div>
                  <h3 className="font-semibold text-gray-800">התמחויות</h3>
                  <p className="text-sm text-gray-600">
                    תזונת ספורט
                    <br />
                    אכילה רגשית
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-sage/10 p-4 rounded-xl">
                <BookOpen className="w-8 h-8 text-sage" />
                <div>
                  <h3 className="font-semibold text-gray-800">חברות מקצועית</h3>
                  <p className="text-sm text-gray-600">
                    חברה באיגוד הדיאטנים
                    <br />
                    בישראל
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-teal-50 p-4 rounded-xl">
                <Heart className="w-8 h-8 text-teal-600" />
                <div>
                  <h3 className="font-semibold text-gray-800">הפילוסופיה שלי</h3>
                  <p className="text-sm text-gray-600">
                    תזונה מאוזנת
                    <br />
                    ללא הגבלות
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;