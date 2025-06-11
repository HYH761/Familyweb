import React from 'react'
import { clsx } from 'clsx'

interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'outlined' | 'elevated'
  hover?: boolean
  onClick?: () => void
}

export function Card({ 
  children, 
  className, 
  variant = 'default', 
  hover = true,
  onClick 
}: CardProps) {
  const baseStyles = 'rounded-xl transition-all duration-200'
  
  const variants = {
    default: 'bg-white shadow-sm',
    outlined: 'bg-transparent border-2 border-neutral-300',
    elevated: 'bg-white shadow-lg border-0'
  }
  
  const hoverStyles = hover ? 'hover:shadow-xl hover:-translate-y-1' : ''
  const clickStyles = onClick ? 'cursor-pointer' : ''
  
  return (
    <div 
      className={clsx(
        baseStyles,
        variants[variant],
        hoverStyles,
        clickStyles,
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

interface CardHeaderProps {
  children: React.ReactNode
  className?: string
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <div className={clsx('px-6 py-4', className)}>
      {children}
    </div>
  )
}

interface CardContentProps {
  children: React.ReactNode
  className?: string
}

export function CardContent({ children, className }: CardContentProps) {
  return (
    <div className={clsx('px-6 py-4', className)}>
      {children}
    </div>
  )
}

interface CardFooterProps {
  children: React.ReactNode
  className?: string
}

export function CardFooter({ children, className }: CardFooterProps) {
  return (
    <div className={clsx('px-6 py-4', className)}>
      {children}
    </div>
  )
} 