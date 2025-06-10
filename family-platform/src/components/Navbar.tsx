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
    <nav className="bg-white shadow-lg border-b border-neutral-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <Image
              src="/logo.webp"
              alt="Family Web Platform Logo"
              width={0}
              height={40}
              className="h-10 w-auto object-contain"
              priority
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
                className="flex items-center space-x-1 px-3 py-2 text-neutral-600 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all duration-200"
              >
                {item.icon && <item.icon className="h-4 w-4" />}
                <span>{item.label}</span>
            </Link>
            ))}
          </div>

          {/* 桌面端用户操作 */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link 
              href="/login" 
              className="px-4 py-2 text-neutral-600 hover:text-orange-500 transition-colors font-medium"
            >
              登录
            </Link>
            <Link
              href="/register"
              className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-5 py-2 rounded-lg hover:from-orange-600 hover:to-pink-600 transition-all duration-200 font-medium shadow-sm"
            >
              免费注册
            </Link>
          </div>

          {/* 移动端菜单按钮 */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-neutral-600 hover:text-orange-500 hover:bg-neutral-100 transition-colors"
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
          <div className="lg:hidden border-t border-neutral-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-2 px-3 py-3 text-neutral-600 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon && <item.icon className="h-5 w-5" />}
                  <span>{item.label}</span>
                </Link>
              ))}
              
              <hr className="my-3 border-neutral-200" />
              
              <Link
                href="/login"
                className="block px-3 py-3 text-neutral-600 hover:text-orange-500 hover:bg-neutral-50 rounded-lg transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                登录
              </Link>
              <Link
                href="/register"
                className="block px-3 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:from-orange-600 hover:to-pink-600 rounded-lg transition-all duration-200 text-center font-medium shadow-sm"
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