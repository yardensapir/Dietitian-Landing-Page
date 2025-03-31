'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "טלפון",
      details: "054-123-4567",
      link: "tel:+972541234567",
      color: "text-teal-600",
      bgColor: "bg-teal-50"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: "054-123-4567",
      link: "https://wa.me/972541234567",
      color: "text-sage",
      bgColor: "bg-mint"
    },
    {
      icon: Mail,
      title: "אימייל",
      details: "yafit@nutrition.com",
      link: "mailto:yafit@nutrition.com",
      color: "text-teal-600",
      bgColor: "bg-teal-50"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-beige to-white" dir="rtl">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4 mt-6">
            צרו איתי קשר
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            לשאלות וייעוץ מוזמנים לשלוח הודעה וליצור קשר
          </p>
        </motion.div>

        {/* Quick Contact Options */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {contactInfo.map((info, index) => (
            
            <a
              key={index}
              href={info.link}
              className="group block"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center group-hover:scale-105"
              >
                <div className="flex flex-col items-center">
                  <div className={`p-4 ${info.bgColor} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className={`w-8 h-8 ${info.color}`} />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{info.title}</h3>
                  <p className={`${info.color} font-medium`}>{info.details}</p>
                </div>
              </motion.div>
            </a>
          ))}
        </motion.div>

        {/* Contact Form - Now Centered */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              השאירו פרטים לחזרה
            </h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">שם מלא</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 transition-all"
                    placeholder="הכניסו את שמכם"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">טלפון</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 transition-all"
                    placeholder="הכניסו מספר טלפון"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">אימייל</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 transition-all"
                  placeholder="הכניסו כתובת אימייל"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">הודעה</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 transition-all"
                  placeholder="כתבו את הודעתכם כאן..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
              >
                <Send className="w-5 h-5" />
                שליחת הודעה
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;