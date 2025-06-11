import React from 'react'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import Link from 'next/link'
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
  const featureCategories = [
    {
      id: 'travel',
      title: '旅游记录',
      description: '记录家庭出行的美好时光，分享旅游攻略与景点推荐',
      icon: MapPinIcon,
      image: '/images/travel.jpg',
      href: '/travel'
    },
    {
      id: 'food',
      title: '美食分享',
      description: '家庭烹饪技巧分享，记录每一道温暖的家常菜',
      icon: CameraIcon,
      image: '/images/food.jpg',
      href: '/food'
    },
    {
      id: 'knowledge',
      title: '知识学习',
      description: '积累生活智慧，传承家庭文化与价值观',
      icon: BookOpenIcon,
      image: '/images/knowledge.jpg',
      href: '/knowledge'
    },
    {
      id: 'health',
      title: '健康生活',
      description: '关注身心健康，营造温馨和谐的家庭氛围',
      icon: HeartIcon,
      image: '/images/health.jpg',
      href: '/health'
    }
  ]

  const stats = [
    { label: '家庭成员', value: '12+', icon: UsersIcon },
    { label: '分享内容', value: '156', icon: DocumentTextIcon },
    { label: '美好回忆', value: '89', icon: PhotoIcon },
    { label: '活动记录', value: '23', icon: CalendarIcon }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* 英雄区域 */}
      <section className="relative px-4 pt-16 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-4">
                Family Web
              </h1>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
              记录家庭美好时光，分享生活点滴智慧。让每个家庭成员都能参与其中，共同创造温馨的数字家园。
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" leftIcon={<UsersIcon className="h-5 w-5" />}>
                开始记录
              </Button>
              <Button variant="ghost" size="lg">
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
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <stat.icon className="h-6 w-6 text-gray-700" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-neutral-900">{stat.value}</div>
                <div className="text-sm text-neutral-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 功能分类展示 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
              探索我们的世界
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              家庭记忆的每一个维度
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {featureCategories.map((category) => (
              <Link 
                key={category.id}
                href={category.href}
                className="group relative overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-lg"
              >
                <div className="aspect-[16/9] w-full relative">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center mb-2">
                    <category.icon className="h-6 w-6 mr-2" />
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <p className="text-sm text-gray-200 mb-3 opacity-90">
                    {category.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-white">
                    查看详情
                    <svg className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 行动号召区域 */}
      <section className="bg-gray-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            开始您的家庭数字化之旅
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            加入我们，与家人一起创造和分享美好回忆
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-white text-gray-800 hover:bg-gray-100"
            >
              立即注册
            </Button>
            <Button 
              variant="ghost" 
              size="lg"
              className="text-white hover:bg-white/10"
            >
              查看演示
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 