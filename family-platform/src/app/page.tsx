'use client'

import React, { useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('登录信息:', { username, password })
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      {/* 核心登录容器 - 650x350，左右布局不重叠 */}
      <div 
        className="bg-white flex"
        style={{
          width: '650px',
          height: '350px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
        }}
      >
        {/* 左侧 - 家庭照片区域 380px */}
        <div 
          className="relative overflow-hidden"
          style={{ width: '380px', height: '350px' }}
        >
          <Image
            src="/KFK_8067.JPG"
            alt="家庭照片"
            width={380}
            height={350}
            className="object-cover w-full h-full"
            priority
          />
          {/* 照片覆盖文字 */}
          <div 
            className="absolute bottom-8 left-6 text-white font-medium"
            style={{ fontSize: '16px' }}
          >
            「时光数字Dock」
          </div>
        </div>

        {/* 右侧 - 登录表单区域 270px */}
        <div 
          className="bg-white flex flex-col justify-center px-8"
          style={{ width: '270px', height: '350px' }}
        >
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/V0.1.1.webp"
              alt="Family Web Logo"
              width={200}
              height={30}
              className="object-contain"
            />
          </div>

          {/* 登录表单 */}
          <form onSubmit={handleLogin} className="space-y-4">
            {/* 用户名输入框 */}
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border"
              style={{
                height: '35px',
                backgroundColor: '#F7F7F7',
                borderColor: '#E0E0E0',
                borderWidth: '1px',
                padding: '0 10px',
                fontSize: '14px',
                color: '#333',
                outline: 'none'
              }}
            />

            {/* 密码输入框 */}
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border"
                style={{
                  height: '35px',
                  backgroundColor: '#F7F7F7',
                  borderColor: '#E0E0E0',
                  borderWidth: '1px',
                  padding: '0 10px',
                  fontSize: '14px',
                  color: '#333',
                  outline: 'none'
                }}
              />
              {/* 密码可见性图标 */}
              <div 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer text-sm"
              >
                👁️
              </div>
            </div>

            {/* 登录按钮 */}
            <button
              type="submit"
              className="w-full text-white font-bold mt-6"
              style={{
                height: '40px',
                backgroundColor: '#000000',
                border: 'none',
                borderRadius: '4px',
                fontSize: '14px',
                cursor: 'pointer'
              }}
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  )
} 