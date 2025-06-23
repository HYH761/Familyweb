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
  CalendarIcon,
  SparklesIcon,
  HomeIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline'

export default function Home() {
  const featureCategories = [
    {
      id: 'travel',
      title: '旅游记录',
      description: '记录家庭出行的美好时光，分享旅游攻略与景点推荐',
      icon: MapPinIcon,
      image: '/images/travel.jpg',
      href: '/travel',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'food',
      title: '美食分享',
      description: '家庭烹饪技巧分享，记录每一道温暖的家常菜',
      icon: CameraIcon,
      image: '/images/food.jpg',
      href: '/food',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'knowledge',
      title: '知识学习',
      description: '积累生活智慧，传承家庭文化与价值观',
      icon: BookOpenIcon,
      image: '/images/knowledge.jpg',
      href: '/knowledge',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'health',
      title: '健康生活',
      description: '关注身心健康，营造温馨和谐的家庭氛围',
      icon: HeartIcon,
      image: '/images/health.jpg',
      href: '/health',
      color: 'from-pink-500 to-purple-500'
    }
  ]

  const stats = [
    { label: '家庭成员', value: '12+', icon: UsersIcon },
    { label: '分享内容', value: '156', icon: DocumentTextIcon },
    { label: '美好回忆', value: '89', icon: PhotoIcon },
    { label: '活动记录', value: '23', icon: CalendarIcon }
  ]

  const navigationItems = [
    { name: '首页', icon: HomeIcon, href: '/' },
    { name: '聊天', icon: ChatBubbleLeftRightIcon, href: '/chat' },
    { name: '相册', icon: PhotoIcon, href: '/photos' },
    { name: '日历', icon: CalendarIcon, href: '/calendar' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50">
      {/* 顶部导航 */}
      <nav className="relative z-10 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <HomeIcon className="h-8 w-8 text-blue-600 mr-2" />
                <span className="text-xl font-bold text-gray-900">Family Web</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">登录</Button>
              <Button size="sm">注册</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* 英雄区域 - 现代化设计 */}
      <section className="relative px-4 pt-20 pb-32 sm:px-6 lg:px-8 overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-purple-50"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-green-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
        
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <div className="flex flex-col items-center justify-center mb-8">
              {/* AI 图标装饰 */}
              <div className="flex items-center space-x-2 mb-6">
                <SparklesIcon className="h-6 w-6 text-blue-500" />
                <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  AI 驱动的家庭平台
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 mb-6">
                Family Web
              </h1>
            </div>
            
            <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-gray-600">
              现代化的家庭数字空间，记录生活美好瞬间，分享智慧与温暖。
              <br />
              让每个家庭成员都能参与其中，共同创造温馨的数字家园。
            </p>
            
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                size="xl" 
                leftIcon={<UsersIcon className="h-6 w-6" />}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-4 text-lg"
              >
                开始体验
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="border-2 border-gray-300 hover:border-gray-400 px-8 py-4 text-lg"
              >
                观看演示
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 统计数据 - 卡片式设计 */}
      <section className="py-20 -mt-16 relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl shadow-lg">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 功能分类展示 - 现代卡片设计 */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
              探索我们的世界
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              家庭记忆的每一个维度，用心记录，用爱分享
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-12">
            {featureCategories.map((category, index) => (
              <Link 
                key={category.id}
                href={category.href}
                className="group relative overflow-hidden rounded-3xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="aspect-[4/3] w-full relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-90`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                </div>
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl mr-4">
                      <category.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                  </div>
                  <p className="text-white/90 mb-6 text-lg leading-relaxed">
                    {category.description}
                  </p>
                  <div className="flex items-center text-white font-medium group-hover:translate-x-2 transition-transform duration-300">
                    <span className="mr-2">探索更多</span>
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 底部导航 - 移动端友好 */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 z-50">
        <div className="grid grid-cols-4 py-2">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex flex-col items-center justify-center py-2 px-1 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <item.icon className="h-6 w-6 mb-1" />
              <span className="text-xs">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* 行动号召区域 */}
      <section className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
        <div className="relative mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white sm:text-5xl mb-6">
            开始您的家庭数字化之旅
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            加入我们，与家人一起创造和分享美好回忆，让爱与温暖永远传递
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="xl"
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              立即开始
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg"
            >
              了解更多
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 