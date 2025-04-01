// For src/app/admin/blog/categories/page.tsx
'use client'
import React from 'react'
import Link from 'next/link'

export default function CategoriesManagement() {
  return (
    <div className="text-center py-20">
      <h1 className="text-2xl font-bold mb-4">ניהול קטגוריות</h1>
      <p className="mb-8">ניהול קטגוריות יהיה זמין בקרוב</p>
      <Link href="/admin/dashboard" className="text-teal-600 hover:text-teal-700">
        חזרה לדף הבית
      </Link>
    </div>
  )
}