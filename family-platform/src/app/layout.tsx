import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
// import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '家庭交互平台',
  description: '一个用于家庭知识分享和互动的平台',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body className={inter.className}>
        {/* <Navbar /> */}
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
      </body>
    </html>
  )
} 