import React from 'react'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { 
  MapPinIcon, 
  CameraIcon, 
  BookOpenIcon, 
  HeartIcon,
  UsersIcon,
  PhotoIcon,
  DocumentTextIcon,
  CalendarIcon
} from '@heroicons/react/24/outline'

export default function Home() {
  const features = [
    {
      id: 'travel',
      title: '旅游记录',
      description: '记录家庭出行的美好时光，分享旅游攻略与景点推荐',
      icon: MapPinIcon,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      items: ['旅游攻略', '景点推荐', '旅行日记', '路线规划']
    },
    {
      id: 'food',
      title: '美食分享',
      description: '家庭烹饪技巧分享，记录每一道温暖的家常菜',
      icon: CameraIcon,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      items: ['食谱分享', '烹饪技巧', '美食探店', '营养搭配']
    },
    {
      id: 'knowledge',
      title: '知识学习',
      description: '积累生活智慧，传承家庭文化与价值观',
      icon: BookOpenIcon,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      items: ['生活常识', '科普知识', '历史文化', '技能学习']
    },
    {
      id: 'health',
      title: '健康生活',
      description: '关注身心健康，营造温馨和谐的家庭氛围',
      icon: HeartIcon,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      items: ['运动健身', '心理健康', '饮食健康', '作息管理']
    }
  ]

  const stats = [
    { label: '家庭成员', value: '12+', icon: UsersIcon },
    { label: '分享内容', value: '156', icon: DocumentTextIcon },
    { label: '美好回忆', value: '89', icon: PhotoIcon },
    { label: '活动记录', value: '23', icon: CalendarIcon }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      {/* 英雄区域 */}
      <section className="relative px-4 pt-16 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              欢迎来到
              <span className="block text-orange-500 mt-2">Family Web</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
              记录家庭美好时光，分享生活点滴智慧。让每个家庭成员都能参与其中，共同创造温馨的数字家园。
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" leftIcon={<UsersIcon className="h-5 w-5" />}>
                开始记录
              </Button>
              <Button variant="outline" size="lg">
                了解更多
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 统计数据 */}
      <section className="py-12 bg-white/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <stat.icon className="h-6 w-6 text-orange-600" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-neutral-900">{stat.value}</div>
                <div className="text-sm text-neutral-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 功能特色区域 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
              丰富的家庭功能
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              为您的家庭量身定制的数字化解决方案
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card 
                key={feature.id} 
                className="p-6 text-center group"
                hover={true}
              >
                <div className={`inline-flex p-3 rounded-full ${feature.bgColor} mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-neutral-600 mb-4 text-sm leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="space-y-2">
                  {feature.items.map((item, index) => (
                    <div 
                      key={index}
                      className="text-sm text-neutral-500 px-3 py-1 bg-neutral-50 rounded-full inline-block mr-1 mb-1"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <Button variant="ghost" size="sm" className="w-full">
                    探索更多 →
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 行动号召区域 */}
      <section className="bg-gradient-to-r from-orange-500 to-pink-500 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            开始您的家庭数字化之旅
          </h2>
          <p className="mt-4 text-lg text-orange-100">
            加入我们，与家人一起创造和分享美好回忆
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-white text-orange-600 hover:bg-orange-50"
            >
              立即注册
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-orange-600"
            >
              查看演示
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 