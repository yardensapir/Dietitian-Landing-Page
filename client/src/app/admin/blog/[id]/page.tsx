// For src/app/admin/blog/[id]/page.tsx
'use client'
import React from 'react'
import Link from 'next/link'

export default function EditBlogPost() {
  return (
    <div className="text-center py-20">
      <h1 className="text-2xl font-bold mb-4">עריכת פוסט</h1>
      <p className="mb-8">יכולת עריכת פוסטים תהיה זמינה בקרוב</p>
      <Link href="/admin/dashboard" className="text-teal-600 hover:text-teal-700">
        חזרה לדף הבית
      </Link>
    </div>
  )
}