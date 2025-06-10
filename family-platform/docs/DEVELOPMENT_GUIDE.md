# 🚀 开发快速指南

## 🏁 快速开始

```bash
# 开发环境启动
cd family-platform
npm run dev

# 构建测试
npm run build

# 类型检查
npx tsc --noEmit
```

## 📋 当前开发重点

### 🎨 第一阶段：设计系统 (进行中)
- [ ] 自定义 Tailwind 主题配置
- [ ] 基础 UI 组件库
- [ ] 响应式布局系统

### 🔑 关键文件位置
- **项目规则：** `docs/PROJECT_RULES.md`
- **Tailwind 配置：** `tailwind.config.js`
- **Supabase 客户端：** `src/lib/supabase.ts`
- **类型定义：** `src/types/index.ts`

### 🚨 问题排查
1. 构建失败 → 检查 `PROJECT_RULES.md` 技术栈配置
2. 部署错误 → 查看 Vercel 部署日志
3. 数据库问题 → 检查 Supabase 配置

---
📖 **详细规范请参考：** [`PROJECT_RULES.md`](./PROJECT_RULES.md)