# 🚀 部署文档

## 🌐 部署架构

- **前端：** Vercel (自动部署)
- **后端：** Supabase (全托管)
- **域名：** familyweb-five.vercel.app
- **Git：** GitHub 自动触发部署

## ⚙️ 环境变量配置

### Vercel 环境变量
```bash
# Supabase 配置
NEXT_PUBLIC_SUPABASE_URL=https://jjndttannsyfmfpgvlpc.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# 其他配置
NODE_ENV=production
```

## 📋 部署流程

### 自动部署流程
1. **本地开发** → `git push` 到 GitHub
2. **Vercel 自动检测** → 构建项目
3. **部署预览** → 生成预览链接
4. **生产部署** → main 分支自动部署

### 手动部署步骤
```bash
# 1. 本地构建测试
npm run build

# 2. 提交代码
git add .
git commit -m "feat: 新功能描述"
git push origin main

# 3. 验证部署
# 查看 Vercel 控制台部署状态
```

## 🔧 Vercel 配置

### vercel.json 配置
```json
{
  "buildCommand": "cd family-platform && npm run build",
  "outputDirectory": "family-platform/.next",
  "framework": "nextjs",
  "installCommand": "cd family-platform && npm install"
}
```

## 📊 性能监控

- **Vercel Analytics** - 访问统计
- **Core Web Vitals** - 性能指标
- **Error Tracking** - 错误监控

## 🆘 故障排查

### 常见部署问题
1. **构建失败** → 检查 TypeScript 类型错误
2. **环境变量错误** → 验证 Supabase 配置
3. **路径问题** → 确认 vercel.json 配置正确
4. **依赖问题** → 检查 package.json 版本兼容性

### 回滚策略
- Vercel 支持一键回滚到上一个版本
- Git 版本控制提供完整历史记录