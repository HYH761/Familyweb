import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
// import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

const quickLinks = [
  { name: '家庭公告', href: '#', icon: '📢' },
  { name: '学习计划', href: '#', icon: '📝' },
  { name: '小游戏', href: '#', icon: '🎮' },
  { name: '知识库', href: '#', icon: '📚' },
]

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
          <div className="min-h-screen bg-neutral-100 flex flex-col items-center px-4">
            {/* 顶部欢迎与今日关注 */}
            <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between items-center mt-12 mb-8">
              <h1 className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight mb-4 md:mb-0">
                👋 欢迎来到家庭交互平台
              </h1>
              <div className="bg-white rounded-xl shadow p-4 flex flex-col items-start border border-neutral-200 min-w-[220px]">
                <span className="text-sm text-neutral-500 mb-1">今日关注</span>
                <span className="font-semibold text-blue-700">家庭学习打卡、健康运动、亲子互动</span>
              </div>
            </div>

            {/* 快捷入口 */}
            <div className="w-full max-w-5xl flex gap-4 mb-8">
              {quickLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-2 bg-white rounded-lg shadow px-4 py-2 text-neutral-700 hover:bg-blue-50 border border-neutral-200 transition"
                >
                  <span className="text-xl">{link.icon}</span>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>

            {/* 主体分区卡片 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-5xl">
              {/* 旅游 */}
              <div className="bg-white rounded-xl shadow-md p-6 border border-neutral-200 flex flex-col items-start hover:shadow-lg transition">
                <h2 className="text-lg font-bold mb-2 flex items-center gap-2">🌏 旅游</h2>
                <ul className="space-y-1 text-neutral-700 text-base">
                  <li>· 旅游攻略（高优先级）</li>
                  <li>· 景点推荐</li>
                  <li>· 旅行日记</li>
                </ul>
              </div>
              {/* 美食 */}
              <div className="bg-white rounded-xl shadow-md p-6 border border-neutral-200 flex flex-col items-start hover:shadow-lg transition">
                <h2 className="text-lg font-bold mb-2 flex items-center gap-2">🍲 美食</h2>
                <ul className="space-y-1 text-neutral-700 text-base">
                  <li>· 食谱分享（高优先级）</li>
                  <li>· 烹饪技巧</li>
                  <li>· 美食探店</li>
                </ul>
              </div>
              {/* 认知 */}
              <div className="bg-white rounded-xl shadow-md p-6 border border-neutral-200 flex flex-col items-start hover:shadow-lg transition">
                <h2 className="text-lg font-bold mb-2 flex items-center gap-2">🧠 认知</h2>
                <ul className="space-y-1 text-neutral-700 text-base">
                  <li>· 生活常识</li>
                  <li>· 科普知识（高优先级）</li>
                  <li>· 历史文化</li>
                </ul>
              </div>
              {/* 健康 */}
              <div className="bg-white rounded-xl shadow-md p-6 border border-neutral-200 flex flex-col items-start hover:shadow-lg transition">
                <h2 className="text-lg font-bold mb-2 flex items-center gap-2">💪 健康</h2>
                <ul className="space-y-1 text-neutral-700 text-base">
                  <li>· 运动健身（高优先级）</li>
                  <li>· 心理健康</li>
                  <li>· 饮食健康</li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  )
} 