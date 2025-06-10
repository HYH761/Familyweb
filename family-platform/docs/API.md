# 📡 API 文档

## 🎯 概述

本项目使用 Supabase 作为后端服务，提供认证、数据库和实时功能。

## 🔐 认证 API

### Supabase Auth 配置
```typescript
// src/lib/supabase.ts
import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}
```

### 用户认证流程
- **注册：** 邮箱验证注册
- **登录：** 邮箱密码登录
- **社交登录：** 支持第三方登录（待扩展）
- **密码重置：** 邮箱重置链接

## 🗄️ 数据库结构

### 主要数据表
- `users` - 用户信息
- `families` - 家庭组织
- `contents` - 内容数据
- `categories` - 分类信息

## 🔒 权限控制

使用 Supabase RLS (Row Level Security) 确保数据安全：
- 用户只能访问自己的数据
- 家庭成员可以共享内容
- 基于角色的权限管理

## 📋 待实现 API

- [ ] 用户管理 API
- [ ] 内容发布 API
- [ ] 家庭成员管理 API
- [ ] 文件上传 API 