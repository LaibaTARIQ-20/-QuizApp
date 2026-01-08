interface GradientBlurProps {
  color?: 'purple' | 'pink' | 'blue'
  size?: 'small' | 'medium' | 'large'
  className?: string
}

export default function GradientBlur({
  color = 'purple',
  size = 'medium',
  className = '',
}: GradientBlurProps) {
  const colors = {
    purple: 'from-purple-600/40 via-purple-500/30 to-transparent',
    pink: 'from-pink-600/40 via-pink-500/30 to-transparent',
    blue: 'from-blue-600/40 via-blue-500/30 to-transparent',
  }

  const sizes = {
    small: 'w-64 h-64',
    medium: 'w-96 h-96',
    large: 'w-[600px] h-[600px]',
  }

  return (
    <div 
      className={`absolute ${sizes[size]} rounded-full bg-gradient-radial ${colors[color]} blur-3xl pointer-events-none ${className}`}
      aria-hidden="true"
    />
  )
}