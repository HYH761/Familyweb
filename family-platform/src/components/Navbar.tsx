'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <Image
              src="/logo.webp"
              alt="Family Web Platform Logo"
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
              priority
            />
            <span className="text-xl font-bold text-gray-800 hidden sm:block">
              家庭交互平台
            </span>
          </Link>

          {/* 桌面端导航链接 */}
          <div className="hidden md:flex space-x-8">
            <Link href="/travel" className="text-gray-600 hover:text-orange-500 transition-colors">
              旅游
            </Link>
            <Link href="/food" className="text-gray-600 hover:text-orange-500 transition-colors">
              美食
            </Link>
            <Link href="/knowledge" className="text-gray-600 hover:text-orange-500 transition-colors">
              认知
            </Link>
            <Link href="/health" className="text-gray-600 hover:text-orange-500 transition-colors">
              健康
            </Link>
          </div>

          {/* 桌面端用户操作 */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-gray-600 hover:text-orange-500 transition-colors">
              登录
            </Link>
            <Link
              href="/register"
              className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
            >
              注册
            </Link>
          </div>

          {/* 移动端菜单按钮 */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-orange-500 hover:bg-gray-100 transition-colors"
            aria-label="打开菜单"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* 移动端菜单 */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/travel"
                className="block px-3 py-2 text-gray-600 hover:text-orange-500 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                旅游
              </Link>
              <Link
                href="/food"
                className="block px-3 py-2 text-gray-600 hover:text-orange-500 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                美食
              </Link>
              <Link
                href="/knowledge"
                className="block px-3 py-2 text-gray-600 hover:text-orange-500 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                认知
              </Link>
              <Link
                href="/health"
                className="block px-3 py-2 text-gray-600 hover:text-orange-500 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                健康
              </Link>
              <hr className="my-2 border-gray-200" />
              <Link
                href="/login"
                className="block px-3 py-2 text-gray-600 hover:text-orange-500 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                登录
              </Link>
              <Link
                href="/register"
                className="block px-3 py-2 bg-orange-500 text-white hover:bg-orange-600 rounded-md transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                注册
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 