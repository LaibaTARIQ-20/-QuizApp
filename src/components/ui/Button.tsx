import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface ButtonProps {
  variant?:  'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children:  ReactNode
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export default function Button({ 
  variant = 'primary', 
  size = 'md',
  children,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}:   ButtonProps) {
  const baseStyles =
  'inline-flex items-center justify-center whitespace-nowrap font-medium rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700',
    ghost: 'text-gray-300 hover:text-white hover:bg-gray-800/50',
    outline: 'border-2 border-purple-600 text-purple-400 hover:bg-purple-600/10 hover:border-purple-500',
  }
  


const sizes = {
  sm: 'px-5 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

  return (
    <motion.button
      whileHover={{ scale:   1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </motion.button>
  )
}