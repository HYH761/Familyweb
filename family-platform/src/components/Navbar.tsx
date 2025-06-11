'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Bars3Icon, XMarkIcon, HomeIcon, SparklesIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navigationItems = [
    { href: '/', label: '首页', icon: HomeIcon },
    { href: '/features', label: '功能特色', icon: SparklesIcon },
    { href: '/about', label: '关于我们' },
    { href: '/travel', label: '旅游记录' },
    { href: '/food', label: '美食分享' },
    { href: '/knowledge', label: '知识学习' },
    { href: '/health', label: '健康管理' }
  ]

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity ml-[15px] mt-[15px]">
            <Image
              src="/images/logo-hq.png"
              alt="Family Web Platform Logo"
              width={33}
              height={7.5}
              className="h-6 w-auto object-contain"
              priority
              unoptimized
            />
            <span className="text-xl font-bold text-neutral-800 hidden sm:block">
              Family Web
            </span>
          </Link>

          {/* 桌面端导航链接 */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center space-x-1 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-200"
              >
                {item.icon && <item.icon className="h-4 w-4" />}
                <span>{item.label}</span>
            </Link>
            ))}
          </div>

          {/* 桌面端用户操作 */}
          <div className="hidden lg:flex items-center space-x-3 mr-[15px]">
            <Link 
              href="/login" 
              className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors font-medium"
            >
              登录
            </Link>
            <Link
              href="/register"
              className="bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-900 transition-all duration-200 font-medium shadow-sm"
            >
              免费注册
            </Link>
          </div>

          {/* 移动端菜单按钮 */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-colors mr-[15px]"
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
          <div className="lg:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-2 px-3 py-3 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon && <item.icon className="h-5 w-5" />}
                  <span>{item.label}</span>
                </Link>
              ))}
              
              <Link
                href="/login"
                className="block px-3 py-3 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                登录
              </Link>
              <Link
                href="/register"
                className="block px-3 py-3 bg-gray-800 text-white hover:bg-gray-900 rounded-lg transition-all duration-200 text-center font-medium shadow-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                免费注册
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 