import React from 'react'

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-100 flex flex-col items-center px-4">
      <h1 className="text-4xl font-extrabold text-center mt-16 mb-12 text-neutral-900 tracking-tight">欢迎来到家庭交互平台</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {/* 旅游板块 */}
        <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow border border-neutral-200 flex flex-col items-start">
          <h2 className="text-xl font-semibold mb-4 text-blue-600">旅游</h2>
          <ul className="space-y-2 text-neutral-700 text-base">
            <li>旅游攻略</li>
            <li>景点推荐</li>
            <li>旅行日记</li>
          </ul>
        </div>
        {/* 美食板块 */}
        <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow border border-neutral-200 flex flex-col items-start">
          <h2 className="text-xl font-semibold mb-4 text-pink-600">美食</h2>
          <ul className="space-y-2 text-neutral-700 text-base">
            <li>食谱分享</li>
            <li>烹饪技巧</li>
            <li>美食探店</li>
          </ul>
        </div>
        {/* 认知板块 */}
        <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow border border-neutral-200 flex flex-col items-start">
          <h2 className="text-xl font-semibold mb-4 text-green-600">认知</h2>
          <ul className="space-y-2 text-neutral-700 text-base">
            <li>生活常识</li>
            <li>科普知识</li>
            <li>历史文化</li>
          </ul>
        </div>
        {/* 健康板块 */}
        <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow border border-neutral-200 flex flex-col items-start">
          <h2 className="text-xl font-semibold mb-4 text-purple-600">健康</h2>
          <ul className="space-y-2 text-neutral-700 text-base">
            <li>运动健身</li>
            <li>心理健康</li>
            <li>饮食健康</li>
          </ul>
        </div>
      </div>
    </div>
  )
} 