'use client'
import React from 'react';
import { motion } from "framer-motion";
import { Apple, Dumbbell, Heart, Leaf } from 'lucide-react';
import Card from '../card/Card';

const Benefits = () => {
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 }
    }
  };

  const services = [
    {
      Icon: Apple,
      title: "ירידה במשקל",
      description: "תוכנית תזונה מותאמת אישית לירידה במשקל בריאה ומאוזנת"
    },
    {
      Icon: Dumbbell,
      title: "תזונת ספורט",
      description: "תזונה מותאמת לספורטאים להשגת ביצועים מיטביים ושיפור היכולות"
    },
    {
      Icon: Heart,
      title: "טיפול באכילה רגשית",
      description: "פיתוח מערכת יחסים בריאה עם אוכל ורגשות בליווי מקצועי"
    },
    {
      Icon: Leaf,
      title: "תזונה צמחונית וטבעונית",
      description: "תכנון תפריט צמחוני/טבעוני מאוזן ועשיר בכל אבות המזון"
    }
  ];

  return (
    <section className="py-20 bg-orange-50" dir="rtl">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            תחומי הטיפול בקליניקה
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            בקליניקה שלי אני מתמחה במגוון תחומי תזונה ובריאות כדי להתאים לכל אחד את הטיפול המתאים לו.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <Card
              key={index}
              Icon={service.Icon}  // Note the capital I
              title={service.title}
              description={service.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;