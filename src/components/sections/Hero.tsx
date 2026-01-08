import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, BookOpen } from 'lucide-react'
import Button from '../ui/Button'
import GradientBlur from '../ui/GradientBlur'
import StarField from '../ui/StarField'

export default function Hero() {
  const features = ['Real-time Monitoring', 'AI-Powered Detection', 'Zero Configuration']

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Star Field */}
      <StarField />
      
      {/* Animated Gradient Backgrounds */}
      <GradientBlur color="purple" size="large" className="top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <GradientBlur color="pink" size="medium" className="bottom-0 right-0 translate-x-1/2 translate-y-1/2" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-20" aria-hidden="true">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Beta Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Sparkles size={16} className="text-purple-400" />
            <span className="text-sm text-purple-300">API Studio is now in beta</span>
            <ArrowRight size={14} className="text-purple-400" />
          </motion.div>
          <br />

          {/* Main Heading */}
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-white">The API Security</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600">
              Framework
            </span>
          </motion.h1>
          <br />

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.
          </motion.p>
          <br />
          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button variant="primary" size="lg">
              Get Started
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button variant="outline" size="lg">
              <BookOpen className="mr-2" size={20} />
              Read the docs
            </Button>
          </motion.div>
          <br />
          {/* Feature Pills */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-300">{feature}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}