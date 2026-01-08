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
    purple: 'from-purple-600/60 via-purple-500/40 to-transparent',
    pink: 'from-pink-600/60 via-pink-500/40 to-transparent',
    blue: 'from-blue-600/60 via-blue-500/40 to-transparent',
  }

  const sizes = {
    small: 'w-64 h-64',
    medium: 'w-96 h-96',
    large: 'w-[700px] h-[700px]',
  }

  return (
    <div 
      className={`absolute ${sizes[size]} rounded-full bg-gradient-radial ${colors[color]} blur-3xl pointer-events-none ${className}`}
      aria-hidden="true"
    />
  )
}