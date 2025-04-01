// src/app/admin/(dashboard)/layout.tsx
'use client'

import AdminLayout from "@/app/components/admin/AdminLayout";



export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminLayout>{children}</AdminLayout>;
}