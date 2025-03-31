'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Apple, Dumbbell, Heart, Leaf } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

const ServicesDetailsPage = () => {
  const searchParams = useSearchParams();
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      slug: "weight-loss",
      title: "ירידה במשקל",
      Icon: Apple,
      content: [
        "מספיק עם המעגל המתסכל של דיאטות וכישלונות. כל פעם מתחילים מחדש, מלאים תקווה, ובסוף חוזרים לנקודת ההתחלה. אבל מה אם הפעם יהיה אחרת?",
        "אנחנו לא מאמינים בפתרונות קסם או בדרכים קיצוניות. אנחנו מאמינים בשינוי אמיתי שמתחיל מההבנה שכל גוף הוא עולם ומלואו - הייחודי שלך.",
        "תפריט שנבנה במיוחד עבורך, שלוקח בחשבון את סדר היום שלך, את ההעדפות שלך, ואת המטרות האישיות שלך. בואו ניצור יחד תוכנית שתרגיש כמו המשך טבעי של החיים שלך, לא כמו משהו זר ומאיים."
      ]
    },
    {
      slug: "sports-nutrition",
      title: "תזונת ספורט",
      Icon: Dumbbell,
      content: [
        "אתה לא רק מתאמן. אתה יוצר את הגרסה המיטבית של עצמך. אבל האם התזונה שלך באמת תומכת ביעדים שלך?",
        "זה לא רק עניין של כמות קלוריות. זה עניין של איכות, של תזמון, של הבנה מעמיקה של הגוף שלך והצרכים הספציפיים שלו באימונים.",
        "נבנה יחד תוכנית תזונתית שתהפוך כל אימון למשמעותי יותר, כל הישג למרשים יותר. מהזנה לפני אימון ועד שיקום מושלם לאחריו."
      ]
    },
    {
      slug: "emotional-eating",
      title: "טיפול באכילה רגשית",
      Icon: Heart,
      content: [
        "אוכל זה לא רק מזון. לפעמים זה תריס, מחסום, דרך התמודדות. אנחנו יודעים את זה, ללא שיפוטיות וללא האשמה.",
        "כאן לא מדברים על דיאטה. כאן מדברים על חיבור מחדש - חיבור בריא, מכבד ואוהב עם האוכל ועם עצמכם.",
        "נלמד יחד לזהות דפוסים, להבין רגשות, ולפתח כלים אמיתיים שיאפשרו לכם לנהל את חייכם, במקום שהחיים ינהלו אתכם."
      ]
    },
    {
      slug: "vegetarian-vegan",
      title: "תזונה צמחונית וטבעונית",
      Icon: Leaf,
      content: [
        "בחירה בתזונה צמחונית או טבעונית היא יותר מסתם תפריט. זו החלטה ערכית, סביבתית, ולעתים גם בריאותית.",
        "אבל איך עושים את זה נכון? איך מבטיחים שהגוף מקבל את כל מה שהוא צריך? מבלי להתפשר על טעם, על הנאה, על תחושת שובע?",
        "נייצר יחד תוכנית תזונתית שתהיה מאוזנת, עשירה, מגוונת, ושתענה על כל הצרכים התזונתיים שלכם. צמחוני או טבעוני - בלי חסרים, בלי ויתורים."
      ]
    }
  ];

  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      const serviceIndex = services.findIndex(service => service.slug === serviceParam);
      if (serviceIndex !== -1) {
        setActiveService(serviceIndex);
      }
    }
  }, [searchParams]);

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
            תחומי טיפול
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ליווי מקצועי ומותאם אישית בכל תחומי התזונה
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-4 mb-12">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveService(index)}
              className={`
                flex items-center justify-center gap-3 p-4 rounded-xl transition-all duration-300
                ${activeService === index 
                  ? 'bg-teal-600 text-white' 
                  : 'bg-teal-50 text-teal-600 hover:bg-teal-100'}
              `}
            >
              <service.Icon className="w-6 h-6" />
              <span className="font-medium">{service.title}</span>
            </button>
          ))}
        </div>

        <motion.div
          key={activeService}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <div className="flex items-center gap-4 mb-6">
            {React.createElement(services[activeService].Icon, { className: "w-10 h-10 text-teal-600" })}
            <h2 className="text-3xl font-bold text-gray-800">
              {services[activeService].title}
            </h2>
          </div>
          {services[activeService].content.map((paragraph, index) => (
            <p 
              key={index} 
              className={`
                text-gray-700 mb-4 leading-relaxed
                ${paragraph.startsWith('**') && paragraph.endsWith('**') 
                  ? 'font-bold text-teal-600' 
                  : ''}
              `}
              dangerouslySetInnerHTML={{ 
                __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesDetailsPage;