'use client'

import { usePathname } from 'next/navigation';
import { ReactNode, useEffect } from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';


export default function ClientSideLayoutCheck({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/admin');

  // Add or remove admin-page class based on route
  useEffect(() => {
    if (isAdminRoute) {
      document.body.classList.add('admin-page');
    } else {
      document.body.classList.remove('admin-page');
    }
    
    // Cleanup function
    return () => {
      document.body.classList.remove('admin-page');
    };
  }, [isAdminRoute]);

  return (
    <>
      {!isAdminRoute && <Navbar />}
      {children}
      {!isAdminRoute && <Footer />}
    </>
  );
}