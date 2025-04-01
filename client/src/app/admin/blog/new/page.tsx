'use client'
import React, { useState } from 'react';
import { 
  Save, 
  Image as ImageIcon, 
  Bold, 
  Italic, 
  Link as LinkIcon, 
  List, 
  ListOrdered,
  AlignLeft,
  AlignCenter,
  AlignRight,
  X,
  ArrowLeft
} from 'lucide-react';
import Link from 'next/link';

const NewBlogPostPage = () => {
  const [postData, setPostData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: '',
    tags: '',
    featuredImage: null as File | null,
    status: 'draft' // 'draft' or 'published'
  });

  const [previewImage, setPreviewImage] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPostData({
      ...postData,
      [name]: value
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setPostData({
        ...postData,
        featuredImage: file
      });
      
      // Create preview URL
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleSubmit = async (e: React.FormEvent, saveAsDraft = false) => {
    e.preventDefault();
    setIsSaving(true);
    
    try {
      // Prepare data to send
      const formData = new FormData();
      formData.append('title', postData.title);
      formData.append('excerpt', postData.excerpt);
      formData.append('content', postData.content);
      formData.append('category', postData.category);
      formData.append('tags', postData.tags);
      formData.append('status', saveAsDraft ? 'draft' : 'published');
      
      if (postData.featuredImage) {
        formData.append('featuredImage', postData.featuredImage);
      }
      
      // In a real app, you would send this to your API
      // const response = await fetch('/api/blog/posts', {
      //   method: 'POST',
      //   body: formData
      // });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Show success message and redirect
      alert('הפוסט נשמר בהצלחה!');
      
      // In a real app:
      // router.push('/admin/blog/posts');
      
    } catch (error) {
      console.error('Error saving post:', error);
      alert('אירעה שגיאה בשמירת הפוסט');
    } finally {
      setIsSaving(false);
    }
  };
  
  // Simple text formatting toolbar component
  const EditorToolbar = () => (
    <div className="flex flex-wrap gap-1 p-2 border-b">
      <button type="button" className="p-2 hover:bg-gray-100 rounded" title="מודגש">
        <Bold className="w-4 h-4" />
      </button>
      <button type="button" className="p-2 hover:bg-gray-100 rounded" title="נטוי">
        <Italic className="w-4 h-4" />
      </button>
      <button type="button" className="p-2 hover:bg-gray-100 rounded" title="קישור">
        <LinkIcon className="w-4 h-4" />
      </button>
      <button type="button" className="p-2 hover:bg-gray-100 rounded" title="רשימה">
        <List className="w-4 h-4" />
      </button>
      <button type="button" className="p-2 hover:bg-gray-100 rounded" title="רשימה ממוספרת">
        <ListOrdered className="w-4 h-4" />
      </button>
      <button type="button" className="p-2 hover:bg-gray-100 rounded" title="יישור לימין">
        <AlignRight className="w-4 h-4" />
      </button>
      <button type="button" className="p-2 hover:bg-gray-100 rounded" title="יישור למרכז">
        <AlignCenter className="w-4 h-4" />
      </button>
      <button type="button" className="p-2 hover:bg-gray-100 rounded" title="יישור לשמאל">
        <AlignLeft className="w-4 h-4" />
      </button>
    </div>
  );

  return (
    <div className="space-y-6 py-6">
      {/* Back to Blog Posts Button */}
      <div className="mb-4">
        <Link href="/admin/blog/posts" className="flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors">
          <ArrowLeft className="w-5 h-5" />
          חזרה לרשימת הפוסטים
        </Link>
      </div>

      <div className="flex px-3 flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <h1 className="text-2xl font-bold text-gray-800">פוסט חדש</h1>
        
        <div className="flex gap-3">
          <button
            type="button"
            onClick={(e) => handleSubmit(e, true)}
            className="px-5 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2"
            disabled={isSaving}
          >
            שמירה כטיוטה
          </button>
          
          <button
            type="button"
            onClick={(e) => handleSubmit(e, false)}
            className="px-5 py-2.5 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors flex items-center gap-2"
            disabled={isSaving}
          >
            {isSaving ? (
              <>
                <span className="inline-block h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
                שומר...
              </>
            ) : (
              <>
                <Save className="w-5 h-5" />
                פרסום
              </>
            )}
          </button>
        </div>
      </div>

      <form className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main content section - 2/3 width on larger screens */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700 mb-2 font-medium">
                כותרת
              </label>
              <input
                id="title"
                name="title"
                type="text"
                value={postData.title}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 transition-all"
                placeholder="הזינו כותרת..."
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="excerpt" className="block text-gray-700 mb-2 font-medium">
                תקציר
              </label>
              <textarea
                id="excerpt"
                name="excerpt"
                value={postData.excerpt}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 transition-all"
                placeholder="הזינו תקציר קצר..."
                rows={3}
                required
              />
            </div>
            
            <div>
              <label htmlFor="content" className="block text-gray-700 mb-2 font-medium">
                תוכן
              </label>
              <div className="border border-gray-300 rounded-lg overflow-hidden focus-within:border-teal-600 focus-within:ring-2 focus-within:ring-teal-100 transition-all">
                <EditorToolbar />
                <textarea
                  id="content"
                  name="content"
                  value={postData.content}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-0 focus:ring-0 outline-none"
                  placeholder="הזינו את תוכן הפוסט כאן..."
                  rows={15}
                  required
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                עורך טקסט בסיסי. לחיצה על הכפתורים למעלה תוסיף תגיות HTML לטקסט.
              </p>
            </div>
          </div>
        </div>
        
        {/* Sidebar - 1/3 width on larger screens */}
        <div className="space-y-6">
          {/* Publication Settings */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-medium text-gray-800 mb-4">הגדרות פרסום</h2>
            
            <div className="mb-4">
              <label htmlFor="category" className="block text-gray-700 mb-2 font-medium">
                קטגוריה
              </label>
              <select
                id="category"
                name="category"
                value={postData.category}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 transition-all"
                required
              >
                <option value="">בחרו קטגוריה</option>
                <option value="nutrition">תזונה</option>
                <option value="fitness">כושר</option>
                <option value="recipes">מתכונים</option>
                <option value="wellness">בריאות כללית</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="tags" className="block text-gray-700 mb-2 font-medium">
                תגיות
              </label>
              <input
                id="tags"
                name="tags"
                type="text"
                value={postData.tags}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 transition-all"
                placeholder="הפרידו תגיות בפסיקים..."
              />
              <p className="text-xs text-gray-500 mt-1">
                לדוגמה: תזונה, בריאות, דיאטה, מתכונים
              </p>
            </div>
          </div>
          
          {/* Featured Image */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-medium text-gray-800 mb-4">תמונה ראשית</h2>
            
            <div className="space-y-4">
              {previewImage ? (
                <div className="relative">
                  <img 
                    src={previewImage} 
                    alt="Preview" 
                    className="w-full h-40 object-cover rounded-lg" 
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setPreviewImage('');
                      setPostData({...postData, featuredImage: null});
                    }}
                    className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
                    aria-label="הסר תמונה"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <ImageIcon className="w-12 h-12 mx-auto text-gray-400 mb-2" />
                  <p className="text-gray-500">העלו תמונה ראשית</p>
                  <p className="text-xs text-gray-400 mt-1">PNG, JPG או WEBP עד 5MB</p>
                </div>
              )}
              
              <input
                type="file"
                id="featuredImage"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
              
              <button
                type="button"
                onClick={() => document.getElementById('featuredImage')?.click()}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
              >
                <ImageIcon className="w-5 h-5" />
                {previewImage ? 'החלף תמונה' : 'בחר תמונה'}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewBlogPostPage;