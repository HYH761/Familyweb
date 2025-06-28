'use client'

import React, { useState, useEffect } from 'react'
import ConfigurableLoginPage from '@/components/ConfigurableLoginPage'
// import initialConfig from '@/config/login-page-config.json'
const initialConfig = {};

export default function ConfigEditorPage() {
  const [config, setConfig] = useState(JSON.stringify(initialConfig, null, 2))
  const [parsedConfig, setParsedConfig] = useState(initialConfig)
  const [error, setError] = useState('')
  const [activeTab, setActiveTab] = useState<'editor' | 'preview'>('editor')

  // 解析JSON配置
  useEffect(() => {
    try {
      const parsed = JSON.parse(config)
      setParsedConfig(parsed)
      setError('')
    } catch (err) {
      setError('JSON 格式错误: ' + (err as Error).message)
    }
  }, [config])

  // 快速配置选项
  const quickConfigOptions = [
    {
      name: '主题色调',
      key: 'page.background.colors',
      options: [
        { name: '温暖橙色', value: ['#fff7ed', '#ffedd5', '#fed7aa'] },
        { name: '清新蓝色', value: ['#eff6ff', '#dbeafe', '#bfdbfe'] },
        { name: '优雅紫色', value: ['#faf5ff', '#f3e8ff', '#e9d5ff'] },
        { name: '自然绿色', value: ['#f0fdf4', '#dcfce7', '#bbf7d0'] }
      ]
    },
    {
      name: '按钮样式',
      key: 'buttons.primary.style.background',
      options: [
        { name: '橙色渐变', value: 'linear-gradient(45deg, #f97316, #ea580c)' },
        { name: '蓝色渐变', value: 'linear-gradient(45deg, #3b82f6, #2563eb)' },
        { name: '紫色渐变', value: 'linear-gradient(45deg, #8b5cf6, #7c3aed)' },
        { name: '绿色渐变', value: 'linear-gradient(45deg, #10b981, #059669)' }
      ]
    },
    {
      name: '卡片圆角',
      key: 'container.style.borderRadius',
      options: [
        { name: '小圆角', value: '12px' },
        { name: '中圆角', value: '24px' },
        { name: '大圆角', value: '32px' },
        { name: '方形', value: '0px' }
      ]
    }
  ]

  // 更新配置的辅助函数
  const updateConfigValue = (keyPath: string, value: any) => {
    try {
      const newConfig = JSON.parse(config)
      const keys = keyPath.split('.')
      let current = newConfig
      
      for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]]) current[keys[i]] = {}
        current = current[keys[i]]
      }
      
      current[keys[keys.length - 1]] = value
      setConfig(JSON.stringify(newConfig, null, 2))
    } catch (err) {
      console.error('更新配置失败:', err)
    }
  }

  // 重置为默认配置
  const resetConfig = () => {
    setConfig(JSON.stringify(initialConfig, null, 2))
  }

  // 导出配置
  const exportConfig = () => {
    const blob = new Blob([config], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'login-page-config.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航 */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold text-gray-900">
              登录页面配置编辑器
            </h1>
            <div className="flex items-center space-x-4">
              <button
                onClick={resetConfig}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                重置配置
              </button>
              <button
                onClick={exportConfig}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
              >
                导出配置
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 左侧配置编辑区 */}
          <div className="space-y-6">
            {/* Tab 切换 */}
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                <button
                  onClick={() => setActiveTab('editor')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'editor'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  JSON 编辑器
                </button>
                <button
                  onClick={() => setActiveTab('preview')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'preview'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  快速设置
                </button>
              </nav>
            </div>

            {activeTab === 'editor' ? (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  JSON 配置
                </label>
                <textarea
                  value={config}
                  onChange={(e) => setConfig(e.target.value)}
                  className="w-full h-96 p-3 border border-gray-300 rounded-md font-mono text-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="在这里编辑 JSON 配置..."
                />
                {error && (
                  <div className="mt-2 p-3 bg-red-50 border border-red-200 rounded-md">
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-gray-900">快速配置选项</h3>
                {quickConfigOptions.map((option) => (
                  <div key={option.name} className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      {option.name}
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {option.options.map((opt) => (
                        <button
                          key={opt.name}
                          onClick={() => updateConfigValue(option.key, opt.value)}
                          className="p-3 text-left border border-gray-300 rounded-md hover:bg-gray-50 focus:ring-2 focus:ring-blue-500"
                        >
                          <div className="text-sm font-medium text-gray-900">
                            {opt.name}
                          </div>
                          {Array.isArray(opt.value) && (
                            <div className="flex mt-1 space-x-1">
                              {opt.value.map((color, i) => (
                                <div
                                  key={i}
                                  className="w-4 h-4 rounded"
                                  style={{ backgroundColor: color }}
                                />
                              ))}
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 右侧预览区 */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">实时预览</h3>
              <div className="text-sm text-gray-500">
                {error ? '配置有误' : '配置正常'}
              </div>
            </div>
            
            <div className="border border-gray-300 rounded-lg overflow-hidden">
              <div style={{ transform: 'scale(0.7)', transformOrigin: 'top left', width: '142.86%', height: '700px' }}>
                {!error && <ConfigurableLoginPage />}
                {error && (
                  <div className="flex items-center justify-center h-full bg-gray-100">
                    <div className="text-center">
                      <div className="text-red-500 text-lg font-medium mb-2">
                        配置错误
                      </div>
                      <div className="text-gray-600 text-sm">
                        请检查 JSON 格式
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 