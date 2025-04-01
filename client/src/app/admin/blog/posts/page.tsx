'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { Plus, Search, Edit, Eye, Trash2, Filter, ArrowLeft } from 'lucide-react';

const BlogPostsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all'); // 'all', 'published', 'draft'

  // Sample data - this would come from your Supabase database in a real app
  const posts = [
    { 
      id: 1, 
      title: 'איך לבנות תפריט שבועי מאוזן לכל המשפחה', 
      status: 'published', 
      publishedDate: '12/03/2023',
      views: 142,
      category: 'תזונה'
    },
    { 
      id: 2, 
      title: '5 שגיאות נפוצות בתזונה ספורטיבית', 
      status: 'published', 
      publishedDate: '25/02/2023',
      views: 98,
      category: 'כושר'
    },
    { 
      id: 3, 
      title: 'היתרונות הבריאותיים של דיאטה ים תיכונית', 
      status: 'draft', 
      publishedDate: '-',
      views: 0,
      category: 'תזונה'
    },
    { 
      id: 4, 
      title: 'איך להתמודד עם התקפי אכילה רגשית', 
      status: 'draft', 
      publishedDate: '-',
      views: 0,
      category: 'בריאות'
    },
  ];

  // Filter and search posts
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || post.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const handleDelete = (id: number) => {
    // In a real app, you would call your API to delete the post
    // For now, we'll just show an alert
    if (confirm('האם אתה בטוח שברצונך למחוק פוסט זה?')) {
      alert(`הפוסט עם ID ${id} נמחק בהצלחה!`);
    }
  };

  return (
    <div className="space-y-6 py-6">
      {/* Back to Dashboard Button */}
      <div className="mb-8">
        <Link
          href="/admin/dashboard"
          className="flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          חזרה ללוח הבקרה
        </Link>
      </div>

      <div className="flex px-2 flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-800">ניהול פוסטים</h1>
        <Link
          href="/admin/blog/new"
          className="flex items-center gap-2 px-5 py-2.5 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          פוסט חדש
        </Link>
      </div>

      {/* Search and filter bar */}
      <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col md:flex-row gap-4 justify-between">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="חיפוש פוסטים..."
            className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-100 focus:border-teal-600 transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
        
        <div className="flex items-center gap-2">
          <Filter className="text-gray-400 w-5 h-5" />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-100 focus:border-teal-600 transition-all"
          >
            <option value="all">כל הפוסטים</option>
            <option value="published">פורסמו</option>
            <option value="draft">טיוטות</option>
          </select>
        </div>
      </div>

      {/* Posts table */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        {filteredPosts.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    כותרת
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    קטגוריה
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
                {filteredPosts.map((post) => (
                  <tr key={post.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{post.title}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{post.category}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        post.status === 'published' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {post.status === 'published' ? 'פורסם' : 'טיוטה'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {post.publishedDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {post.views}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center space-x-3 space-x-reverse">
                        <Link 
                          href={`/admin/blog/${post.id}`}
                          className="text-teal-600 hover:text-teal-800"
                          aria-label="ערוך"
                        >
                          <Edit className="w-5 h-5" />
                        </Link>
                        <button 
                          className="text-gray-500 hover:text-gray-700"
                          aria-label="צפה"
                        >
                          <Eye className="w-5 h-5" />
                        </button>
                        <button 
                          className="text-red-500 hover:text-red-700"
                          aria-label="מחק"
                          onClick={() => handleDelete(post.id)}
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
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500">לא נמצאו פוסטים תואמים</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPostsPage;