'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { 
  EnvelopeIcon,
  HomeIcon,
  ArrowLeftIcon,
  CheckIcon
} from '@heroicons/react/24/outline'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: 实现忘记密码逻辑
    console.log('重置密码邮箱:', email)
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* 返回按钮 */}
      <Link 
        href="/"
        className="absolute top-8 left-8 flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
      >
        <HomeIcon className="h-5 w-5" />
        <span className="hidden sm:inline">返回首页</span>
      </Link>

      <div className="max-w-md w-full space-y-8">
        {/* 重置密码卡片 */}
        <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl border border-white/20 p-8">
          {!isSubmitted ? (
            <>
              {/* Logo 和标题 */}
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-3 rounded-2xl shadow-lg">
                    <EnvelopeIcon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  重置密码
                </h2>
                <p className="text-gray-600 text-sm">
                  输入您的邮箱地址，我们会发送重置链接给您
                </p>
              </div>

              {/* 重置表单 */}
              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    邮箱地址
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-gray-50/50"
                      placeholder="请输入您的注册邮箱"
                    />
                  </div>
                </div>

                {/* 发送按钮 */}
                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    发送重置链接
                  </button>
                </div>
              </form>

              {/* 返回登录 */}
              <div className="mt-6 text-center">
                <Link 
                  href="/login" 
                  className="inline-flex items-center text-sm text-gray-600 hover:text-primary-600 transition-colors"
                >
                  <ArrowLeftIcon className="h-4 w-4 mr-1" />
                  返回登录
                </Link>
              </div>
            </>
          ) : (
            /* 成功状态 */
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-2xl shadow-lg">
                  <CheckIcon className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                邮件已发送
              </h2>
              <p className="text-gray-600 text-sm mb-6">
                我们已向 <span className="font-medium text-gray-900">{email}</span> 发送了密码重置链接。
                请检查您的邮箱并按照指示重置密码。
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-blue-800 text-sm">
                  <span className="font-medium">小贴士：</span> 
                  如果您没有收到邮件，请检查垃圾邮件文件夹，或稍后重试。
                </p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="w-full py-3 px-4 border border-gray-200 text-sm font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                  重新发送邮件
                </button>
                <Link 
                  href="/login"
                  className="block w-full py-3 px-4 text-sm font-medium rounded-xl text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 transition-all duration-200 text-center"
                >
                  返回登录
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* 页面底部信息 */}
        <div className="text-center text-xs text-gray-500">
          <p>需要帮助？</p>
          <div className="mt-1 space-x-4">
            <Link href="/help" className="hover:text-primary-600 transition-colors">
              帮助中心
            </Link>
            <span>·</span>
            <Link href="/contact" className="hover:text-primary-600 transition-colors">
              联系我们
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 