import { motion } from 'framer-motion'
import { Shield, Users, CheckCircle, Zap } from 'lucide-react'
import { useState } from 'react'
import GradientBlur from '../ui/GradientBlur'

export default function Features() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      icon: Shield,
      title: 'Simplify your security',
      description: 'Comprehensive security suite'
    },
    {
      icon: Users,
      title: 'Customer identity',
      description: 'Manage user authentication'
    },
    {
      icon: CheckCircle,
      title: 'Adaptable authentication',
      description: 'Flexible auth methods'
    }
  ]

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-transparent via-purple-900/5 to-transparent">
      <GradientBlur color="purple" size="large" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Label */}
        <motion.p
          className="text-purple-400 text-sm mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          The security first platform
        </motion.p>

        {/* Main Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Simplify your security with{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            authentication services
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-gray-400 text-base mb-12 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Define access roles for the end-users, and extend your authorization capabilities 
          to implement dynamic access control.
        </motion.p>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Tabs */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-full text-left p-4 rounded-lg border transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-purple-600/20 border-purple-500 shadow-lg shadow-purple-500/20'
                    : 'bg-gray-800/30 border-gray-700 hover:border-gray-600'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${
                    activeTab === index ? 'bg-purple-500/20' : 'bg-gray-700/50'
                  }`}>
                    <tab.icon className={`w-5 h-5 ${
                      activeTab === index ? 'text-purple-400' : 'text-gray-400'
                    }`} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base">{tab.title}</h3>
                    <p className="text-gray-400 text-sm">{tab.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            className="relative h-[400px] flex items-center justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {/* Glowing Center Element */}
            <div className="relative">
              {/* Outer Glow Rings */}
              <motion.div
                className="absolute inset-0 w-64 h-64 -left-32 -top-32"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-full h-full rounded-full bg-purple-500/20 blur-2xl" />
              </motion.div>

              {/* Grid Lines */}
              <svg className="absolute -left-32 -top-32 w-64 h-64" viewBox="0 0 200 200">
                <line x1="100" y1="0" x2="100" y2="200" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1" />
                <line x1="0" y1="100" x2="200" y2="100" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1" />
              </svg>

              {/* Center Icon */}
              <div className="relative w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-500/50">
                <Zap className="w-10 h-10 text-white" />
              </div>

              {/* Corner Markers */}
              {[
                { top: '-40px', left: '-40px' },
                { top: '-40px', right: '-40px' },
                { bottom: '-40px', left: '-40px' },
                { bottom: '-40px', right: '-40px' }
              ].map((pos, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 border-2 border-purple-500 rounded-sm"
                  style={pos}
                  animate={{
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}