'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { 
  HeartIcon,
  LightBulbIcon,
  UsersIcon,
  StarIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

export default function AboutPage() {
  const values = [
    {
      title: '家庭第一',
      description: '我们相信家庭是社会的基石，每个家庭都值得拥有更好的数字化体验。',
      icon: HeartIcon,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50'
    },
    {
      title: '持续创新',
      description: '通过技术创新，不断改善用户体验，让科技真正服务于生活。',
      icon: LightBulbIcon,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      title: '用户至上',
      description: '倾听用户声音，以用户需求为导向，创造真正有价值的产品。',
      icon: UsersIcon,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: '品质保证',
      description: '严格的质量标准，确保每一个功能都经过精心设计和充分测试。',
      icon: StarIcon,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ]

  const milestones = [
    {
      year: '2024',
      title: '平台构想',
      description: '基于现代家庭的数字化需求，开始平台的整体规划和设计。'
    },
    {
      year: '2025',
      title: '技术架构',
      description: '完成基础技术架构搭建，采用 Next.js + Supabase 的现代化技术栈。'
    },
    {
      year: '2025',
      title: '核心功能',
      description: '开发核心功能模块，包括用户管理、内容分享、家庭互动等。'
    },
    {
      year: '未来',
      title: '持续演进',
      description: '基于用户反馈持续优化，引入 AI 技术，打造智能化家庭平台。'
    }
  ]

  const features = [
    '现代化的用户界面设计',
    '完整的响应式体验',
    '强大的数据安全保障',
    '丰富的功能模块',
    '便捷的家庭协作工具',
    '智能化的内容推荐'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
      {/* 页面标题 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-500 to-pink-500">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            关于我们
          </h1>
          <p className="mt-6 text-xl text-orange-100 max-w-2xl mx-auto">
            致力于为现代家庭打造最优秀的数字化互动平台，让每个家庭都能享受科技带来的便利与温暖。
          </p>
        </div>
      </section>

      {/* 使命愿景 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
              我们的使命与愿景
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              通过技术创新，让家庭生活更加美好
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                我们的使命
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                为现代家庭提供简单、安全、高效的数字化解决方案，让家庭成员能够更好地连接、分享和成长。我们相信技术应该服务于人，让每个家庭都能享受到数字时代的便利。
              </p>
              
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                我们的愿景
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed">
                成为全球领先的家庭数字化平台，让每个家庭都能拥有属于自己的数字空间，记录美好时光，传承家庭文化，创造温馨回忆。
              </p>
            </div>

            <Card className="p-8">
              <h4 className="text-xl font-semibold text-neutral-900 mb-6">
                平台特色
              </h4>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-neutral-700">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 核心价值观 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
              我们的核心价值观
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              指导我们前进的核心理念
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="text-center p-6">
                <div className={`inline-flex p-4 rounded-full ${value.bgColor} mb-4`}>
                  <value.icon className={`h-8 w-8 ${value.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 发展历程 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
              发展历程
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              我们的成长之路
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 font-bold text-sm">
                      {milestone.year}
                    </span>
                  </div>
                </div>
                <Card className="flex-1 p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-neutral-600">
                    {milestone.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 行动号召 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            加入我们的数字化家庭
          </h2>
          <p className="mt-4 text-lg text-blue-100">
            现在就开始您的家庭数字化之旅，与我们一起创造美好的未来
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50"
              rightIcon={<ArrowRightIcon className="h-5 w-5" />}
            >
              立即体验
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              了解更多
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 