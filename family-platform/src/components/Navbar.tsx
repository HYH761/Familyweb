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

  const mainNavigationItems = [
    { href: '/travel', label: '旅游记录' },
    { href: '/food', label: '美食分享' },
    { href: '/knowledge', label: '知识学习' },
    { href: '/health', label: '健康管理' }
  ]

  const otherNavigationItems = [
    { href: '/', label: '首页', icon: HomeIcon },
    { href: '/features', label: '功能特色', icon: SparklesIcon },
    { href: '/about', label: '关于我们' }
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
              width={132}
              height={30}
              className="h-8 w-auto object-contain"
              priority
              unoptimized
            />
            <span className="text-xl font-bold text-neutral-800 hidden sm:block">
              Family Web
            </span>
          </Link>

          {/* 主要导航链接 */}
          <div className="hidden lg:flex items-center space-x-3">
            {mainNavigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center px-3 py-2 text-gray-700 hover:text-gray-900 font-medium transition-all duration-200"
              >
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* 桌面端用户操作 */}
          <div className="hidden lg:flex items-center space-x-3 mr-[15px]">
            <div className="border-l border-gray-200 h-6 mx-2"></div>
            
            {/* 其他导航项的下拉菜单 */}
            <div className="relative group">
              <button className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors font-medium flex items-center">
                更多
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  {otherNavigationItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      {item.icon && <item.icon className="h-4 w-4 mr-2" />}
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
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
              {/* 主要导航项 */}
              {mainNavigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center px-3 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{item.label}</span>
                </Link>
              ))}
              
              {/* 次要导航项 */}
              <div className="border-t border-gray-100 my-2 pt-2">
                {otherNavigationItems.map((item) => (
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
              </div>
              
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