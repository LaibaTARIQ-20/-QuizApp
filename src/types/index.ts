import type { ReactNode } from 'react'

export interface Feature {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  items?: string[]
}

export interface PricingPlan {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  highlighted?: boolean
  ctaText: string
}

export interface NavItem {
  label: string
  href: string
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  className?: string
}