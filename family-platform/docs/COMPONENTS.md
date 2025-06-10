# 🎨 组件设计指南

## 📋 组件架构

### 组件分类
```
src/components/
├── ui/                      # 基础 UI 组件
│   ├── Button.tsx           # 按钮组件
│   ├── Card.tsx             # 卡片组件
│   ├── Modal.tsx            # 模态框组件
│   └── Input.tsx            # 输入框组件
├── layout/                  # 布局组件
│   ├── Header.tsx           # 头部导航
│   ├── Footer.tsx           # 底部导航
│   └── Sidebar.tsx          # 侧边栏
└── features/                # 功能组件
    ├── UserProfile.tsx      # 用户资料
    ├── ContentCard.tsx      # 内容卡片
    └── FamilyTree.tsx       # 家庭树
```

## 🎨 设计原则

### 1. 原子化设计
- **原子组件：** Button, Input, Icon
- **分子组件：** SearchBox, Navigation
- **组织组件：** Header, ContentList
- **模板组件：** Layout, PageTemplate

### 2. 响应式优先
```typescript
// 移动端优先的响应式设计
<div className="w-full md:w-1/2 lg:w-1/3">
  {/* 内容 */}
</div>
```

### 3. 可访问性
- 键盘导航支持
- ARIA 标签完整
- 高对比度支持
- 语义化 HTML

## 🔧 组件规范

### TypeScript 接口定义
```typescript
interface ComponentProps {
  children?: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  onClick?: () => void
}
```

### 样式系统
```typescript
// 使用 clsx 进行条件样式
import clsx from 'clsx'

const buttonStyles = clsx(
  'px-4 py-2 rounded-md font-medium',
  {
    'bg-orange-500 text-white': variant === 'primary',
    'bg-blue-500 text-white': variant === 'secondary',
    'bg-red-500 text-white': variant === 'danger',
  }
)
```

## 📝 组件文档模板

```typescript
/**
 * Button 组件
 * 
 * @description 通用按钮组件，支持多种样式和尺寸
 * @example
 * <Button variant="primary" size="md" onClick={handleClick}>
 *   点击按钮
 * </Button>
 */
export default function Button({ 
  children, 
  variant = 'primary',
  size = 'md',
  ...props 
}: ButtonProps) {
  return (
    <button className={buttonStyles} {...props}>
      {children}
    </button>
  )
}
```

## 🧪 测试规范

### 组件测试结构
```typescript
// Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import Button from './Button'

describe('Button 组件', () => {
  it('应该正确渲染', () => {
    render(<Button>测试按钮</Button>)
    expect(screen.getByText('测试按钮')).toBeInTheDocument()
  })

  it('应该响应点击事件', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>点击</Button>)
    fireEvent.click(screen.getByText('点击'))
    expect(handleClick).toHaveBeenCalled()
  })
})
```

## 🎯 待开发组件清单

### 第一阶段：基础 UI 组件
- [ ] Button - 按钮组件
- [ ] Card - 卡片组件
- [ ] Modal - 模态框组件
- [ ] Input - 输入框组件
- [ ] Avatar - 头像组件

### 第二阶段：布局组件
- [ ] Header - 导航头部
- [ ] Footer - 页面底部
- [ ] Sidebar - 侧边栏
- [ ] Layout - 页面布局

### 第三阶段：功能组件
- [ ] ContentCard - 内容卡片
- [ ] UserProfile - 用户资料
- [ ] FamilyInvite - 家庭邀请
- [ ] ContentEditor - 内容编辑器