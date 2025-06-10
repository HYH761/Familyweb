'use client'

import React from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { 
  MapPinIcon, 
  CameraIcon, 
  BookOpenIcon, 
  HeartIcon,
  ChatBubbleLeftRightIcon,
  PhotoIcon,
  VideoCameraIcon,
  CalendarDaysIcon,
  ClockIcon,
  StarIcon
} from '@heroicons/react/24/outline'

export default function FeaturesPage() {
  const mainFeatures = [
    {
      title: '旅游记录',
      description: '完整的家庭出行记录系统',
      icon: MapPinIcon,
      color: 'text-blue-600',
      bgGradient: 'from-blue-50 to-blue-100',
      features: [
        '智能路线规划与导航',
        '景点推荐与评价系统',
        '旅行预算管理工具',
        '行程分享与协作',
        '地理位置标记',
        '旅行回忆录自动生成'
      ]
    },
    {
      title: '美食分享',
      description: '记录与分享家庭美食文化',
      icon: CameraIcon,
      color: 'text-pink-600',
      bgGradient: 'from-pink-50 to-pink-100',
      features: [
        '智能食谱推荐',
        '营养成分分析',
        '烹饪步骤视频记录',
        '食材采购清单',
        '美食评分系统',
        '健康饮食建议'
      ]
    },
    {
      title: '知识学习',
      description: '家庭智慧传承与知识分享',
      icon: BookOpenIcon,
      color: 'text-green-600',
      bgGradient: 'from-green-50 to-green-100',
      features: [
        '家庭知识库构建',
        '技能学习进度跟踪',
        '在线学习资源整合',
        '知识分享与讨论',
        '学习成就系统',
        '个性化学习路径'
      ]
    },
    {
      title: '健康管理',
      description: '全方位的家庭健康管理',
      icon: HeartIcon,
      color: 'text-purple-600',
      bgGradient: 'from-purple-50 to-purple-100',
      features: [
        '健康数据监测',
        '运动计划制定',
        '心理健康评估',
        '健康提醒系统',
        '医疗档案管理',
        '健康报告生成'
      ]
    }
  ]

  const additionalFeatures = [
    {
      title: '实时通讯',
      description: '家庭成员之间的即时沟通',
      icon: ChatBubbleLeftRightIcon,
      color: 'text-indigo-600'
    },
    {
      title: '相册管理',
      description: '智能相册整理与分享',
      icon: PhotoIcon,
      color: 'text-cyan-600'
    },
    {
      title: '视频记录',
      description: '珍贵时刻的视频记录',
      icon: VideoCameraIcon,
      color: 'text-red-600'
    },
    {
      title: '日程管理',
      description: '家庭活动与重要日期管理',
      icon: CalendarDaysIcon,
      color: 'text-yellow-600'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
      {/* 页面标题 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold text-neutral-900 sm:text-5xl">
            平台功能特色
          </h1>
          <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
            为现代家庭量身打造的完整数字化解决方案，让家庭生活更加智能、便捷、温馨
          </p>
        </div>
      </section>

      {/* 主要功能区域 */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainFeatures.map((feature, index) => (
              <Card key={feature.title} className="overflow-hidden">
                <div className={`bg-gradient-to-br ${feature.bgGradient} p-6`}>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-white rounded-lg shadow-sm">
                      <feature.icon className={`h-8 w-8 ${feature.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-900">
                        {feature.title}
                      </h3>
                      <p className="text-neutral-600 mt-1">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {feature.features.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-2">
                        <StarIcon className="h-4 w-4 text-yellow-500 flex-shrink-0" />
                        <span className="text-sm text-neutral-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6">
                    <Button variant="outline" className="w-full">
                      了解详情
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 附加功能区域 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900">
              更多实用功能
            </h2>
            <p className="mt-4 text-neutral-600">
              持续更新的功能模块，满足家庭的各种需求
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature) => (
              <Card key={feature.title} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="inline-flex p-3 bg-neutral-50 rounded-full mb-4">
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-neutral-600">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 行动号召 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-500 to-pink-500">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white">
            开始体验完整功能
          </h2>
          <p className="mt-4 text-orange-100">
            立即注册，解锁所有功能，让您的家庭生活更加精彩
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-orange-600 hover:bg-orange-50"
            >
              免费注册
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-orange-600"
            >
              预约演示
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 