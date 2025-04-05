"use client";
import React from "react";
import {
  FileText,
  Calendar,
  Users,
  Eye,
  Edit,
  Trash2,
  Plus,
  Search,
} from "lucide-react";
import Link from "next/link";
import { formatDate } from "@/app/lib/blog-api";


const DashboardPage = () => {
  // This would come from your database in a real app
  const stats = [
    {
      title: "פוסטים",
      count: 12,
      icon: FileText,
      color: "bg-blue-100 text-blue-600",
    },

    {
      title: "צפיות בעמוד",
      count: 1284,
      icon: Eye,
      color: "bg-orange-100 text-orange-600",
    },
  ];

  // Sample blog posts data - this would come from your database in a real app
  const recentPosts = [
    {
      id: 1,
      title: "איך לבנות תפריט שבועי מאוזן לכל המשפחה",
      status: "פורסם",
      publishedDate: "12/03/2023",
      views: 142,
    },
    {
      id: 2,
      title: "5 שגיאות נפוצות בתזונה ספורטיבית",
      status: "פורסם",
      publishedDate: "2023-02-20",
      views: 98,
    },
    {
      id: 3,
      title: "היתרונות הבריאותיים של דיאטה ים תיכונית",
      status: "טיוטה",
      publishedDate: "2023-01-15",
      views: 0,
    },
    {
      id: 4,
      title: "איך להתמודד עם התקפי אכילה רגשית",
      status: "טיוטה",
      publishedDate: "2023-01-10",
      views: 0,
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">לוח בקרה</h1>
        <Link
          href="/admin/blog/new"
          className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          פוסט חדש
        </Link>
      </div>

      {/* Stats cards */}
      <div className="grid text-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-white rounded-xl shadow-sm p-6 flex items-center"
          >
            <div className={`p-4 rounded-full ${stat.color} mr-4`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-gray-500">{stat.title}</p>
              <p className="text-2xl font-bold">{stat.count}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent posts section */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">פוסטים אחרונים</h2>

  
        </div>

        {/* Posts table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  כותרת
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  סטטוס
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  תאריך פרסום
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  צפיות
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  פעולות
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentPosts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {post.title}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        post.status === "פורסם"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {post.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(post.publishedDate)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {post.views}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <button
                        className="text-teal-600 hover:text-teal-800"
                        aria-label="ערוך"
                      >
                        <Edit className="w-5 h-5" />
                      </button>
                      <button
                        className="text-gray-500 hover:text-gray-700"
                        aria-label="צפה"
                      >
                        <Eye className="w-5 h-5" />
                      </button>
                      <button
                        className="text-red-500 hover:text-red-700"
                        aria-label="מחק"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* View all posts link */}
        <div className="mt-6 text-center">
          <Link
            href="/admin/blog/posts"
            className="text-teal-600 hover:text-teal-700 font-medium"
          >
            לכל הפוסטים
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
