'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { 
  EyeIcon, 
  EyeSlashIcon,
  EnvelopeIcon,
  LockClosedIcon,
  HomeIcon
} from '@heroicons/react/24/outline'

// 导入配置文件
import loginConfig from '@/config/login-page-config.json'

// 类型定义
interface LoginConfigType {
  page: any
  container: any
  header: any
  form: any
  options: any
  buttons: any
  divider: any
  socialLogin: any
  footer: any
  navigation: any
  responsive: any
  animations: any
  accessibility: any
}

// 图标映射
const iconMap = {
  envelope: EnvelopeIcon,
  lock: LockClosedIcon,
  home: HomeIcon,
  eye: EyeIcon,
  eyeSlash: EyeSlashIcon
}

// 样式转换函数
const convertStyleToCSS = (styleObj: any): React.CSSProperties => {
  const cssStyle: React.CSSProperties = {}
  
  Object.keys(styleObj).forEach(key => {
    if (key === 'hover' || key === 'focus') return // 处理伪类另外处理
    
    // 转换驼峰命名
    const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase() as keyof React.CSSProperties
    cssStyle[cssKey] = styleObj[key]
  })
  
  return cssStyle
}

// 配置驱动的登录页面组件
export default function ConfigurableLoginPage() {
  const config: LoginConfigType = loginConfig
  const [formData, setFormData] = useState<{ [key: string]: any }>({})
  const [showPasswords, setShowPasswords] = useState<{ [key: string]: boolean }>({})
  const [rememberMe, setRememberMe] = useState(config.options.rememberMe.defaultChecked)
  const [isLoading, setIsLoading] = useState(false)

  // 处理输入变化
  const handleInputChange = (fieldId: string, value: any) => {
    setFormData(prev => ({ ...prev, [fieldId]: value }))
  }

  // 切换密码显示
  const togglePasswordVisibility = (fieldId: string) => {
    setShowPasswords(prev => ({ ...prev, [fieldId]: !prev[fieldId] }))
  }

  // 处理表单提交
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // 模拟API调用
    setTimeout(() => {
      console.log('登录数据:', formData, { rememberMe })
      setIsLoading(false)
    }, 2000)
  }

  // 渲染表单字段
  const renderFormField = (field: any) => {
    const IconComponent = iconMap[field.icon as keyof typeof iconMap]
    const isPassword = field.type === 'password'
    const fieldValue = formData[field.id] || ''
    const showPassword = showPasswords[field.id] || false

    return (
      <div key={field.id} style={{ marginBottom: config.form.spacing }}>
        <label 
          htmlFor={field.id}
          style={{
            display: 'block',
            fontSize: '14px',
            fontWeight: '500',
            color: '#374151',
            marginBottom: '8px'
          }}
        >
          {field.label}
        </label>
        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute',
            left: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            pointerEvents: 'none'
          }}>
            {IconComponent && <IconComponent style={{ width: '20px', height: '20px', color: '#9ca3af' }} />}
          </div>
          <input
            id={field.id}
            type={isPassword ? (showPassword ? 'text' : 'password') : field.type}
            placeholder={field.placeholder}
            required={field.required}
            value={fieldValue}
            onChange={(e) => handleInputChange(field.id, e.target.value)}
            style={{
              ...convertStyleToCSS(field.style),
              width: '100%',
              outline: 'none',
              transition: 'all 0.2s ease'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = field.style.focusBorder
              e.target.style.boxShadow = field.style.focusRing
            }}
            onBlur={(e) => {
              e.target.style.borderColor = field.style.border.split(' ')[2]
              e.target.style.boxShadow = 'none'
            }}
          />
          {isPassword && field.showToggle && (
            <button
              type="button"
              onClick={() => togglePasswordVisibility(field.id)}
              style={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px'
              }}
            >
              {showPassword ? (
                <EyeSlashIcon style={{ width: '20px', height: '20px', color: '#9ca3af' }} />
              ) : (
                <EyeIcon style={{ width: '20px', height: '20px', color: '#9ca3af' }} />
              )}
            </button>
          )}
        </div>
      </div>
    )
  }

  // 渲染社交登录按钮
  const renderSocialButton = (provider: any) => {
    return (
      <button
        key={provider.id}
        type="button"
        style={convertStyleToCSS(provider.style)}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = provider.style.hover.background
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = provider.style.background
        }}
      >
        <span>{provider.name}</span>
      </button>
    )
  }

  return (
    <div style={{
      minHeight: config.page.layout.minHeight,
      background: `linear-gradient(${config.page.background.direction}, ${config.page.background.colors.join(', ')})`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: config.page.layout.padding.desktop,
      position: 'relative'
    }}>
      {/* 导航 - 返回首页 */}
      {config.navigation.backToHome.enabled && (
        <Link 
          href={config.navigation.backToHome.link}
          style={convertStyleToCSS(config.navigation.backToHome.style)}
        >
          <HomeIcon style={{ width: '20px', height: '20px' }} />
          <span className="hidden sm:inline">{config.navigation.backToHome.text}</span>
        </Link>
      )}

      <div style={{ maxWidth: config.page.layout.maxWidth, width: '100%' }}>
        {/* 主容器 */}
        <div style={convertStyleToCSS(config.container.style)}>
          {/* 头部 */}
          <div style={{ textAlign: 'center' }}>
            {/* Logo */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
              <div style={{
                background: `linear-gradient(${config.header.logo.background.direction}, ${config.header.logo.background.colors.join(', ')})`,
                padding: '12px',
                borderRadius: config.header.logo.borderRadius,
                boxShadow: config.header.logo.shadow
              }}>
                <HomeIcon style={{ 
                  width: config.header.logo.size, 
                  height: config.header.logo.size, 
                  color: config.header.logo.color 
                }} />
              </div>
            </div>

            {/* 标题 */}
            <h2 style={convertStyleToCSS(config.header.title)}>
              {config.header.title.text}
            </h2>

            {/* 副标题 */}
            <p style={convertStyleToCSS(config.header.subtitle)}>
              {config.header.subtitle.text}
            </p>
          </div>

          {/* 表单 */}
          <form onSubmit={handleSubmit} style={{ marginTop: config.form.marginTop }}>
            {/* 表单字段 */}
            {config.form.fields.map(renderFormField)}

            {/* 选项行 */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: config.form.spacing
            }}>
              {/* 记住我 */}
              {config.options.rememberMe.enabled && (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    id="remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    style={{
                      width: '16px',
                      height: '16px',
                      accentColor: '#f97316',
                      marginRight: '8px'
                    }}
                  />
                  <label htmlFor="remember-me" style={{ fontSize: '14px', color: '#374151' }}>
                    {config.options.rememberMe.label}
                  </label>
                </div>
              )}

              {/* 忘记密码 */}
              {config.options.forgotPassword.enabled && (
                <Link 
                  href={config.options.forgotPassword.link}
                  style={convertStyleToCSS(config.options.forgotPassword.style)}
                >
                  {config.options.forgotPassword.text}
                </Link>
              )}
            </div>

            {/* 登录按钮 */}
            <button
              type="submit"
              disabled={isLoading}
              style={{
                ...convertStyleToCSS(config.buttons.primary.style),
                opacity: isLoading ? 0.7 : 1
              }}
              onMouseEnter={(e) => {
                if (!isLoading) {
                  e.currentTarget.style.background = config.buttons.primary.style.hover.background
                  e.currentTarget.style.transform = config.buttons.primary.style.hover.transform
                  e.currentTarget.style.boxShadow = config.buttons.primary.style.hover.boxShadow
                }
              }}
              onMouseLeave={(e) => {
                if (!isLoading) {
                  e.currentTarget.style.background = config.buttons.primary.style.background
                  e.currentTarget.style.transform = 'none'
                  e.currentTarget.style.boxShadow = config.buttons.primary.style.boxShadow
                }
              }}
            >
              {isLoading ? config.buttons.primary.loading.text : config.buttons.primary.text}
            </button>

            {/* 分隔线 */}
            {config.divider.enabled && (
              <div style={convertStyleToCSS(config.divider.style)}>
                <div style={{ position: 'relative' }}>
                  <div style={{
                    position: 'absolute',
                    inset: '0',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <div style={{ width: '100%', borderTop: '1px solid #e5e7eb' }} />
                  </div>
                  <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                    <span style={{
                      padding: '0 8px',
                      background: 'white',
                      color: config.divider.style.color,
                      fontSize: config.divider.style.fontSize
                    }}>
                      {config.divider.text}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* 社交登录 */}
            {config.socialLogin.enabled && (
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '12px'
              }}>
                {config.socialLogin.providers.map(renderSocialButton)}
              </div>
            )}
          </form>

          {/* 页脚 */}
          {config.footer.register.enabled && (
            <div style={convertStyleToCSS(config.footer.register.style)}>
              <span style={{ color: config.footer.register.style.color }}>
                {config.footer.register.text}{' '}
              </span>
              <Link 
                href={config.footer.register.link}
                style={convertStyleToCSS(config.footer.register.linkStyle)}
              >
                {config.footer.register.linkText}
              </Link>
            </div>
          )}

          {/* 条款链接 */}
          {config.footer.terms.enabled && (
            <div style={convertStyleToCSS(config.footer.terms.style)}>
              <p>{config.footer.terms.text}</p>
              <div style={{ marginTop: '4px' }}>
                {config.footer.terms.links.map((link: any, index: number) => (
                  <span key={link.url}>
                    <Link href={link.url} style={{ color: '#f97316' }}>
                      {link.text}
                    </Link>
                    {index < config.footer.terms.links.length - 1 && <span style={{ margin: '0 16px' }}>·</span>}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 