'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Plus, Minus } from 'lucide-react';

const FAQPreview = () => {
  const faqs = [
    {
      id: 1,
      question: "כמה זמן יקח לי לראות תוצאות?",
      answer: "התוצאות תלויות במטרות האישיות, נקודת ההתחלה ומידת ההקפדה על התוכנית. באופן כללי, שינויים ראשוניים בהרגשה הכללית ורמות האנרגיה ניתן להרגיש כבר אחרי 1-2 שבועות. שינויים משמעותיים בהרכב גוף ומשקל לרוב מורגשים לאחר 4-8 שבועות של עבודה עקבית."
    },
    {
      id: 2,
      question: "האם אצטרך לוותר על כל המאכלים שאני אוהב/ת?",
      answer: "בהחלט שלא! הגישה שלי לתזונה מבוססת על איזון ולא על הגבלות קיצוניות. המטרה היא ליצור תפריט מאוזן שכולל גם את המאכלים האהובים עליך, אך בכמויות ובתדירות מתאימות. אנחנו נעבוד יחד על יצירת תפריט שיתאים לסגנון החיים שלך ויכלול מגוון רחב של מזונות."
    },
    {
      id: 3,
      question: "כמה פגישות אני צריך/ה?",
      answer: "מספר הפגישות תלוי במטרות האישיות שלך ובמצב ההתחלתי. בדרך כלל, תהליך מלא כולל פגישת היכרות ואבחון, 3-4 פגישות מעקב במהלך 2-3 החודשים הראשונים, ולאחר מכן פגישות תחזוקה לפי הצורך. אנחנו נתאים את התדירות לפי ההתקדמות והצרכים האישיים שלך."
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index:any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white" dir="rtl">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            שאלות נפוצות
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            תשובות לשאלות הנפוצות ביותר שאני מקבלת על תהליך הטיפול התזונתי
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full text-right p-6 rounded-xl flex justify-between items-center transition-colors ${
                  openIndex === index
                    ? "bg-white shadow-md"
                    : "bg-white/50 hover:bg-white/80"
                }`}
              >
                <span className="font-medium text-lg text-gray-800">{faq.question}</span>
                <span className="shrink-0 ml-4">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-teal-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-600" />
                  )}
                </span>
              </button>
              
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white px-6 pb-6 pt-2 rounded-b-xl -mt-2"
                >
                  <p className="text-gray-700">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Link href="/faq" className="inline-flex items-center gap-2 text-teal-600 font-medium hover:text-teal-700 transition-colors">
              לכל השאלות הנפוצות
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQPreview;