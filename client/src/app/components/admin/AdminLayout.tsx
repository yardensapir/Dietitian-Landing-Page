'use client'
import React, { useState, ReactNode, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  Menu,
  X, 
  Home, 
  FileText, 
  Calendar, 
  Settings, 
  LogOut, 
  Users,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [blogSubmenuOpen, setBlogSubmenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Set up page properly - this ensures the admin panel is at the top
  useEffect(() => {
    // Scroll to top when admin page loads
    window.scrollTo(0, 0);
    
    // Add a class to the body to hide the site navbar when in admin
    document.body.classList.add('admin-page');
    
    // Cleanup function
    return () => {
      document.body.classList.remove('admin-page');
    };
  }, []);

  const handleLogout = async () => {
    // Here you'll add Supabase signOut logic
    // await supabase.auth.signOut()
    
    // For now, we'll just redirect to login
    router.push('/admin/login');
  };

  const menuItems = [
    {
      name: 'דף הבית',
      href: '/admin/dashboard',
      icon: Home,
    },
    {
      name: 'ניהול בלוג',
      href: '#',
      icon: FileText,
      submenu: true,
      submenuItems: [
        { name: 'כל הפוסטים', href: '/admin/blog/posts' },
        { name: 'הוספת פוסט חדש', href: '/admin/blog/new' },
        { name: 'קטגוריות', href: '/admin/blog/categories' },
      ],
    },
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleBlogSubmenu = () => {
    setBlogSubmenuOpen(!blogSubmenuOpen);
  };

  // Auto-open the blog submenu if we're on a blog page
  useEffect(() => {
    if (pathname?.startsWith('/admin/blog')) {
      setBlogSubmenuOpen(true);
    }
  }, [pathname]);

  return (
    <div className="min-h-screen bg-gray-100 admin-layout" dir="rtl">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 z-30 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
        } lg:static lg:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar header */}
          <div className="flex items-center justify-between h-16 px-6 border-b">
            <div className="text-xl font-bold text-teal-600">פאנל ניהול</div>
            <button
              className="text-gray-500 hover:text-gray-700 lg:hidden"
              onClick={toggleSidebar}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Sidebar content */}
          <div className="flex-1 overflow-y-auto py-4">
            <nav className="px-4 space-y-1">
              {menuItems.map((item) => 
                !item.submenu ? (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center px-4 py-3 text-gray-700 rounded-lg transition-colors ${
                      pathname === item.href
                        ? 'bg-teal-50 text-teal-600 font-medium'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <item.icon className="w-5 h-5 ml-3" />
                    <span>{item.name}</span>
                  </Link>
                ) : (
                  <div key={item.name}>
                    <button
                      onClick={toggleBlogSubmenu}
                      className={`w-full flex items-center justify-between px-4 py-3 text-gray-700 rounded-lg transition-colors ${
                        pathname?.startsWith('/admin/blog')
                          ? 'bg-teal-50 text-teal-600 font-medium'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center">
                        <item.icon className="w-5 h-5 ml-3" />
                        <span>{item.name}</span>
                      </div>
                      {blogSubmenuOpen ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                    
                    {/* Submenu */}
                    {blogSubmenuOpen && (
                      <div className="pr-12 mt-1 space-y-1">
                        {item.submenuItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className={`block px-4 py-2 text-sm text-gray-700 rounded-lg transition-colors ${
                              pathname === subItem.href
                                ? 'bg-teal-50 text-teal-600 font-medium'
                                : 'hover:bg-gray-100'
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              )}
            </nav>
          </div>

          {/* Sidebar footer */}
          <div className="border-t px-4 py-4">
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <LogOut className="w-5 h-5 ml-3" />
              <span>התנתקות</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex flex-col flex-1 lg:pr-64">
        {/* Top navigation */}
        <header className="sticky top-0 z-10 bg-white border-b h-16 shadow-sm">
          <div className="flex items-center justify-between h-full px-6">
            <button
              className="text-gray-500 hover:text-gray-700 lg:hidden"
              onClick={toggleSidebar}
            >
              <Menu className="w-6 h-6" />
            </button>
            <div>
              <span className="text-sm font-medium">שלום, יפית</span>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;