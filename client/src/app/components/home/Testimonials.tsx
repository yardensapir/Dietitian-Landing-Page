'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronRight, ChevronLeft } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "רונית לוי",
      text: "המפגשים עם יפית שינו את כל הגישה שלי לאוכל. למדתי להקשיב לגוף שלי ולאכול באופן מאוזן בלי הגבלות מיותרות. הרגשתי שהיא באמת מקשיבה לי ובונה תוכנית שמתאימה לאורח החיים שלי. ירדתי במשקל והרגשתי הרבה יותר טוב עם עצמי.",
      rating: 5,
      image: "/assets/testimonial-1.jpg"
    },
    {
      id: 2,
      name: "דן כהן",
      text: "כספורטאי חובב, הייתי זקוק לתזונה שתתמוך באימונים שלי. יפית עזרה לי לבנות תפריט שנותן לי אנרגיה ותומך בבניית שריר. ההמלצות שלה היו מעשיות וקלות ליישום, והתוצאות היו מדהימות. ממליץ בחום!",
      rating: 5,
      image: "/assets/testimonial-2.jpg"
    },
    {
      id: 3,
      name: "מיכל אברהם",
      text: "אחרי שנים של דיאטות הרזיה לא מוצלחות, יפית לימדה אותי על תזונה נכונה והקשר בין אוכל לרגשות. תוך כמה חודשים השגתי תוצאות שלא הצלחתי להשיג שנים. הגישה שלה מאוד מקצועית ואנושית, ולא מתמקדת רק במספר על המשקל.",
      rating: 5,
      image: "/assets/testimonial-3.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-teal-50" dir="rtl">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            מה אומרים המטופלים שלי
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            הסיפורים האמיתיים של אנשים שהצליחו לשנות את חייהם באמצעות תוכניות התזונה המותאמות אישית
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <motion.div
            key={testimonials[currentIndex].id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-md"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 bg-teal-100">
                {/* You can use actual images here */}
                <div className="w-full h-full bg-teal-200 flex items-center justify-center text-teal-600 font-bold">
                  {testimonials[currentIndex].name.charAt(0)}
                </div>
              </div>
              
              <div className="space-y-4 flex-1">
                <div className="flex items-center mb-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-700 italic">"{testimonials[currentIndex].text}"</p>
                
                <div className="font-medium text-gray-800">
                  {testimonials[currentIndex].name}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex justify-center mt-6 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-teal-50 hover:text-teal-600 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`block w-2 h-2 rounded-full ${
                    index === currentIndex ? "bg-teal-600" : "bg-gray-300"
                  }`}
                ></span>
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-teal-50 hover:text-teal-600 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;