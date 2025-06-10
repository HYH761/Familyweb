import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  MapPinIcon, 
  EnvelopeIcon, 
  PhoneIcon,
  HeartIcon
} from '@heroicons/react/24/outline'

export default function Footer() {
  const footerLinks = {
    platform: [
      { label: '首页', href: '/' },
      { label: '功能特色', href: '/features' },
      { label: '关于我们', href: '/about' },
      { label: '帮助中心', href: '/help' }
    ],
    features: [
      { label: '旅游记录', href: '/travel' },
      { label: '美食分享', href: '/food' },
      { label: '知识学习', href: '/knowledge' },
      { label: '健康管理', href: '/health' }
    ],
    support: [
      { label: '用户指南', href: '/guide' },
      { label: '常见问题', href: '/faq' },
      { label: '联系我们', href: '/contact' },
      { label: '隐私政策', href: '/privacy' }
    ]
  }

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* 主要内容区域 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 品牌信息 */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <Image
                src="/logo.webp"
                alt="Family Web Platform Logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold">家庭交互平台</span>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              为现代家庭打造的数字化互动平台，让每个家庭都能享受科技带来的便利与温暖。
            </p>
            
            {/* 联系信息 */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-neutral-400">
                <EnvelopeIcon className="h-4 w-4" />
                <span>contact@familyweb.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-neutral-400">
                <PhoneIcon className="h-4 w-4" />
                <span>400-123-4567</span>
              </div>
              <div className="flex items-start space-x-2 text-sm text-neutral-400">
                <MapPinIcon className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>北京市朝阳区科技园区创新大厦</span>
              </div>
            </div>
          </div>

          {/* 平台链接 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">平台导航</h3>
            <ul className="space-y-2">
              {footerLinks.platform.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 功能模块 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">功能模块</h3>
            <ul className="space-y-2">
              {footerLinks.features.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 支持与帮助 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">支持与帮助</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 分隔线 */}
        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            {/* 版权信息 */}
            <div className="flex items-center space-x-1 text-sm text-neutral-400">
              <span>© 2025 家庭交互平台. 保留所有权利. Made with</span>
              <HeartIcon className="h-4 w-4 text-red-500" />
              <span>in Beijing</span>
            </div>

            {/* 技术信息 */}
            <div className="mt-4 sm:mt-0 text-sm text-neutral-400">
              <span>Powered by Next.js & Supabase</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 