'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Phone, ArrowLeft } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-700 text-white" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              מוכנים להתחיל במסע לתזונה מאוזנת יותר?
            </h2>
            
            <p className="text-lg text-teal-100">
              השינוי מתחיל בפגישת ייעוץ ראשונה. יחד, נבנה תוכנית תזונה מותאמת אישית שתעזור לך להשיג את היעדים שלך.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-teal-700 rounded-full font-medium hover:bg-teal-50 transition-colors shadow-lg hover:shadow-xl"
              >
                <Calendar className="w-5 h-5" />
                קביעת פגישת ייעוץ
              </Link>
              
              <Link 
                href="tel:+972501234567"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white border-2 border-white rounded-full font-medium hover:bg-white/10 transition-colors"
              >
                <Phone className="w-5 h-5" />
                צרו קשר בטלפון
              </Link>
            </div>
            
            <div className="mt-8 text-teal-100 text-sm">
              פגישות מתקיימות בקליניקה בתל אביב או בשיחת וידאו
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;