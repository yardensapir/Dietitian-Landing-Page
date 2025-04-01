'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, Lock, EyeOff, Eye, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

const AdminLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Here you'll integrate with Supabase authentication
      // For now, we'll simulate authentication with a timeout
      
      // Example of how it would look with Supabase:
      // const { data, error } = await supabase.auth.signInWithPassword({
      //   email,
      //   password,
      // });
      
      // if (error) throw error;
      
      // Simulate authentication delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, let's check for a specific email/password
      if (email === 'admin@example.com' && password === 'admin123') {
        // Success - redirect to admin dashboard
        router.push('/admin/dashboard');
      } else {
        throw new Error('שם משתמש או סיסמה לא נכונים');
      }
    } catch (err: any) {
      setError(err.message || 'אירעה שגיאה בהתחברות');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 min-h-screen flex items-center bg-gradient-to-b from-teal-50 to-white" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">התחברות למנהלת</h1>
              <p className="text-gray-600">התחברו כדי לנהל את תוכן האתר</p>
            </div>

            {error && (
              <div className="mb-6 bg-red-50 text-red-600 p-4 rounded-lg text-center">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">
                    אימייל
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 pr-10 rounded-lg border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 transition-all"
                      placeholder="הכניסו את האימייל שלכם"
                      required
                      disabled={isLoading}
                    />
                    <Mail className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-gray-700 mb-2 font-medium">
                    סיסמה
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 pr-10 rounded-lg border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 transition-all"
                      placeholder="הכניסו את הסיסמה שלכם"
                      required
                      disabled={isLoading}
                    />
                    <Lock className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      aria-label={showPassword ? "הסתר סיסמה" : "הצג סיסמה"}
                      disabled={isLoading}
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className={`w-full px-6 py-3 bg-teal-600 text-white rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                  isLoading 
                    ? 'opacity-70 cursor-not-allowed' 
                    : 'hover:bg-teal-700 hover:shadow-md'
                }`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="inline-block h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
                    מתחבר...
                  </>
                ) : (
                  'התחברות'
                )}
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <Link
                href="/"
                className="flex items-center justify-center gap-2 text-gray-600 hover:text-teal-600 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                חזרה לעמוד הבית
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdminLoginPage;