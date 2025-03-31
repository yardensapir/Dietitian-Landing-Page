'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation'; // ✅ Import useParams
import { motion } from 'framer-motion';
import { Clock, ArrowLeft } from 'lucide-react';

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: "איך לבנות תפריט שבועי מאוזן לכל המשפחה",
    content: `תכנון תפריט שבועי הוא כלי חשוב לניהול תזונה משפחתית.`,
    excerpt: "תכנון תפריט שבועי יכול לחסוך זמן, כסף ולשפר את התזונה.",
    image: "/assets/blog-1.jpg",
    date: "12 במרץ, 2023",
    readTime: "7 דקות קריאה",
    slug: "weekly-meal-plan",
    category: "תזונת משפחה",
    author: "ד״ר יפית קרופניק",
    authorBio: "דיאטנית קלינית ומומחית לתזונת משפחה"
  },
  {
    id: 2,
    title: "5 שגיאות נפוצות בתזונה ספורטיבית ואיך להימנע מהן",
    content: "תוכן המאמר על שגיאות בתזונת ספורט",
    excerpt: "טעויות בתזונה שפוגעות בביצועים. גלו את הטעויות ואיך להימנע מהן.",
    date: "25 בפברואר, 2023",
    readTime: "5 דקות קריאה",
    slug: "sports-nutrition-mistakes",
    category: "תזונת ספורט",
    author: " יפית קרופניק",
    authorBio: "מאמנת כושר ותזונאית ספורט"
  }
];

// Component for when the blog post is not found
const BlogPostNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4" dir="rtl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-teal-600 mb-3">המאמר לא נמצא</h1>
        <p className="text-gray-500 mb-6">מצטערים, המאמר שחיפשת אינו קיים</p>
        <Link href='/blog' className="px-6 py-3 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors inline-block">
          חזרה לבלוג
        </Link>
      </motion.div>
    </div>
  );
};

// Blog post page
const BlogPostPage = () => {
  const params = useParams(); // ✅ Get the params dynamically
  const slug = params?.slug as string; // Ensure it's a string
  
  if (!slug) {
    return <BlogPostNotFound />;
  }

  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <BlogPostNotFound />;
  }

  return (
    <section className="pt-32 pb-20 bg-white" dir="rtl">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              {post.title}
            </h1>
            
            <div className="flex justify-center items-center text-sm text-gray-500 mb-4">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {post.readTime}
              </span>
              <span className="mx-2">•</span>
              <span>{post.category}</span>
            </div>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {post.excerpt}
            </p>
          </div>

          {/* Blog Image */}
          <img src={post.image} alt={post.title} className="w-full h-96 object-cover rounded-lg mb-8" />

          {/* Author Section */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8 flex items-center">
            <div className="w-16 h-16 bg-gray-300 rounded-full ml-4"></div>
            <div>
              <h4 className="text-xl font-bold text-gray-800">{post.author}</h4>
              <p className="text-gray-600">{post.authorBio}</p>
            </div>
          </div>

          {/* Blog Content */}
          <div className="prose max-w-none">
            {post.content.split(/\r?\n/).map((paragraph, index) => (
              paragraph.trim() ? (
                paragraph.startsWith('##') ? (
                  <h2 key={index} className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                    {paragraph.replace('##', '').trim()}
                  </h2>
                ) : paragraph.startsWith('### ') ? (
                  <h3 key={index} className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                    {paragraph.replace('###', '').trim()}
                  </h3>
                ) : (
                  <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                )
              ) : null
            ))}
          </div>

          {/* Navigation */}
          <div className="mt-12 border-t pt-8">
            <Link 
              href="/blog" 
              className="text-teal-600 hover:text-teal-700 flex items-center gap-2 font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              חזרה לבלוג
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPostPage;
