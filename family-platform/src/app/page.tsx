import React, { useState } from 'react'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'

export default function Home() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // 登录逻辑待实现
    console.log('登录信息:', { username, password })
  }

  return (
    <div className="min-h-screen bg-white flex">
      {/* 左侧 - 全家福照片 */}
      <div className="flex-1 bg-gray-50 flex items-center justify-center p-8">
        <div className="max-w-md">
          {/* 全家福照片 - 基于用户设计截图的样式 */}
          <div className="relative w-80 h-60 bg-gray-200 rounded-lg shadow-lg overflow-hidden border border-gray-300">
            {/* 模拟全家福照片内容 - 三个人的剪影 */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
              <div className="flex items-end space-x-2">
                {/* 第一个人 */}
                <div className="w-16 h-20 bg-gray-400 rounded-full"></div>
                {/* 第二个人（中间较高） */}
                <div className="w-18 h-24 bg-gray-500 rounded-full"></div>
                {/* 第三个人 */}
                <div className="w-16 h-20 bg-gray-400 rounded-full"></div>
              </div>
              {/* 照片角落的文字 */}
              <div className="absolute bottom-2 left-2 text-xs text-gray-600 bg-white/80 px-2 py-1 rounded">
                我们的家庭
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 右侧 - 登录表单 */}
      <div className="flex-1 bg-white flex items-center justify-center p-8">
        <div className="max-w-sm w-full">
          {/* Logo和标题 - 更贴近设计 */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-8 h-8 bg-gray-900 rounded-sm mr-2"></div>
              <h1 className="text-2xl font-bold text-gray-900">Family Web</h1>
            </div>
          </div>

          {/* 登录表单 */}
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            
            <div>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-4 rounded-md transition-colors"
              >
                LOGIN
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
} 