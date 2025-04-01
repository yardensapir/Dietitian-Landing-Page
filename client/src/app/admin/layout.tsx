// src/app/admin/layout.tsx
import { redirect } from 'next/navigation';

// This is a simple middleware-like layout
export default async function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // In a real app, you'd check if the user is authenticated here
  // const isAuthenticated = await checkAuth();
  
  // For now, we'll just render the children
  // Later, you can add authentication logic here
  
  return <>{children}</>;
}