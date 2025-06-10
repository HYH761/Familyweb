# 家庭交互平台（Family Interaction Platform）

## 项目简介

本项目是一个面向家庭成员的知识库与互动平台，支持知识分享、互动学习、内容分类、小游戏等功能，旨在提升家庭成员间的交流与共同成长。

## 主要功能
- 家庭知识库（支持多维度分类：旅游、美食、认知、健康等）
- 文章、视频、图片、链接等内容发布与管理
- 互动功能：点赞、评论、收藏、分享
- 用户注册、登录
- 响应式设计，适配多终端
- 后续可扩展教育小游戏、学习计划、错题本等

## 技术栈
- 前端框架：Next.js 15 + TypeScript
- 样式：Tailwind CSS v4
- 组件库：Headless UI、Heroicons
- 后端服务：Supabase (认证 + 数据库 + API)
- 部署平台：Vercel
- 数据库：PostgreSQL (Supabase)

## 📚 项目文档
- **项目规则与开发指南：** [`docs/PROJECT_RULES.md`](./docs/PROJECT_RULES.md)
- **开发快速指南：** [`docs/DEVELOPMENT_GUIDE.md`](./docs/DEVELOPMENT_GUIDE.md)
- **API 文档：** `docs/API.md` (待创建)
- **部署文档：** `docs/DEPLOYMENT.md` (待创建)

## 目录结构
```
family-platform/
├── src/
│   ├── app/           # 页面与路由
│   ├── components/    # 复用组件
│   ├── types/         # 类型定义
│   ├── lib/           # 工具库
│   ├── models/        # 数据模型
│   ├── styles/        # 全局样式
│   └── utils/         # 工具函数
├── public/            # 静态资源
├── package.json       # 项目依赖
├── tsconfig.json      # TypeScript 配置
├── next.config.ts     # Next.js 配置
└── README.md          # 项目说明
```

## 本地开发
1. 安装依赖：
   ```bash
   npm install
   ```
2. 启动开发服务器：
   ```bash
   npm run dev
   ```
3. 访问：
   [http://localhost:3000](http://localhost:3000)

## 部署说明
- 推荐使用 [Vercel](https://vercel.com/) 一键部署。
- 也可部署到 Netlify、阿里云、腾讯云等平台。
- 如需后端数据库支持，请补充相关环境变量和 API 路由。

## 贡献与扩展
- 欢迎家庭成员共同参与开发与内容建设。
- 可扩展更多互动功能、教育小游戏、学习数据分析等。

---

如有问题或建议，欢迎联系项目维护者。
# Familyweb
# Familyweb
