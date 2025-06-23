'use client'

import React, { useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('登录信息:', { username, password })
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      {/* 优化后的登录容器 - 更好的比例关系 */}
      <div 
        className="bg-white flex rounded-lg overflow-hidden"
        style={{
          width: '800px',
          height: '450px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)'
        }}
      >
        {/* 左侧 - 全家福照片区域 */}
        <div 
          className="relative overflow-hidden"
          style={{ width: '520px', height: '450px' }}
        >
                      <Image
              src="/KFK_8067.JPG"
              alt="家庭照片"
              width={520}
              height={450}
              className="object-cover w-full h-full"
              priority
            />
          {/* 照片上的轻微渐变遮罩增强视觉效果 */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/5"></div>
        </div>

        {/* 右侧 - 登录表单区域 */}
        <div 
          className="bg-white flex flex-col justify-center"
          style={{ width: '280px', height: '450px', padding: '0 35px' }}
        >
          {/* Logo区域 */}
          <div className="mb-8 text-center">
            <Image
              src="/V0.1.1.webp"
              alt="Family Web Logo"
              width={160}
              height={20}
              className="mx-auto"
              priority
            />
          </div>

          {/* 登录表单 */}
          <form onSubmit={handleLogin} className="space-y-5">
            {/* 用户名输入框 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">用户名</label>
              <input
                type="text"
                placeholder="请输入用户名"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                style={{
                  height: '44px',
                  backgroundColor: '#FAFAFA',
                  borderColor: '#E5E7EB',
                  borderWidth: '1px',
                  padding: '0 14px',
                  fontSize: '14px',
                  color: '#374151',
                  outline: 'none'
                }}
              />
            </div>

            {/* 密码输入框 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">密码</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="请输入密码"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  style={{
                    height: '44px',
                    backgroundColor: '#FAFAFA',
                    borderColor: '#E5E7EB',
                    borderWidth: '1px',
                    padding: '0 50px 0 14px',
                    fontSize: '14px',
                    color: '#374151',
                    outline: 'none'
                  }}
                />
                {/* 密码可见性切换按钮 */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  style={{ fontSize: '12px', background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  {showPassword ? '隐藏' : '显示'}
                </button>
              </div>
            </div>

            {/* 登录按钮 */}
            <button
              type="submit"
              className="w-full text-white font-medium rounded-md hover:bg-gray-800 transition-colors mt-6"
              style={{
                height: '48px',
                backgroundColor: '#1F2937',
                border: 'none',
                fontSize: '15px',
                cursor: 'pointer'
              }}
            >
              登录
            </button>

            {/* 底部链接 */}
            <div className="text-center mt-6">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
                忘记密码？
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
} 