import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-gray-800">
            家庭交互平台
          </Link>

          {/* 导航链接 */}
          <div className="hidden md:flex space-x-8">
            <Link href="/travel" className="text-gray-600 hover:text-gray-900">
              旅游
            </Link>
            <Link href="/food" className="text-gray-600 hover:text-gray-900">
              美食
            </Link>
            <Link href="/knowledge" className="text-gray-600 hover:text-gray-900">
              认知
            </Link>
            <Link href="/health" className="text-gray-600 hover:text-gray-900">
              健康
            </Link>
          </div>

          {/* 用户操作 */}
          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-gray-600 hover:text-gray-900">
              登录
            </Link>
            <Link
              href="/register"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              注册
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 