'use client'

import React, { useState } from 'react'
import Image from 'next/image'

// 主登录页面组件
export default function ConfigurableLoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4">
      {/* 主容器 - 像素级精确 */}
      <div 
        className="relative flex overflow-hidden bg-white"
        style={{
          width: '882px',
          height: '518px',
          borderRadius: '12px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)'
        }}
      >
        {/* 窗口控制按钮装饰 */}
        <div className="absolute top-3.5 right-4 z-10 flex items-center space-x-2">
          <div className="h-0.5 w-3 rounded-full bg-gray-300"></div>
          <div className="h-3 w-3 rounded-sm border border-gray-300"></div>
          <div className="h-3 w-3 rounded-sm bg-gray-300"></div>
        </div>

        {/* 左侧图片面板 - 精确尺寸 */}
        <div className="relative w-[528px] flex-shrink-0">
          <Image 
            src="/KFK_8067.JPG"
            alt="家庭照片"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* 右侧登录表单 - 精确尺寸和内边距 */}
        <div 
          className="flex w-full flex-col justify-center"
          style={{ paddingLeft: '52px', paddingRight: '52px' }}
        >
          {/* Logo - 精确位置和尺寸 */}
          <div className="mb-12">
            <Image
              src="/V0.1.1.webp"
              alt="HZH Family Web Logo"
              width={250}
              height={32}
              style={{ maxWidth: '100%', height: 'auto' }}
              priority
            />
          </div>

          {/* 表单 - 精确间距 */}
          <form onSubmit={(e) => e.preventDefault()}>
            {/* Username输入框 - 精确样式 */}
            <input
              type="text"
              placeholder="Username"
              style={{
                height: '48px',
                backgroundColor: '#f3f4f6',
                border: 'none',
                borderRadius: '8px',
                fontSize: '15px',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
              }}
              className="w-full px-4 text-gray-800 placeholder-gray-400 outline-none"
            />

            {/* Password输入框 - 精确样式 */}
            <div className="relative" style={{ marginTop: '20px' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                style={{
                  height: '48px',
                  backgroundColor: '#f3f4f6',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '15px',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                }}
                className="w-full px-4 pr-12 text-gray-800 placeholder-gray-400 outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </div>

            {/* LOGIN按钮 - 精确样式 */}
            <button
              type="submit"
              style={{
                width: '100%',
                height: '48px',
                backgroundColor: '#000000',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer',
                marginTop: '32px',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
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