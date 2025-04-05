"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, ArrowLeft } from "lucide-react";
import { getAllBlogPosts } from "../lib/blog-api";
import { BlogPost } from "../types/blog";
import { formatDate } from "../lib/dateUtils";

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadBlogPosts = async () => {
      setIsLoading(true);
      const posts = await getAllBlogPosts();
      console.log(posts);
      setBlogPosts(posts);
      setIsLoading(false);
    };

    loadBlogPosts();
  }, []);

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  if (isLoading) {
    return (
      <section className="pt-32 pb-20 bg-white" dir="rtl">
        <div className="container mx-auto px-4 text-center">
          <p>טוען מאמרים...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-32 pb-20 bg-white" dir="rtl">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            בלוג התזונה
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            טיפים, המלצות וידע מקצועי בנושאי תזונה, בריאות ואורח חיים
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {blogPosts.map((post) => (
            <motion.div key={post.id} variants={item} className="group">
              <Link href={`/blog/${post.slug}`}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative h-52 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-teal-900/10 group-hover:bg-teal-900/20 transition-colors z-10"></div>
                    <div className="absolute inset-0 bg-gray-200">
                      {post.image_url && (
                        <img
                          src={post.image_url}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                      {!post.image_url && (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                          תמונת בלוג
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span>{formatDate(post.date)}</span>
                      <span className="mx-2">•</span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.read_time}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-teal-600 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-4">{post.excerpt}</p>

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

export default BlogPage;
