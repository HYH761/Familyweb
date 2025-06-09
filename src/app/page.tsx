<<<<<<< HEAD
 
=======
import React from 'react'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">欢迎来到家庭交互平台</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* 旅游板块 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">旅游</h2>
          <ul className="space-y-2">
            <li>旅游攻略</li>
            <li>景点推荐</li>
            <li>旅行日记</li>
          </ul>
        </div>

        {/* 美食板块 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">美食</h2>
          <ul className="space-y-2">
            <li>食谱分享</li>
            <li>烹饪技巧</li>
            <li>美食探店</li>
          </ul>
        </div>

        {/* 认知板块 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">认知</h2>
          <ul className="space-y-2">
            <li>生活常识</li>
            <li>科普知识</li>
            <li>历史文化</li>
          </ul>
        </div>

        {/* 健康板块 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">健康</h2>
          <ul className="space-y-2">
            <li>运动健身</li>
            <li>心理健康</li>
            <li>饮食健康</li>
          </ul>
        </div>
      </div>
    </div>
  )
} 
>>>>>>> c938bd38051bd1eae9e18b3a0b01108f321c236d
