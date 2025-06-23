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
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#E9E9E9' }}>
      {/* 主容器 - 800x500，完全按照HTML设计 */}
      <div 
        className="relative bg-white"
        style={{
          width: '650px',
          height: '350px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
        }}
      >
        {/* 左侧 - 家庭照片区域 (380px) */}
        <div 
          className="absolute left-0 top-0 overflow-hidden"
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
            className="absolute text-white font-medium"
            style={{
              left: '25px',
              top: '320px',
              fontSize: '16px',
              fontFamily: 'Microsoft YaHei, sans-serif'
            }}
          >
            「时光数字Dock」
          </div>
        </div>

        {/* 右侧 - 登录表单区域 (270px) */}
        <div 
          className="absolute right-0 top-0"
          style={{ width: '270px', height: '350px' }}
        >
          {/* Logo */}
          <div 
            className="absolute"
            style={{ left: '35px', top: '70px' }}
          >
            <Image
              src="/V0.1.1.webp"
              alt="Family Web Logo"
              width={200}
              height={30}
              className="object-contain"
            />
          </div>

          {/* 登录表单 */}
          <form onSubmit={handleLogin}>
            {/* 用户名输入框 */}
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="absolute border"
              style={{
                left: '35px',
                top: '140px',
                width: '200px',
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
            <div className="absolute" style={{ left: '35px', top: '190px' }}>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border"
                style={{
                  width: '200px',
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
                className="absolute text-gray-400 cursor-pointer"
                style={{ right: '10px', top: '50%', transform: 'translateY(-50%)' }}
              >
                👁️
              </div>
            </div>

            {/* 登录按钮 */}
            <button
              type="submit"
              className="absolute text-white font-bold"
              style={{
                left: '35px',
                top: '255px',
                width: '200px',
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