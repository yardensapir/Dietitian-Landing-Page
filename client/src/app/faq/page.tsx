'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const faqCategories = [
    {
      category: "שאלות כלליות על תהליך הטיפול",
      faqs: [
        {
          question: "כמה זמן יקח לי לראות תוצאות?",
          answer: "התוצאות תלויות במטרות האישיות, נקודת ההתחלה ומידת ההקפדה על התוכנית. באופן כללי, שינויים ראשוניים בהרגשה הכללית ורמות האנרגיה ניתן להרגיש כבר אחרי 1-2 שבועות. שינויים משמעותיים בהרכב גוף ומשקל לרוב מורגשים לאחר 4-8 שבועות של עבודה עקבית."
        },
        {
          question: "האם אצטרך לוותר על כל המאכלים שאני אוהב/ת?",
          answer: "בהחלט שלא! הגישה שלי לתזונה מבוססת על איזון ולא על הגבלות קיצוניות. המטרה היא ליצור תפריט מאוזן שכולל גם את המאכלים האהובים עליך, אך בכמויות ובתדירות מתאימות. אנחנו נעבוד יחד על יצירת תפריט שיתאים לסגנון החיים שלך ויכלול מגוון רחב של מזונות."
        },
        {
          question: "כמה פגישות אני צריך/ה?",
          answer: "מספר הפגישות תלוי במטרות האישיות שלך ובמצב ההתחלתי. בדרך כלל, תהליך מלא כולל פגישת היכרות ואבחון, 3-4 פגישות מעקב במהלך 2-3 החודשים הראשונים, ולאחר מכן פגישות תחזוקה לפי הצורך. אנחנו נתאים את התדירות לפי ההתקדמות והצרכים האישיים שלך."
        }
      ]
    },
    {
      category: "היבטים תזונתיים ספציפיים",
      faqs: [
        {
          question: "האם הטיפול מתאים לכל סוגי הדיאטות?",
          answer: "הגישה שלנו היא הוליסטית ומותאמת אישית. בין אם אתה מחפש ירידה במשקל, תזונת ספורט, טיפול באכילה רגשית או תזונה צמחונית, אנחנו מעצבים תוכנית תזונתית שמותאמת במדויק לצרכים האישיים שלך. כל תוכנית נבנית תוך הבנה עמוקה של סגנון החיים, המטרות והמגבלות האישיות."
        },
        {
          question: "מה קורה אם יש לי צרכים תזונתיים מיוחדים?",
          answer: "כל תוכנית תזונתית מותאמת אישית ומתחשבת בצרכים הייחודיים שלך. נעשה אבחון מקיף שכולל התייחסות למצבים רפואיים, העדפות אישיות, סגנון חיים ומטרות תזונתיות. אם יש לך צרכים מיוחדים כמו רגישויות למזונות, מצבים רפואיים או דרישות תזונתיות ספציפיות, נבנה תוכנית שתענה במדויק על הצרכים שלך."
        }
      ]
    },
    {
      category: "היבטים מעשיים ותקשורת",
      faqs: [
        {
          question: "האם ניתן לקבל ליווי מרחוק?",
          answer: "כן! אנחנו מציעים מגוון אפשרויות ליווי, כולל פגישות פרונטליות בקליניקה בתל אביב וכן פגישות מקוונות דרך וידאו. הרעיון הוא להנגיש את השירות ולאפשר לכם ליווי מקצועי ומלא בצורה הנוחה ביותר עבורכם."
        },
        {
          question: "מה עלות התהליך?",
          answer: "העלות משתנה בהתאם לחבילת הליווי שתבחרו. אנחנו מציעים מספר חבילות גמישות המותאמות לצרכים האישיים שלכם. מוזמנים לתאם פגישת היכרות ללא עלות כדי לברר את האפשרויות המתאימות ביותר עבורכם."
        }
      ]
    }
  ];

  const toggleFAQ = (index: number, categoryIndex: number) => {
    const key = `${categoryIndex}-${index}`;
    setOpenIndex(openIndex === key ? null : key);
  };

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
            שאלות נפוצות
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            תשובות לשאלות הנפוצות ביותר שאני מקבלת על תהליך הטיפול התזונתי
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="border-b border-gray-200 pb-4"
                  >
                    <button
                      onClick={() => toggleFAQ(index, categoryIndex)}
                      className="w-full text-right flex justify-between items-center focus:outline-none"
                    >
                      <span className="text-lg font-medium text-gray-800">
                        {faq.question}
                      </span>
                      {openIndex === `${categoryIndex}-${index}` ? (
                        <Minus className="w-6 h-6 text-teal-600" />
                      ) : (
                        <Plus className="w-6 h-6 text-gray-600" />
                      )}
                    </button>
                    {openIndex === `${categoryIndex}-${index}` && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 text-gray-700"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      
      </div>
    </section>
  );
};

export default FAQPage;