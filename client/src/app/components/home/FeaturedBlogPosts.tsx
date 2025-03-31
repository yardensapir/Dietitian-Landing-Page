'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock } from 'lucide-react';

const FeaturedBlogPosts = () => {
  // This data would come from your PostgreSQL database in production
  const featuredPosts = [
    {
      id: 1,
      title: "איך לבנות תפריט שבועי מאוזן לכל המשפחה",
      excerpt: "תכנון תפריט שבועי יכול לחסוך זמן, כסף ולשפר את התזונה. הנה המדריך המלא לתפריט משפחתי מאוזן ובריא.",
      image: "/assets/blog-1.jpg",
      date: "12 במרץ, 2023",
      readTime: "7 דקות קריאה",
      slug: "weekly-meal-plan"
    },
    {
      id: 2,
      title: "5 שגיאות נפוצות בתזונה ספורטיבית ואיך להימנע מהן",
      excerpt: "ספורטאים רבים עושים טעויות בתזונה שפוגעות בביצועים. גלו את הטעויות הנפוצות ביותר ואיך להימנע מהן.",
      image: "/assets/blog-2.jpg",
      date: "25 בפברואר, 2023",
      readTime: "5 דקות קריאה",
      slug: "sports-nutrition-mistakes"
    },
    {
      id: 3,
      title: "היתרונות הבריאותיים של דיאטה ים תיכונית",
      excerpt: "דיאטה ים תיכונית נחשבת לאחת התזונות הבריאות ביותר. גלו למה ואיך לאמץ אותה בקלות לחיי היומיום.",
      image: "/assets/blog-3.jpg",
      date: "3 בינואר, 2023",
      readTime: "6 דקות קריאה",
      slug: "mediterranean-diet-benefits"
    }
  ];

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-20 bg-orange-50" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              המאמרים האחרונים
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl">
              טיפים והמלצות מקצועיות בנושאי תזונה, בריאות ואורח חיים בריא
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 md:mt-0"
          >
            <Link href="/blog" className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors">
              לכל המאמרים
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredPosts.map((post) => (
            <motion.div key={post.id} variants={item} className="group">
              <Link href={`/blog/${post.slug}`}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative h-52 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-teal-900/10 group-hover:bg-teal-900/20 transition-colors z-10"></div>
                    <div className="absolute inset-0 bg-gray-200">
                      {/* Placeholder for actual images */}
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        תמונת בלוג
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-teal-600 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="text-teal-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      המשך קריאה
                      <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedBlogPosts;